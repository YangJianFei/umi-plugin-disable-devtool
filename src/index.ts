import type { IApi } from 'umi';

export default (api: IApi) => {
  // See https://umijs.org/docs/guides/plugins
  api.addHTMLHeadScripts(() => {
    if (process.env.UMI_ENV != 'dev') {
      return [
        {
          content: `
          var devToolsHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!!devToolsHook && devToolsHook['inject']) {
            devToolsHook['inject'] = Function.prototype
          }
        `
        }
      ];
    } else {
      return [];
    }
  });
};
