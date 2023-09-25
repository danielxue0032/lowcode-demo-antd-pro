import * as React from 'react';
import { IPublicModelPluginContext } from "@alilc/lowcode-types";

const LowCodePluginPluginDemo = (ctx: IPublicModelPluginContext) => {
  return {
    exports() {
      return {
        data: '对外暴露插件的数据',
        say:() => {
          console.log('对外暴露插件的方法')
        }

      }
    },
    async init() {
      // 可以获取到其他插件暴露的方法和属性
      ctx.skeleton.add({
        area: 'leftArea',
        name: 'LowCodePluginPluginDemoPane',
        type: 'PanelDock',
        props: {
          description: 'Demo'
        },
        content: <div>这是一个 Demo 面板</div>
      })

      ctx.logger.log('日志')

    }
  }
};

LowCodePluginPluginDemo.pluginName = 'LowCodePluginPluginDemo';
LowCodePluginPluginDemo.meta = {
  dependencies: [],
  engines: {
    lowcodeEngine: '^1.0.0',
  }
}

export default LowCodePluginPluginDemo;