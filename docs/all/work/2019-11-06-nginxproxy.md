---
title: nginx反向代理
date:   2019-11-06 18:07:16
---

> location [=|~|~*|^~] /uri/ { … }中的相关规则
- = 开头表示精确匹配
- ^~ 开头表示uri以某个常规字符串开头，理解为匹配 url路径即可。nginx不对url做编码，因此请求为/static/20%/aa，- 可以被规则^~ /static/ /aa匹配到（注意是空格）。
- ~ 开头表示区分大小写的正则匹配
- ~* 开头表示不区分大小写的正则匹配
- !~和!~*分别为区分大小写不匹配及不区分大小写不匹配 的正则
- / 通用匹配，任何请求都会匹配到。

> nginx反向代理和静态文件拦截:
```c
#负载均衡服务器池
    upstream express {
       server  127.0.0.1:8888; 
    }
    #3333端口指向门户网站
    server {
        listen       9000; 
        server_name  www.portal.com; 
        #charset koi8 - r; 
        access_log  logs/nodejs/express.log; 
        #静态文件拦截器
        location ~ . * \.(html | htm | js | css | gif | jpg | jpeg | png | bmp | swf | ico)$ {
        root  D:/git_in_Intranet/cloud_platform/front/src; 
        access_log off; 
        add_header Cache - Control no - store; #禁止缓存
        #expires max; #设置缓存上面定义的后缀文件缓存到浏览器的生存时间
    }

    location ~ ^/(lib/| module/| common/| css/| images/| js/| mainpage) {
        root  D:/git_in_Intranet/cloud_platform/front/src; 
        access_log off; 
        expires max; 
    }
  
    location /nodecache/ { #nodecache 指定的key_zone
        allow 127.0.0.1; #只允许本机访问  
        deny all; #禁止其他所有ip  
        # proxy_cache_purge  /nodecache $uri; #清理缓存  
    }
  
    location = / {
      root   D:/git_in_Intranet/cloud_platform/front/src; 
      index  index.html index.htm; 
    }
    # 请求得地址是http://express
    # location /api {
    # proxy_set_header X - Real - IP $remote_addr; 
    # proxy_set_header X - Forwarded - For $proxy_add_x_forwarded_for; 
    #  proxy_set_header Host  $http_host; 
    #  proxy_set_header X - Nginx - Proxy true; 
    # proxy_set_header Connection ""; 

    #proxy_cache nodecache; 
    #proxy_cache_key $url; #定义缓存唯一key, 通过唯一key来进行hash存取
  
    # proxy_pass   http://express/;
    # proxy_redirect default; 
    #  }
    # 实际请求得路径http://express/psite
    location /psite {
    proxy_set_header X - Real - IP $remote_addr; 
      proxy_set_header X - Forwarded - For $proxy_add_x_forwarded_for; 
      proxy_set_header Host  $http_host; 
      proxy_set_header X - Nginx - Proxy true; 
      proxy_set_header Connection ""; 
      #proxy_cache nodecache; 
      #proxy_cache_key $url; #定义缓存唯一key, 通过唯一key来进行hash存取
      proxy_pass   http://express/;
      proxy_redirect default; 
    }
    #location /portal {
        # proxy_set_header X - Real - IP $remote_addr; 
        # proxy_set_header X - 
```

> nginx 其起服务只能监听80端口,代理包不包扣重定向pathRewrite得区别是proxy_pass属性后的'/';
 - 如果访问得是http://A
    location  = /location/
    proxy_pass   http://express/; http://A/location/ => http://express/
 -   location  = /location/
    proxy_pass   http://express;  http://A/location/ => http://express/location/
