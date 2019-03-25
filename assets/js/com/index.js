//style.less
require('../../less/style.less');

var $ = require('jquery');
require('../rem')

var arr = [
    {
        title:'<h2 class="text-center" style="text-align: center">中央控制室</h2>',
        content:
            '<p>各位领导，大家好！欢迎来到富日智造，富日智造占地面积 45 亩，建筑面积 3 万多平方米，'+
            '总投资 1.5 亿元，基地拥有甲类生产、甲类仓储、甲类运输等全部资质，是整个化工行业最'+
            '高级别最全资质，我们工厂主要生产印刷领域三大类产品、胶印油墨(四色墨、专色墨、UV'+
            '墨、荧光墨、金银墨）水性光油、UV 光油、及喷粉、化学品等，还有新能源领域汽车添加'+
            '剂、燃油宝、代替汽油、柴油等相关产品。您现在看到的是我们基地总中央控制系统，我们'+
            '将工厂所有设备通过智能化物联网技术集成 PLC 控制模块对设备的运行状态、温度、流量、'+
            '压力等数据进行了在线采集，每天早上上班车间的设备必须通过中央控制系统确定正常后发'+
            '出指令才可以开启，每天投料多少、出来多少成品全部都是在线记录跟我们的 ERP 系统进行'+
            '对接，不需要人工记录，大大提高了效率，每一个环节都可以在系统查的到，出现任何状况'+
            '都会自动报警。下面我为大家介绍一下产品生产工艺，我们首先将生产工艺为大家演示一下，'+
            '等一下去现场看可能会更有印象。</p>'+
            '<b>1，树脂工艺：</b>'+
            '<p>生产油墨最核心的就是树脂，我们生产的树脂全部是纯植物油和松香改性树脂合成，我们'+
            '用的植物油有大豆油、亚麻油、和桐油，我们的高端油墨全部用桐油做，比如我们的迪可马'+
            '仕达 9908 油墨，桐油比亚麻油大豆油具有更高光泽、更快干等特性，国内目前已经没有那个'+
            '油墨厂用桐油做油墨了，因为价格太贵了，一般桐油主要用在家具领域比较多，我们树脂生'+
            '产工艺是通过中央控制台输入配方，然后一键操作，各种物料就会跟据生产工艺自动完成，'+
            '每一个物料投完料搅拌多长时间、加温、降温、反应等过程都是自动完成，我们树脂车间就'+
            '两个人操作，一个操作中控台人员，一个在线监测人员，可以年产两万吨树脂，树脂练完以'+
            '后通过系统自动打入相对应的连接料储罐。</p>'+
            '<b>2.油墨工艺</b>'+
            '<p>我们生产油墨工艺是通过德国涂料化工行业自动化工艺参考和我们自主对油墨生产的特性自'+
            '主创新的一套生产工艺，我们的生产工艺跟传统油墨厂生产工艺不同，我们是纵向布局，其'+
            '他油墨厂一般都是横向的，我们先看一下传统油墨厂是怎么生产油墨的'+
            '传统工艺：由人工拉着拉缸到不同的连接料储罐用地磅将树脂连接料称好接入拉缸，然后拉'+
            '到搅拌机跟前在人工投颜料进行搅拌，搅拌完以后拉缸拉到珠磨机器研磨，再人工通过拉缸'+
            '拉到三辊机进行研磨，要研磨两到三遍才能达到 12-15μ的细度，有的油墨厂甚至没有珠磨机，'+
            '全部用三辊机研磨，要研磨七八遍才能达到细度，然后用三辊机包装，打包，浪费的大量的'+
            '人力还效率低下，品质还不能保证，造成很大污染、如果一个年产 15000 万的传统工厂要用'+
            '差不多 300 人左右。</p>'+
            '<p>现有工艺：我们所有设备通过管道链接、集成 PLC 控制模块，根据生产工艺流程全部实现程'+
            '序控制；能不用人的地点觉对不用人，我司的工艺从三楼投料预分散，分散完通过管道输送'+
            '到二楼珠磨机进行研磨，我们是分粗磨和细磨两道工序，出来的细度已经达到 8μ，我们的'+
            '细度控制标准是 7.5μ，再经过三辊机过一遍，我们的三辊机已经不起到研磨作用了，主要是'+
            '压一下光泽，然后到真空脱泡调整搅拌机进行调整脱泡抽真空，这个环节就是根据每个产品'+
            '的定位，调整耐磨、干燥、结皮时间等，调整完以后经过两道过滤打入油墨成品储罐，下一'+
            '个环节就是包装，袋装进入袋装灌装线、灌装进入全自动灌装线。</p>'+
            '<p>袋装包装工艺:我们自主开发了一条全自动的袋装生产线，可以实现 5 个颜色同时灌装，整个'+
            '灌装过程全部氮气保护，实时记录每天的产量数据，每天可以灌装 50 吨袋装油墨，我们是'+
            '2017 年 9 月 18 日正式向全球推出的高强真空袋装油墨，一经推出就很受印企欢迎，看现在'+
            '环保的大环境下，我们的袋装油墨大大减少了油墨残留，减少了固废，去年广东省的固废处'+
            '理还是 8000 元一吨，今年 18000 元还排队，还没办法处理，一年一台印刷机平均要产生'+
            '6000-10000 个废油墨灌，造成多大固废，不但增加了处理费用增大还造成很大的浪费，油墨'+
            '灌始终挖不干净，灌装油墨残留是 50G-80G，我们袋装两 KG 油墨的残留才 3 克，一年一台'+
            '印刷机都省几万块钱出来，我们目前袋装油墨已经占到工厂油墨生产的 85%了，等一下在大'+
            '厅有展期一起在去现场看。</p>'+
            '<p>全自动的灌装线;我们还有一部分外贸客户和部分国内客户还是在使用灌装油墨，我们自主开'+
            '发的这条灌装线，可以实现 1kg 真空、2.5kg 真空、1kg、2kg、2.5kg 两片灌都可以灌装，自'+
            '动落灌、自动灌装、自动落墨模仿人手指赶墨、自动落盖、自动压盖、自动抽真空、自动贴'+
            '标一条线完成，只需要一个操作就可以，降低了很多人力。</p>'+
            '<b>2）化学品工艺</b>'+
            '<p>原来工艺：由原来的人工从储罐里面测量、通过人工从储罐将液态原料进行提取，再倒入不'+
            '同的反应罐里按照一定比例进行合成反应，在通过人工进行灌装等一系列的人工方式操作。'+
            '缺点：每个环节都需要人工操作，无法知道储罐的用量情况，什么时候该进行原材料补充，'+
            '要不定时的进行人工 测量，也没法知道储罐内的温度，压力等。</p>'+
            '<p>改良工艺：储罐集成液位传感器、通过全管道链接，通过泵组管道接入反应罐，通过自动化'+
            '程序控制不同原料罐的不同比例操作，可以通过程序设定不同产品的比例反应合成。定制化'+
            '自动灌装产品线、全管道链接自动灌装产品线，通过设定程序进行产品自动灌装和包装。</p>'+
            '<p>自动化：所有设备接入 PLC 控制系统，通过设定的程序进行控制和操作。</p>'+
            '<p>数据化：实时采集储罐的数据，包括温度、液位、体积；实时采集管道中原来的流速；实时'+
            '采集泵组的运行状态，阀门是否开关；其实采集反应罐中的液位、体积；实时采集自动灌装'+
            '机的运行状态、灌装数量；</p>'+
            '<p>信息化：所有采集的数据通过接口程序对接云端服务器，并建模存储。</p>'+
            '<p>智能化：可视化监控系统开发，针对不同设备的数据进行实时监控展示。</p>'+
            '3）水性光油工艺'+
            '<p>原来工艺：由原来的人工从储罐里面测量、通过人工从储罐将液态原料进行提 取，再通过从'+
            '按照一定比例把固态原料放入搅拌机进行搅拌，通过不断的人工进行其他原料的比例测试合'+
            '成半成品，再通过人工拉钢调整生成成品提取到成品罐中，并进行人工灌装。</p>'+
            '<p>改良工艺：储罐集成液位传感器、通过管道链接固态投料口，全管道链接预料预处理罐、半'+
            '成品罐、成品罐、包装生产线。通过自动化程序控制不同的工序流程。</p>'+
            '<p>自动化：所有设备接入 PLC 控制系统，通过设定的程序进行控制和操作。</p>'+
            '<p>数据化：实时采集储罐的数据，搅拌机的运行状态，管道的流量、原料和生产产品的数量。</p>'+
            '<p>信息化：所有采集的数据通过接口程序对接云端服务器，并建模存储。</p>'+
            '<p>智能化：可视化监控系统开发，针对不同设备的数据进行实时监控展示。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">空压制氮机房、储罐区</h2>',
        content:'<p>这是我司空压制氮房，有一备一用两套装置，是为我厂区提供气源及惰性气体，可以同时产生压缩空气和惰性气体，所有自动化控制的阀门都是通过我们的压缩空气来提供动力；惰性气体主要保证油墨的品质和安全操作。</p><p>储罐区内有 12 个 50 立方的储罐，能存储各类化工原料和成品，阀门和泵组都是通过自动化控制系统实现远程操作，包括罐体的液位体积、压力、温度都是由中央控制室集中监管。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">储罐区</h2>',
        content:'<p >这是我司空压制氮房，有一备一用两套装置，是为我厂区提供气源及惰性气体，可以同时产生压缩空气和惰性气体，所有自动化控制的阀门都是通过我们的压缩空气来提供动力；惰性气体主要保证油墨的品质和安全操作。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">4楼水性涂层车间***</h2>',
        content:'<p>水性涂层车间是由 5 楼原料储存，经过管道输送到 4 楼的反应釜，由气动阀集中控制开关，可以通过控制面板按产品型号、数量，由系统一键启动配料生产、搅拌均匀化验合格后由管道输送至成品罐区内进行包装。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">3楼智能投料</h2>',
        content:'<p>这是油墨生产从三楼投粉配料，通过管道输送到二楼。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">2 楼检验室、凹版设备、2 条油墨生产线***</h2>',
        content:'<p>这是 2 楼的检验室，这里是检验树脂原料、投料检验，通过精密仪器对各数据进行分析比对，确保生产精准。这 3 台为凹版油墨生产设备。这是油墨生产线，通过管道由 3 楼投料下来，自动系统内存储各油墨配方，可一键启动开启自动按配方比例投料、自动停止及搅拌。其中这一台珠磨机是目前中国大型设备之一</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">1 楼两条油墨生产线、全自动灌装包装生产线***</h2>',
        content:'<p>一楼是油墨包装区，所有油墨通过管道投料调整下来，由三辊机三次研磨再两道过滤，抽真空包装；全自动灌装包装生产线为我司自主研发生产线，实现一人操作包装。</p>'
    },
    {
        title:'<h2 class="text-center">检验室 现场测数据</h2>',
        content:'<p>一楼检验室对包装前油墨作数据检测，每批油墨均有数据留底及留样。'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">配方输出中心</h2>',
        content:'<p>油墨所有的配方都是从这里分析、输出至生产，所有数据通过打样出具。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">甲类车间</h2>',
        content:'<p>甲类车间：我们有中间储存罐 20 台，其中 8 立方的 8 台、10 立方的 7 台、5 立方的 5 台，有3 台自动罐装机，可实现年产值 20 亿。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">连接料存储区</h2>',
        content:'<p>这是油墨的连接料储存罐，生产时通过管道输送到相关区域。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">树脂车间</h2>',
        content:'<p>这是树脂生产车间，油墨所需的树脂由我司自主生产。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">丙类仓库</h2>',
        content:'<p>丙类仓库内货物是当天发货的中转区，所有我司生产的产品不设库存，收到订单再安排生产，货物入仓后打托整理清点后发货。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">橡皮布车间</h2>',
        content:'<p>这这是橡皮布裁切车间，所有订单从这里统一安排。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">科研楼</h2>',
        content:'<p>这是凹版油墨、光油等的研发实验室，我们通过精密仪器对原料、配方进行分析配制。</p>'
    },
    {
        title:'<h2 class="text-center" style="text-align: center">供墨系统演示区</h2>',
        content:'<p>这台全自动袋装供墨系统，有 4 大特点：</p>' +
            '<p>1）触屏系统操作更简单，实时感应墨位，自动精准供墨</p>' +
            '<p>2）智能恒温控制，稳定油墨流动性，提升印刷质量，特别在北方天气寒冷时，墨箱可以保持' +
            '内部温度平衡，油墨流动性更佳。</p>' +
            '<p>3）油墨损耗极少仅 0.3%，节源又环保，16KG 袋装油墨殘墨量仅为 50 克以内，减少固废处' +
            '理</p>' +
            '<p>4）大大减少人力、降低成本，性价比高；全自动操作无需像传统挖墨操作，只需打开开关球' +
            '阀、启动供墨按钮即可实施供墨</p>'
    }
]

$('.mapClick').off('click').on('click',function () {
    var $that = $(this);
    $('.popup').css('fontSize','0.22rem').html(arr[$that.data('index') - 1].title+arr[$that.data('index') - 1].content).addClass('active')
})
$('.popup').on('click',function () {
    $(this).toggleClass('active');
})


