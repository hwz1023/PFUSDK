
const config = require("PfuConfig");
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad(){
        const btn = this.getComponent(cc.Button);
        btn.node.on("click",this.onKefuClick,this);
    },

    onKefuClick(){
        if(cc.sys.platform === cc.sys.WECHAT_GAME){
            wx.navigateToMiniProgram({
                appId: "wx3e33fef689f472b1",
                path: "pages/report/report?gameName=" + config.gameName,
                //envVersion:"trial",
                success(res) {
  
                },
                fail(res) {

                }
            })
        }
    }

});
