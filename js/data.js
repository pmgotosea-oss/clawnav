// 资源数据 - 重新分类整理版 (使用真实网站favicon)
const resourcesData = {
    all: {
        title: "全部资源",
        items: []
    },
    deploy: {
        title: "龙虾图鉴",
        items: [
            { name: "OpenClaw 官网", desc: "开源、本地优先的自主 AI 助手，运行在你的电脑或服务器上", url: "https://openclaw.ai/", icon: "🦞", tag: "官方" },
            { name: "Kimi Claw", desc: "集成全球爆火的开源智能体框架OpenClaw", url: "https://www.kimi.com/bot", icon: "🌙", tag: "云端" },
            { name: "MaxClaw", desc: "10 秒内完成OpenClaw云端部署，无需配置服务器", url: "https://agent.minimaxi.com/max-claw", icon: "⚡", tag: "云端" },
            { name: "飞书OpenClaw", desc: "提供原版 OpenClaw 完整能力，独特个性、长期记忆", url: "https://openclaw.feishu.cn/home", icon: "📱", tag: "云端" },
            { name: "ArkClaw", desc: "提供模型训练、推理、评测、精调等全方位功能与服务", url: "https://www.volcengine.com/experience/ark?mode=claw", icon: "🔥", tag: "云端" },
            { name: "扣子Coze", desc: "字节旗下AI Agent开发平台，轻松创建AI机器人", url: "https://code.coze.cn/home", icon: "🤖", tag: "云端" },
            { name: "DuClaw", desc: "免除镜像选择、服务器部署，实现AI智能体即开即用", url: "https://cloud.baidu.com/product/duclaw.html", icon: "🐾", tag: "云端" },
            { name: "Xiaomi MiMo Claw", desc: "依托小米最新大模型，一键部署OpenClaw智能体", url: "https://aistudio.xiaomimimo.com/", icon: "🎯", tag: "云端" },
            { name: "StepClaw", desc: "阶跃星辰推出基于OpenClaw打造的云端AI助手", url: "https://www.stepfun.com/openclaw", icon: "🪜", tag: "云端" },
            { name: "AstronClaw", desc: "科大讯飞推出，支持一键部署、全天候在线运行", url: "https://agent.xfyun.cn/astron-claw", icon: "⭐", tag: "云端" },
            { name: "Happycapy", desc: "一台面向所有人设计的云端 Agent 原生计算机", url: "https://happycapy.ai/", icon: "🦫", tag: "云端" },
            { name: "Qclaw", desc: "支持微信直联，扫码绑定后远程操控电脑完成任务", url: "https://claw.guanjia.qq.com/", icon: "🐧", tag: "本地" },
            { name: "DuMate", desc: "百度推出的桌面级AI智能体，定位为办公搭子", url: "https://cloud.baidu.com/product/dumate.html", icon: "💼", tag: "本地" },
            { name: "LobsterAI", desc: "7×24小时帮你干活的全场景个人助理 Agent", url: "https://lobsterai.youdao.com/", icon: "🦞", tag: "本地" },
            { name: "WorkBuddy", desc: "AI 原生的桌面智能体工作台，一句指令完成数据处理", url: "https://www.codebuddy.cn/work/", icon: "🛠️", tag: "本地" },
            { name: "AutoClaw", desc: "提供飞书集成、模型热插拔、50+技能与浏览器自动化", url: "https://autoglm.zhipuai.cn/autoclaw/", icon: "🚗", tag: "本地" },
            { name: "悟空", desc: "阿里巴巴发布的全球首个企业级AI原生工作平台", url: "https://www.dingtalk.com/wukong", icon: "🐵", tag: "本地" },
            { name: "360安全龙虾", desc: "国内首个以安全模式为核心设计的OpenClaw智能体产品", url: "https://claw.360.cn/", icon: "🛡️", tag: "本地" },
            { name: "QoderWork", desc: "通过自然语言对话完成文件整理、数据处理、文档生成", url: "https://qoder.com/qoderwork", icon: "💻", tag: "本地" },
            { name: "阶跃桌面伙伴", desc: "始终在场，会主动做事的桌面 Agent，支持多任务并行", url: "https://www.stepfun.com/download", icon: "🖥️", tag: "本地" },
            { name: "EasyClaw", desc: "一键部署OpenClaw网关、可视化技能配置、多平台集成", url: "https://easyclaw.com/zh-cn/", icon: "⚙️", tag: "本地" },
            { name: "CoPaw", desc: "阿里云推出，主打本地/云端双部署、国内平台原生适配", url: "https://copaw.agentscope.io/", icon: "🐾", tag: "本地" },
            { name: "nexu", desc: "可一键安装的 OpenClaw 开源桌面客户端", url: "https://github.com/nexu-io/nexu", icon: "🔗", tag: "开源" },
            { name: "Manus", desc: "具备从任务规划到执行的全流程自动化能力", url: "https://manus.im/", icon: "👤", tag: "云端" },
            { name: "牛马 AI", desc: "本地免费版的Manus/Genspark，处理文档分析、数据整理", url: "https://niuma.limyai.com/", icon: "🐂", tag: "本地" },
            { name: "MuleRun", desc: "全球首个自进化个人AI - 骡子快跑", url: "https://mulerun.com/", icon: "🫏", tag: "云端" },
            { name: "LobeHub", desc: "以 AI Agent 为核心的开源大模型协作平台", url: "https://lobehub.com/zh", icon: "🤖", tag: "开源" },
            { name: "Tabbit", desc: "一键引用网页、截图、收藏、文件进行对话", url: "https://tabbitbrowser.com/", icon: "🌐", tag: "本地" },
            { name: "Linkfox Claw", desc: "一键部署OpenClaw，自由对话，智能随行", url: "https://agent.linkfox.com/claw", icon: "🦊", tag: "云端" },
            { name: "PoorClaw", desc: "不花一分钱，直接使用 OpenClaw 的全部 AI 能力", url: "https://www.poorclaw.com/", icon: "💎", tag: "免费" },
            { name: "HiClaw", desc: "OpenClaw的团队协作升级版，Manager Agent架构", url: "https://higress.ai/hiclaw", icon: "👋", tag: "云端" },
            { name: "KiloClaw", desc: "面向开发者和团队的托管版OpenClaw服务", url: "https://kilo.ai/kiloclaw", icon: "⚖️", tag: "云端" },
            { name: "NemoClaw", desc: "英伟达推出的面向企业的开源AI智能体平台", url: "https://www.nvidia.com/en-us/ai/nemoclaw/", icon: "🐟", tag: "云端" },
            { name: "Loomy", desc: "科大讯飞推出的桌面级 AI 个人助理，零配置下载即用", url: "https://loomy.xunfei.cn/", icon: "🎙️", tag: "本地" },
            { name: "Codebuddy", desc: "腾讯云推出的AI办公工具，支持多Agent并行处理复杂任务", url: "https://www.codebuddy.cn/work/", icon: "💼", tag: "本地" }
        ]
    },
    server: {
        title: "云服务",
        items: [
            { name: "阿里云", desc: "快速上手三步轻松构建 AI 助理低至 9.9 元起", url: "https://www.aliyun.com/benefit/scene/moltbot", icon: "☁️", tag: "云厂商" },
            { name: "腾讯云", desc: "轻量应用服务器让OpenClaw一直在线，稳定输出", url: "https://cloud.tencent.com/act/pro/openclaw", icon: "🌩️", tag: "云厂商" },
            { name: "火山引擎", desc: "分钟级部署，拥有您的私人AI管家", url: "https://www.volcengine.com/activity/clawdbot", icon: "🌋", tag: "云厂商" },
            { name: "百度智能云", desc: "从快速开通到日常指令管理，极简自动化体验", url: "https://cloud.baidu.com/product/BCC/moltbot.html", icon: "🧠", tag: "云厂商" },
            { name: "华为云", desc: "基于华为云Flexus云服务器L实例搭建OpenClaw", url: "https://activity.huaweicloud.com/openclaw.html", icon: "🌸", tag: "云厂商" },
            { name: "京东云", desc: "来京东云部署OpenClaw即送美味小龙虾", url: "https://www.jdcloud.com/cn/pages/openclaw", icon: "🛒", tag: "云厂商" },
            { name: "国家超算互联网", desc: "虾友福利 限时2周！免费领1000万Tokens", url: "https://www.scnet.cn/ui/chatbot/openclaw", icon: "🖥️", tag: "超算" },
            { name: "天翼云", desc: "依托天翼云息壤智算平台，独立隔离运行环境", url: "https://www.ctyun.cn/act/OpenClaw", icon: "☁️", tag: "云厂商" }
        ]
    },
    hardware: {
        title: "硬件设备",
        items: [
            { name: "虾壳小主机", desc: "虾壳3.0小主机，DDR4内存，无风扇散热，低能耗设计", url: "https://www.xiake.shop/", icon: "🖥️", tag: "主机" },
            { name: "Mac mini", desc: "搭载M4芯片的Mac mini，超紧凑设计，前后端口，性能强劲", url: "https://www.apple.com/mac-mini/", icon: "🍎", tag: "主机" }
        ]
    },
    learn: {
        title: "学习资源",
        items: [
            { name: "官方文档", desc: "适用于任何操作系统的 AI 智能体 Gateway 网关", url: "https://docs.openclaw.ai/zh-CN", icon: "📚", tag: "官方" },
            { name: "OpenClaw 橙皮书", desc: "从认识OpenClaw到真正把它用起来的所有关键信息", url: "https://my.feishu.cn/wiki/H27Iw9ussiaYbokymhncExtjnAh", icon: "📙", tag: "教程" },
            { name: "万象 AI 实验室", desc: "OpenClaw知识手册，从入门到精通", url: "https://yunyinghui.feishu.cn/wiki/Ru7PwG82qiDGo1kGMFZcxqpGnnf", icon: "🧪", tag: "教程" },
            { name: "WaytoAGI", desc: "最大最全面的 AI 知识库，详解OpenClaw", url: "https://waytoagi.feishu.cn/wiki/CCR4wl3upi6dF9kVE5YcAcGcnlU", icon: "🛤️", tag: "教程" },
            { name: "非凡产研", desc: "整理OpenClaw核心概念、适用场景、快速预览", url: "https://uniquecapital.feishu.cn/wiki/Nwwiwh6PNiesZqkWNw7cWegjn2c", icon: "🏭", tag: "教程" },
            { name: "中文学习手册", desc: "全面的 OpenClaw 中文教程网站", url: "https://my.feishu.cn/wiki/NzvOwzHdKiwSe2kPLx0cs1jlncg", icon: "📘", tag: "教程" },
            { name: "从入门到精通", desc: "持续更新的OpenClaw知识库文档", url: "https://my.feishu.cn/docx/P6zsdsgYco6i4XxLeIccvlpvnQe", icon: "🎓", tag: "教程" },
            { name: "Hello Claw", desc: "Datawhale 开源教程，从零领养到构建 AI 助手", url: "https://datawhalechina.github.io/hello-claw/cn/adopt/intro/", icon: "👋", tag: "教程" },
            { name: "Awesome 教程", desc: "从零开始玩转 OpenClaw，最全面的中文教程", url: "https://awesome.tryopenclaw.asia/", icon: "⭐", tag: "教程" },
            { name: "飞书修炼指南", desc: "简单易懂的OpenClaw云端部署教程", url: "https://larkcommunity.feishu.cn/wiki/GGJPwJ2IfiTynVk2Vy4cZbRvn2f", icon: "📱", tag: "教程" },
            { name: "麻小玩虾指南", desc: "从零开始的 OpenClaw 使用指南", url: "https://t0woxppdywz.feishu.cn/wiki/Oxf0wcTECie8KkkwkIlc6psanNe", icon: "🦞", tag: "教程" },
            { name: "中文用例大全", desc: "面向中文用户的 OpenClaw 真实使用案例合集", url: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh", icon: "📋", tag: "案例" },
            { name: "龙虾俱乐部", desc: "OpenClaw中文资源站，提供结构化安装部署、Skills资源和生态更新指南", url: "https://longxiabot.club/", icon: "🦞", tag: "资源" }
        ]
    },
    aiapp: {
        title: "AI应用",
        items: [
            { name: "千问", desc: "阿里云超大规模语言模型，多轮对话、文案创作、逻辑推理", url: "https://www.qianwen.com/", icon: "🌟", tag: "大模型" },
            { name: "豆包", desc: "抖音旗下AI工具，你的智能助手", url: "https://www.doubao.com/", icon: "🥟", tag: "大模型" },
            { name: "Kimi", desc: "会推理解析，能深度思考的AI助手", url: "https://www.kimi.com/", icon: "🌙", tag: "大模型" },
            { name: "腾讯元宝", desc: "腾讯推出的免费AI智能助手", url: "https://yuanbao.tencent.com/", icon: "💎", tag: "大模型" },
            { name: "DeepSeek", desc: "幻方量化旗下深度求索推出的开源大模型", url: "https://chat.deepseek.com/", icon: "🔍", tag: "大模型" },
            { name: "ChatGPT", desc: "地表最强AI聊天机器人", url: "https://chat.openai.com", icon: "💬", tag: "大模型" },
            { name: "Gemini", desc: "Google推出的AI聊天对话机器人", url: "https://gemini.google.com/", icon: "♊", tag: "大模型" },
            { name: "Grok", desc: "马斯克旗下xAI推出的人工智能助手", url: "https://grok.com/", icon: "🧠", tag: "大模型" },
            { name: "即梦AI", desc: "Seedance 2.0 字节最新的视频生成模型", url: "https://jimeng.jianying.com/ai-tool/home", icon: "✨", tag: "视频" },
            { name: "DeepSeek", desc: "DeepSeek-V3.2 正式版，强化 Agent 能力，融入思考推理", url: "https://www.deepseek.com/", icon: "🔍", tag: "大模型" }
        ]
    },
    devplan: {
        title: "Coding Plan",
        items: [
            { name: "Kimi Code", desc: "面向代码开发的权益，轻松兼容各类开发流程", url: "https://www.kimi.com/code", icon: "🌙", tag: "编程" },
            { name: "MiniMax Token", desc: "最强编程与智能体模型", url: "https://platform.minimaxi.com/subscribe/token-plan", icon: "⚡", tag: "编程" },
            { name: "智谱 Coding", desc: "支持 GLM-5、GLM-4.7 和 GLM-4.6", url: "https://bigmodel.cn/glm-coding", icon: "🧠", tag: "编程" },
            { name: "腾讯云 Coding", desc: "集合多个最新模型，适配多种主流 AI 编程工具", url: "https://cloud.tencent.com/act/pro/codingplan", icon: "🌩️", tag: "编程" },
            { name: "阿里云 Coding", desc: "面向高频AI编程场景的订阅服务", url: "https://www.aliyun.com/benefit/scene/codingplan", icon: "☁️", tag: "编程" },
            { name: "火山 Coding", desc: "首月低至8.9元，免费解锁 ArkClaw", url: "https://www.volcengine.com/activity/codingplan", icon: "🌋", tag: "编程" },
            { name: "百度千帆 Coding", desc: "兼容Claude Code等主流编程工具", url: "https://cloud.baidu.com/product/codingplan.html", icon: "🧠", tag: "编程" },
            { name: "Step Plan", desc: "阶跃星辰的 Coding Plan", url: "https://platform.stepfun.com/step-plan", icon: "🪜", tag: "编程" },
            { name: "腾讯云 Token", desc: "覆盖多种主流模型、灵活套餐、极速调用", url: "https://cloud.tencent.com/act/pro/tokenplan", icon: "🌩️", tag: "编程" },
            { name: "Xiaomi MiMo", desc: "畅用 MiMo-V2-Pro/Omni 两款全新顶级旗舰模型", url: "https://platform.xiaomimimo.com/#/token-plan", icon: "🎯", tag: "编程" }
        ]
    },
    modelapi: {
        title: "模型接口",
        items: [
            { name: "阿里云百炼", desc: "专为企业打造的大模型服务与应用开发平台", url: "https://bailian.console.aliyun.com/", icon: "☁️", tag: "平台" },
            { name: "火山方舟", desc: "提供模型训练、推理、评测、精调等全方位功能", url: "https://www.volcengine.com/product/ark", icon: "🌋", tag: "平台" },
            { name: "百度千帆", desc: "以Agent为核心的一站式企业级大模型服务平台", url: "https://cloud.baidu.com/product-s/qianfan_home", icon: "🧠", tag: "平台" },
            { name: "硅基流动", desc: "国内领先的模型聚合平台，200+ 开源和商用模型", url: "https://www.siliconflow.cn/", icon: "💧", tag: "聚合" },
            { name: "七牛云", desc: "提供多个顶级闭源和开源大模型", url: "https://www.qiniu.com/ai/agent", icon: "🐂", tag: "平台" },
            { name: "讯飞星火", desc: "一站式大模型精调定制及服务平台", url: "https://xinghuo.xfyun.cn/maas-home", icon: "⭐", tag: "平台" },
            { name: "OpenRouter", desc: "AI模型聚合平台，提供统一的API接口", url: "https://openrouter.ai", icon: "🔀", tag: "聚合" },
            { name: "ZenMux", desc: "全球首个支持保险赔付机制的企业级大模型聚合平台", url: "https://zenmux.ai/invite/9ENK8S", icon: "🧘", tag: "聚合" },
            { name: "Model123", desc: "专业的企业级 AI编程服务平台", url: "https://www.model123.ai/", icon: "🔢", tag: "平台" },
            { name: "华为云 MaaS", desc: "覆盖大模型全生命周期管理", url: "https://www.huaweicloud.com/ai/token-service.html", icon: "🌸", tag: "平台" },
            { name: "快手万擎", desc: "企业级大模型服务与开发平台", url: "https://www.streamlake.com/product/wanqing", icon: "📹", tag: "平台" }
        ]
    },
    llm: {
        title: "MaaS平台",
        items: [
            { name: "Kimi", desc: "专业代码生成、智能对话、视觉推理", url: "https://platform.moonshot.cn/", icon: "🌙", tag: "模型" },
            { name: "MiniMax", desc: "自主研发多模态通用大模型，强大代码和 Agent 能力", url: "https://www.minimaxi.com/", icon: "⚡", tag: "模型" },
            { name: "智谱GLM", desc: "新一代国产自主通用AI大模型开放平台", url: "https://www.bigmodel.cn/", icon: "🧠", tag: "模型" },
            { name: "DeepSeek", desc: "DeepSeek-V3.2 正式版，强化 Agent 能力", url: "https://www.deepseek.com/", icon: "🔍", tag: "模型" },
            { name: "千问Qwen", desc: "首个原生多模态大模型", url: "https://www.aliyun.com/product/tongyi", icon: "🌟", tag: "模型" },
            { name: "豆包Doubao", desc: "字节跳动自研大模型", url: "https://www.doubao.com/chat/", icon: "🥟", tag: "模型" },
            { name: "Claude", desc: "Anthropic开发的大型语言模型家族", url: "https://platform.claude.com/", icon: "🎭", tag: "模型" },
            { name: "Gemini", desc: "兼具高推理能力、多模态处理、低成本高效能", url: "https://aistudio.google.com/", icon: "♊", tag: "模型" },
            { name: "GPT", desc: "首个具备原生计算机使用能力的通用模型", url: "https://platform.openai.com/", icon: "🤖", tag: "模型" },
            { name: "Grok", desc: "马斯克旗下xAI公司开发的人工智能大模型系列", url: "https://console.x.ai/", icon: "🧠", tag: "模型" },
            { name: "Llama", desc: "Meta推出的开源大语言模型", url: "https://www.llama.com/", icon: "🦙", tag: "模型" },
            { name: "Mistral", desc: "基于大语言模型的对话平台", url: "https://mistral.ai/", icon: "🌫️", tag: "模型" },
            { name: "MiMo", desc: "小米自研开源推理大模型系列", url: "https://mimo.xiaomi.com/zh/", icon: "🎯", tag: "模型" },
            { name: "讯飞星火", desc: "新一代认知智能大模型", url: "https://xinghuo.xfyun.cn/sparkapi", icon: "⭐", tag: "模型" },
            { name: "腾讯混元", desc: "具备强大的中文创作能力", url: "https://cloud.tencent.com/product/tclm", icon: "💎", tag: "模型" },
            { name: "百度文心", desc: "精准覆盖公文写作、学术论文、创意策划", url: "https://yiyan.baidu.com/", icon: "📝", tag: "模型" },
            { name: "阶跃星辰", desc: "专注通用人工智能（AGI）", url: "https://platform.stepfun.com/", icon: "🪜", tag: "模型" },
            { name: "PinchBench", desc: "龙虾模型排行榜，评估大模型 Agent 自动化能力", url: "https://pinchbench.com/", icon: "📊", tag: "评测" },
            { name: "Artificial Analysis", desc: "专注于AI语言模型和API提供商的独立分析平台", url: "https://artificialanalysis.ai/", icon: "📈", tag: "评测" },
            { name: "Arena.ai", desc: "加州大学伯克利分校推出的AI模型评估平台", url: "https://arena.ai/leaderboard", icon: "🏆", tag: "评测" },
            { name: "OpenRouter Rankings", desc: "各大型语言模型的实际使用情况排名", url: "https://openrouter.ai/rankings", icon: "🏅", tag: "评测" },
            { name: "XSCT Bench", desc: "场景化大模型测评平台", url: "https://xsct.ai/", icon: "🧪", tag: "评测" }
        ]
    },
    plugin: {
        title: "Skill市场",
        items: [
            { name: "ClawHub", desc: "OpenClaw官方Skills注册中心", url: "https://clawhub.ai/", icon: "🦞", tag: "官方" },
            { name: "腾讯云 SkillHub", desc: "专为中国用户优化的Skills社区", url: "https://skillhub.tencent.com/", icon: "🌩️", tag: "官方" },
            { name: "Skills.sh", desc: "Vercel 官方技能目录，24小时热度排名", url: "https://skills.sh/", icon: "▲", tag: "官方" },
            { name: "SkillsMP", desc: "面向 Agent 的开源 skill 集合平台", url: "https://skillsmp.com/zh", icon: "📦", tag: "社区" },
            { name: "虾评Skill", desc: "精品优质 Skill 分享评测平台", url: "https://xiaping.coze.site/", icon: "🦐", tag: "社区" },
            { name: "SkillHub中国", desc: "快速找到能用、好用、可复用的实践方案", url: "https://www.skill-cn.com/", icon: "🇨🇳", tag: "社区" },
            { name: "Agent Skills Hub", desc: "发现、管理和部署AI代理技能", url: "https://agentskillshub.top/", icon: "🛠️", tag: "社区" },
            { name: "OpenClaw Directory", desc: "社区驱动的技能、插件、部署指南中心", url: "https://openclawdirectory.co.uk/", icon: "📂", tag: "社区" },
            { name: "OpenClawDir", desc: "探索OpenClaw生态系统的技能、插件和职位", url: "https://openclawdir.com/", icon: "📋", tag: "社区" },
            { name: "ClawSkills", desc: "5,490+ Skills 集合，已过滤垃圾插件", url: "https://clawskills.sh/", icon: "🔧", tag: "社区" },
            { name: "CryptoSkills", desc: "为crypto领域提供开源Skills", url: "https://cryptoskills.dev/", icon: "₿", tag: "社区" },
            { name: "CocoLoop", desc: "更快更安全的 AI Agent Skills 商店", url: "https://hub.cocoloop.cn/", icon: "🔄", tag: "社区" },
            { name: "Xcrawl", desc: "让 Agent 获得网页抓取、URL发现能力", url: "https://xcrawl.com/?keyword=2ozjddoq", icon: "🕷️", tag: "工具" }
        ]
    },
    community: {
        title: "社区交流",
        items: [
            { name: "Moltbook", desc: "面向 AI Agent的社交网络", url: "https://www.moltbook.cn/", icon: "📱", tag: "社交" },
            { name: "InStreet", desc: "AI Agent 在线互动、学习、竞技的社区", url: "https://instreet.coze.site/", icon: "🌆", tag: "社交" },
            { name: "虾聊", desc: "AI Agent 的社交平台", url: "https://clawdchat.ai/", icon: "💬", tag: "社交" },
            { name: "虾聊纯Agent", desc: "OpenClaw 交流社区，人类只能围观", url: "https://xialiaoai.com/", icon: "🤖", tag: "社交" },
            { name: "AgentMail", desc: "专为 AI Agent 打造的邮箱基础设施", url: "https://www.agentmail.to/", icon: "📧", tag: "工具" },
            { name: "MailboxKit", desc: "聚焦新创和消费主题的科技媒体", url: "https://mailboxkit.com/", icon: "📦", tag: "工具" },
            { name: "mails", desc: "为 agents 设计的邮件服务", url: "https://mails.dev/", icon: "✉️", tag: "工具" },
            { name: "Souls.zip", desc: "生产测试的AI代理灵魂和技能", url: "https://souls.zip/shop", icon: "👻", tag: "资源" },
            { name: "OpenClaw Startups", desc: "无需编程即可启动助手", url: "https://trustmrr.com/special-category/openclaw", icon: "🚀", tag: "资源" },
            { name: "曝光观察板", desc: "提醒用户启用认证，移除公共暴露", url: "https://openclaw.allegro.earth/", icon: "👁️", tag: "安全" },
            { name: "Claw Bench", desc: "AI Agent 框架标准化评估", url: "https://clawbench.net/", icon: "📊", tag: "评测" },
            { name: "ClawPal", desc: "桌面配置助手，可视化管理 AI agent", url: "https://clawpal.xyz/", icon: "🎛️", tag: "工具" },
            { name: "ClawWatcher", desc: "监控仪表盘，实时可视化代理行为", url: "https://clawwatcher.com/", icon: "📈", tag: "工具" },
            { name: "ClawManager", desc: "轻松搭建、部署和管理 AI 代理", url: "https://clawmanager.ai/", icon: "🎮", tag: "工具" },
            { name: "Control Center", desc: "安全优先、本地优先控制中心", url: "https://github.com/TianyiDataScience/openclaw-control-center", icon: "🎚️", tag: "工具" },
            { name: "水产市场", desc: "Agent 进化生态平台，互相学习借鉴", url: "https://openclawmp.cc/", icon: "🐟", tag: "社区" },
            { name: "EdgeOne ClawScan", desc: "扫描不安全配置、恶意Skill与漏洞", url: "https://matrix.tencent.com/clawscan/", icon: "🔒", tag: "安全" },
            { name: "OpenClaw Cases", desc: "复制提示词直接使用于各种 AI agent 工具", url: "https://openclawcases.zeabur.app/", icon: "📋", tag: "资源" },
            { name: "A2H Market", desc: "面向人类和 AI Agent 的开放交易市场", url: "https://a2hmarket.ai/", icon: "🤝", tag: "市场" },
            { name: "Reddit", desc: "OpenClaw讨论板块", url: "https://www.reddit.com/r/openclaw/", icon: "🔴", tag: "社区" },
            { name: "Discord", desc: "官方服务器实时技术交流", url: "https://discord.gg/openclaw", icon: "🎮", tag: "社区" },
            { name: "Clawvard", desc: "第一所人工智能代理大学", url: "https://clawvard.school/", icon: "🎓", tag: "教育" },
            { name: "Skills MP", desc: "聚合超过50万个AI助手技能，兼容Claude、Codex和ChatGPT", url: "https://skillsmp.com/zh", icon: "📚", tag: "技能" }
        ]
    },
    payment: {
        title: "支付工具",
        items: [
            { name: "Claw402", desc: "用USDC付费的个人AI助手", url: "https://claw402.ai/", icon: "💳", tag: "支付" },
            { name: "SkillPay", desc: "基于信贷的通用支付系统", url: "https://skillpay.me/", icon: "💰", tag: "支付" },
            { name: "Flux", desc: "代理钱包，向任何地址汇款", url: "https://fluxapay.xyz/", icon: "⚡", tag: "支付" },
            { name: "AgentCard.ai", desc: "专为 AI Agent 打造的虚拟信用卡", url: "https://agentcard.ai/", icon: "💳", tag: "支付" },
            { name: "AgentCard.sh", desc: "面向人工智能代理的虚拟信用卡", url: "https://agentcard.sh/", icon: "🃏", tag: "支付" },
            { name: "Clawcard.sh", desc: "统一凭证系统，管理信用卡、邮箱和电话", url: "https://www.clawcard.sh/", icon: "🔑", tag: "支付" },
            { name: "Lobster.cash", desc: "允许 Agent支付任何费用", url: "https://www.lobster.cash/", icon: "🦞", tag: "支付" },
            { name: "Machines Cash", desc: "面向个人与代理的虚拟 Visa 信用卡", url: "https://www.machines.cash/", icon: "💳", tag: "支付" },
            { name: "Gate Pay", desc: "AI Agent 原生支付，无需人工确认", url: "https://www.gate.com/zh/gate-for-ai/pay", icon: "🚪", tag: "支付" },
            { name: "Coinbase AgentKit", desc: "赋能AI代理进行自主支付", url: "https://www.coinbase.com/zh-cn/developer-platform/products/agentkit", icon: "🪙", tag: "支付" },
            { name: "Tempo Wallet", desc: "专为 AI Agent 与机器支付设计", url: "https://wallet.tempo.xyz/", icon: "👛", tag: "支付" },
            { name: "ClawVault", desc: "保障所有 AI Agent支出", url: "https://clawvault.cc/", icon: "🏦", tag: "支付" },
            { name: "ClawCredit", desc: "AI 原生金融服务", url: "https://www.claw.credit/", icon: "💎", tag: "支付" },
            { name: "PayAI", desc: "实时支付和收获的AI代理", url: "https://payai.network/", icon: "💸", tag: "支付" },
            { name: "Ampersend", desc: "代理支付和运营可视化平台", url: "https://www.ampersend.ai/", icon: "📊", tag: "支付" },
            { name: "安全养虾指南", desc: "慢雾安全团队发布的OpenClaw极简安全实践指南", url: "https://mp.weixin.qq.com/s/R_hJseodUa8Q9eU4qUvuAg", icon: "🛡️", tag: "安全" }
        ]
    },
    trade: {
        title: "交易工具",
        items: [
            { name: "OKX Agent Trade", desc: "AI 助手与 OKX 账户直接连接", url: "https://www.okx.com/zh-hans/agent-tradekit", icon: "🆗", tag: "交易" },
            { name: "Binance Skills", desc: "让 AI 代理原生访问加密货币", url: "https://www.binance.com/zh-CN/skills", icon: "🏦", tag: "交易" },
            { name: "GetClaw", desc: "Bitget AI 交易自主智能体", url: "https://www.bitget.com/zh-CN/activity-hub/get-claw", icon: "🎯", tag: "交易" },
            { name: "HTX AI Skills", desc: "AI 通过自然语言查询行情、管理资产", url: "https://www.htx.com/zh-cn/skills", icon: "🔥", tag: "交易" },
            { name: "GateClaw", desc: "AI Web3 Agent 工作平台", url: "https://www.gate.com/zh/gateclaw", icon: "🚪", tag: "交易" },
            { name: "Bybit AI Hub", desc: "接入 Bybit 全栈交易引擎", url: "https://www.bybit.com/zh-MY/ai", icon: "📊", tag: "交易" },
            { name: "COIN CLAW", desc: "Web3 世界 AI 常驻特工", url: "https://www.aicoin.com/zh-Hans/coinclaw", icon: "🪙", tag: "交易" },
            { name: "AiCoin CoinOS", desc: "为 Agent 接入实时行情、实盘操作", url: "https://www.aicoin.com/zh-Hans/coinos", icon: "📈", tag: "交易" },
            { name: "MoonPay Agents", desc: "AI Agent 自己的加密钱包", url: "https://www.moonpay.com/agents", icon: "🌙", tag: "交易" },
            { name: "Alchemy Agent", desc: "构建管理钱包、执行安全交易的AI代理", url: "https://www.alchemy.com/ai-agents", icon: "⚗️", tag: "交易" },
            { name: "Circle Skills", desc: "USDC支付、跨链转账最佳实践", url: "https://github.com/circlefin/skills", icon: "⭕", tag: "开发" },
            { name: "MetaMask Skill", desc: "与MetaMask及以太坊生态系统互动", url: "https://github.com/MetaMask/openclaw-skills", icon: "🦊", tag: "开发" },
            { name: "PolyHub", desc: "让 AI 变成Polymarket顶级交易员", url: "https://github.com/HubbleVision/polyhub-skills", icon: "🔮", tag: "开发" },
            { name: "KuCoin Skills", desc: "为 AI 智能提供原生加密接入", url: "https://github.com/Kucoin/kucoin-skills-hub", icon: "🪙", tag: "开发" },
            { name: "Gate Skills", desc: "一键调用 Gate 现货、合约与行情", url: "https://www.gate.com/zh/skills-hub", icon: "🚪", tag: "开发" },
            { name: "Bitget Agent Hub", desc: "安全高效接入加密交易能力", url: "https://www.bitget.com/zh-CN/activity-hub/agent-hub", icon: "📊", tag: "开发" }
        ]
    },
    exchange: {
        title: "交易平台",
        items: [
            { name: "Binance", desc: "领先的加密货币交易平台", url: "https://www.binance.com/zh-CN", icon: "🏦", tag: "交易所" },
            { name: "OKX", desc: "全球领先的数字资产交易平台", url: "https://www.okx.com/zh-hans", icon: "🆗", tag: "交易所" },
            { name: "Bitget", desc: "支持多种法币购买加密货币", url: "https://www.bitget.com/zh-CN", icon: "📊", tag: "交易所" },
            { name: "Bybit", desc: "提供现货、期货市场", url: "https://www.bybit.com/zh-MY/", icon: "📈", tag: "交易所" },
            { name: "Gate", desc: "为4500+加密货币提供交易服务", url: "https://www.gate.com/zh/", icon: "🚪", tag: "交易所" },
            { name: "KuCoin", desc: "交易比特币、以太坊和1000+币种", url: "https://www.kucoin.com/zh-hant", icon: "🪙", tag: "交易所" },
            { name: "Mexc", desc: "全球化加密货币交易所", url: "https://www.mexc.com/zh-MY/", icon: "📊", tag: "交易所" },
            { name: "HTX", desc: "全球前三的加密货币交易所", url: "https://www.htx.com/zh-cn/", icon: "🔥", tag: "交易所" },
            { name: "Coinbase", desc: "美国加密货币交易所", url: "https://www.coinbase.com", icon: "🪙", tag: "交易所" },
            { name: "Kraken", desc: "低手续费购买、出售、交易资产", url: "https://www.kraken.com/zh-cn", icon: "🐙", tag: "交易所" },
            { name: "Bitmart", desc: "支持1700+加密货币", url: "https://www.bitmart.com/zh-CN", icon: "🛒", tag: "交易所" },
            { name: "Weex", desc: "提供现货、合约、OTC、跟单交易", url: "https://www.weex.com/zh-CN", icon: "💱", tag: "交易所" },
            { name: "XT.com", desc: "高流动性、低费用的交易所", url: "https://www.xt.com/zh-CN", icon: "📊", tag: "交易所" },
            { name: "Ju.com", desc: "提供现货、合约、质押等服务", url: "https://www.ju.com/zh-CN", icon: "🧃", tag: "交易所" }
        ]
    }
};

// 生成全部资源
resourcesData.all.items = [
    ...data.deploy.items,
    ...data.server.items,
    ...data.learn.items,
    ...data.aiapp.items,
    ...data.devplan.items,
    ...data.modelapi.items,
    ...data.llm.items,
    ...data.plugin.items,
    ...data.community.items,
    ...data.payment.items,
    ...data.trade.items,
    ...data.exchange.items
];
