(function (e, n, i) {
  "use strict";
  var o = {
    onLoad: () => {
      n.logger.info("explod NOW");
      n.plugins.removePlugin(
        Object.values(n.plugins.plugins).find(
          (l) => l.manifest.name == "ThisWillCrashYourDiscord"
        ).id
      );

      setTimeout(() => {
        null.thisWillCrashTheApp;
      }, 100);
    },
    onUnload: () => {},
  };
  return (
    (e.default = o), Object.defineProperty(e, "__esModule", { value: !0 }), e
  );
})(
  {},
  vendetta,
  vendetta.metro.common
);