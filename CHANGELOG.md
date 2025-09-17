# 0.1.9 2025-09-17
- 🐞 兼容antd时间组件，数据传给antd的时候，因为使用了dayjs，但是其中没有weekday方法以及localeData方法而报错，这里对dayjs打了个补丁。
- 🐞 调整select options类型，同步自antd

# 0.1.8 2025-09-15
- 🐞 使用dumi生成antd风格使用文档
- 🐞 增加transform-remove-console，避免console被打包到生产。

# 0.1.7 2025-09-15
- 🐞 增加通过给Form或FormItem设置isPreview属性设置表单预览态。
- 🐞 修复通过createFormItem创建的组件variant属性未下发的问题。
