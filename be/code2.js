gdjs.Planeta_321Code = {};
gdjs.Planeta_321Code.GDNewTextObjects1= [];
gdjs.Planeta_321Code.GDNewTextObjects2= [];
gdjs.Planeta_321Code.GDHlavniPostavaObjects1= [];
gdjs.Planeta_321Code.GDHlavniPostavaObjects2= [];
gdjs.Planeta_321Code.GDPlatformaObjects1= [];
gdjs.Planeta_321Code.GDPlatformaObjects2= [];

gdjs.Planeta_321Code.conditionTrue_0 = {val:false};
gdjs.Planeta_321Code.condition0IsTrue_0 = {val:false};


gdjs.Planeta_321Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("HlavniPostava"), gdjs.Planeta_321Code.GDHlavniPostavaObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Planeta_321Code.GDHlavniPostavaObjects1.length !== 0 ? gdjs.Planeta_321Code.GDHlavniPostavaObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.Planeta_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Planeta_321Code.GDNewTextObjects1.length = 0;
gdjs.Planeta_321Code.GDNewTextObjects2.length = 0;
gdjs.Planeta_321Code.GDHlavniPostavaObjects1.length = 0;
gdjs.Planeta_321Code.GDHlavniPostavaObjects2.length = 0;
gdjs.Planeta_321Code.GDPlatformaObjects1.length = 0;
gdjs.Planeta_321Code.GDPlatformaObjects2.length = 0;

gdjs.Planeta_321Code.eventsList0(runtimeScene);
return;

}

gdjs['Planeta_321Code'] = gdjs.Planeta_321Code;
