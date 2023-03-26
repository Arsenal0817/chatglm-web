export default {
  common: {
    delete: '删除',
    save: '保存',
    reset: '重置',
    yes: '是',
    no: '否',
    noData: '暂无数据',
    wrong: '出错了，请稍后再试',
    success: '操作成功',
    failed: '操作失败',
    about_head: '本项目原作者为Chanzhaoyu&WenJing, 经NCZkevin分叉和修改，基于 MIT 协议开源。',
    about_body: '如果你觉得此项目对你有帮助，请在Github给我点个Star；如果你希望捐助，请捐助原作者，谢谢你！',
  },
  chat: {
    newChat: '新的对话',
    placeholder: '有问题尽管问我...(Shift + Enter = 换行)',
    placeholderMobile: '有问题尽管问我...',
    copy: '复制',
    copied: '复制成功',
    copyCode: '复制代码',
    clearChat: '清空会话',
    clearChatConfirm: '是否清空会话?',
    exportImage: '保存会话到图片',
    exportImageConfirm: '是否将会话保存为图片?',
    exportSuccess: '保存成功',
    exportFailed: '保存失败',
    usingContext: '上下文模式',
    turnOnContext: '当前模式下, 发送消息会携带之前的聊天记录',
    turnOffContext: '当前模式下, 发送消息不会携带之前的聊天记录',
    deleteMessage: '删除消息',
    deleteMessageConfirm: '是否删除此消息?',
    deleteHistoryConfirm: '确定删除此记录?',
    clickToTalk: '点我开始录音',
    clickToSend: '正在录音，点击发送',
    recordingInProgress: '[正在录音...]',
    openMicrophoneFailedTitle: '打开麦克风失败',
    openMicrophoneFailedText: '需要https环境并且在设置中开启权限',
    stopResponding: '停止回复',
    preview: '预览',
    showRawText: '显示原文',
  },
  setting: {
    setting: '设置',
    randomAvatar: '随机生成一个头像',
    general: '一般',
    advance: '高级',
    about: '关于',
    avatarLink: '头像链接',
    name: '名称',
    description: '描述',
    resetUserInfo: '重置用户信息',
    theme: '主题',
    language: '语言',

    chatgpt_memory_title: '记忆力',
    chatgpt_memory_memo: '记忆力越强，ChatGLM 在对话过程中能记住的上下文越多，但可能会消耗更多的显存',
    chatgpt_memory_choice_1: '普通记忆(5条)',
    chatgpt_memory_choice_2: '中等记忆(20条)',
    chatgpt_memory_choice_3: '最强记忆(全部)',

    chatgpt_top_p_title: '性格',
    chatgpt_top_p_1_memo: '倾向于提供精确的分析，减少ChatGLM胡说八道的可能性',
    chatgpt_top_p_2_memo: '兼顾回答的准确性和想象力',
    chatgpt_top_p_3_memo: '倾向于提供更丰富的信息',
    chatgpt_top_p_choice_1: '准确可信',
    chatgpt_top_p_choice_2: '平衡性格',
    chatgpt_top_p_choice_3: '发散思维',

    chatgpt_max_length_title: '文本长度',
    chatgpt_temperature_title: '温度',
    api: 'API',
    timeout: '超时',
    socks: 'Socks',
  },
  server: {
    PromptIsEmpty: '你好！今天我能为您提供什么帮助？',
    NotComplyPolicy: '对不起，您发送的内容不符合我们的使用政策。请注意，我们的平台禁止发布涉及骚扰、歧视、暴力、色情等违反法律法规和社会道德的内容。如有疑问，请联系开发者获取更多帮助。谢谢。',
    SomethingWrong: '出错了，请稍后再试',
    SomethingWrongInOpenaiGptApi: '访问OpenAI GPT API出错，请稍后再试',
    SomethingWrongInOpenaiModerationApi: '访问OpenAI Moderation API出错，请稍后再试',
    SomethingWrongInOpenaiWhisperApi: '访问OpenAI Whisper API出错，请稍后再试',
  },

}
