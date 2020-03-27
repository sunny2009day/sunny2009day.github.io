---
title: mongo+react+graphql微服务初接触
categories: Engineering
date: 2019-11-18 12:38:11
pid: 20191118-123811
pin: 100
---
# 新建model.js 作为mongo连接和初始化表文件

```c
Cannot connect to the MongoDB at localhost:27017.Network is unreachable
```
本地除了安装mongo GUI的robo,还需要安装mongo数据库啊,除此之外需要在系统服务中启动mongo服务
- 安装完mongo之后启动,打开在node的koa的中间件中

```c
// 监听4000端口
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true //查询工具
}));
```
那么打开`http://localhost:4000/graphql`就可以查看到graphiql的网页调试界面

**graphiql 是查询工具单词没有拼错**

如下在node中初始化的数据类型
```c
const queryObj = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: '字段的描述',
        products: {
            type: new GraphQLList(Product),
            resolve(parent) {
                //return products.filter(item => item.category === parent.id);
                return ProductModel.find({ category: parent.id });
            }
        }
    })
});
```
- GraphQLObjectType是GraphQL.js定义的对象类型，包括name、fields 和id三个属性，其中name和description 是非必填的。fields是解析函数，在这里可以理解为查询方法

