const path = require("path")
const fs = require("fs-extra")

// const TEMP_DIR = "./src"
const DEST_DIR = "./docs/"
// let nav = [], navObj, sidebarObj=[];
// /**
//  * 将src中的md复制到public对应文件夹下
//  * @param {*} item
//  * @param {*} m
//  */
// const copyMd = async (item, m, subDir) => {
//   let extname = path.extname(m)
//   let chunkFilePath = path.resolve(subDir, m)

//   if (extname === ".md") {
//     let newDirName = m.match(/\w*[^\.md]/g)
//     newDirName = newDirName[newDirName.length - 1]
//     let newDirRout = `${DEST_DIR}/${item}/${newDirName}`
//     await fs.ensureDir(newDirRout)
//     // 管道复制
//     fs.createReadStream(chunkFilePath).pipe(
//       fs.createWriteStream(`${newDirRout}/${m}`, {
//         flags: "a"
//       })
//     )

//   }
// }
// const syncPostToPb = async () => {
//   let allDir = await fs.readdir(TEMP_DIR) // 查找一级目录
//   // forEach函数内部是异步的,遇到这种问题请使用for循环
//   for(let i=0,lth=allDir.length; i< lth; i++) {
//     let item = allDir[i]
//     let sidebarSingle = []
//     let multiple = {
//       text: `${item}-parent`,
//       items: []
//     }
//     const chunksDir = path.resolve(DEST_DIR, item)
//     let exist = await fs.pathExists(chunksDir)
//     if (!exist) {
//       await fs.mkdir(chunksDir)
//     }
//     // 二级目录
//     let subDir = `${TEMP_DIR}/${item}/`
//     let redMd = await fs.readdir(subDir)
//     if (redMd.length > 1) {
//       for(let j =0,jth =redMd.length; j<jth; j++) {
//         let m = redMd[j]
//         sidebarSingle.push([`./${item}/${m}`, `${m}`])
//         multiple.items.push({
//           text: `${m}`,
//           link: `/${item}/${m}`
//         })
//         copyMd(item, m, subDir);
//       }
//     } else {
//       sidebarSingle.push([`./${item}/`, `${item}`])
//       nav.push({
//         text: item,
//         link: `/${item}/`
//       })
//       copyMd(item, redMd[0], subDir)
//     }
//     sidebarObj.push(sidebarSingle)
//     nav.push(multiple);
//   }
//   return nav;
// }
// let asyncFn = syncPostToPb()
// asyncFn.then((res)=> {
//   console.log(sidebarObj)
//   navObj = res
// })
function getMulSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        '2018-11-15-360Enterprise-safety',
        '2018-11-17-interviewAnalysis'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        '2019-09-22-jsSenior',
        '2019-11-06-interviewSummary',
        '2019-11-16-telphoneview'
      ]
    }
  ]
}

async function getAllSidebar() {
  let allDir, res = []
  let allGroupDir = `${DEST_DIR}/all/`
  allDir = await fs.readdir(allGroupDir);

  for(let i =0,lth=allDir.length; i<lth; i++) {
    if(allDir[i]!='.vuepress'&&allDir[i]!='README.md'&&allDir[i]!='all'){
      let groupItem =  {
        title: allDir[i],
        collapsable: false,
        children: []
      }
      let subDir = await fs.readdir(`${allGroupDir}${allDir[i]}`)
      for(let j =0,jth=subDir.length; j<jth; j++) {
        let fileName = subDir[j].replace(/\.md/g, '')
        groupItem.children.push(`${allDir[i]}/${fileName}`)
      }
      res.push(groupItem)
    }
  }
  return [
    ...res
  ]
}
async function getSidebar(groupA, introductionA) {
  let allDir, newDir = []
  allDir = await fs.readdir(`${DEST_DIR}${groupA}`)
  for(let i =0,lth=allDir.length; i<lth; i++) {
    allDir[i]!='README.md'&&newDir.push(allDir[i].replace(/\.md/g, ''))
  }
 
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', introductionA],
        ...newDir
      ]
    }
  ]
}
 
 
// async function execute() {
//   let s = await getAllSidebar('all', 'Introduction')
//   console.log(s)
// }
// execute();

module.exports = async function(){
  return {
    title: "挣扎的咸鱼",
    base: '/sunny2009day.github.io/',
    description: "自己做自己的大神吧",
    theme: 'vuepress-theme-yilia-plus',
    plugins: [
      ['@vuepress/back-to-top', true],
      [
        'vuepress-plugin-mygitalk', {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 是否开启首页评论(default: true)
          home: true,
          // Gitalk配置
          gitalk: {
            // GitHub Application Client ID.
            clientID: 'ebd3ae9933f4398b07d1',
            // GitHub Application Client Secret.
            clientSecret: '94f4eb9054e710616013dba89d1466aa9fd94b99',
            // GitHub repository. 存储评论的 repo
            repo: 'sunny2009day.github.io',
            // GitHub repository 所有者，可以是个人或者组织。
            owner: 'sunny2009day',
            // 设置语言(default: zh-CN)
            language: 'zh-CN',
          }
        }
      ],
    ],
    themeConfig: {
      nav: require('./nav'),
      sidebar: {
        '/all/': await getAllSidebar('all', 'Introduction'),
        '/js/': await getSidebar('js', 'Introduction'),
        '/css/': await getSidebar('css', 'Introduction') ,
        '/Interview/': getMulSidebar('Interview', 'Advanced'),
      },
      /* vuepress-theme-yilia-plus 配置 */
      yilia_plus: {
        // github-corner(关闭请设置为false)
        github: {
          url: "https://sunny2009day.github.io/"
        },
        footer: {
          // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
          since: 2019,
          // 网站作者(关闭请设置为false)
          author: '<a href="https://sunny2009day.github.io/" target="_blank">积极向上</a>',
          // 访问量统计功能(不蒜子)
          busuanzi: {
            // 是否启用(关闭请设置为false)
            enable: true
          }
        }
      }
    }
  }
};