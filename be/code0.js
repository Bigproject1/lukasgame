gdjs.MenuCode = {};
gdjs.MenuCode.GDhratObjects1= [];
gdjs.MenuCode.GDhratObjects2= [];
gdjs.MenuCode.GDodejitObjects1= [];
gdjs.MenuCode.GDodejitObjects2= [];
gdjs.MenuCode.GDHratTextObjects1= [];
gdjs.MenuCode.GDHratTextObjects2= [];
gdjs.MenuCode.GDOdejitTextObjects1= [];
gdjs.MenuCode.GDOdejitTextObjects2= [];
gdjs.MenuCode.GDjmenoObjects1= [];
gdjs.MenuCode.GDjmenoObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDhratObjects1Objects = Hashtable.newFrom({"hrat": gdjs.MenuCode.GDhratObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDodejitObjects1Objects = Hashtable.newFrom({"odejit": gdjs.MenuCode.GDodejitObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("hrat"), gdjs.MenuCode.GDhratObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDhratObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pribeh", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("odejit"), gdjs.MenuCode.GDodejitObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDodejitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDhratObjects1.length = 0;
gdjs.MenuCode.GDhratObjects2.length = 0;
gdjs.MenuCode.GDodejitObjects1.length = 0;
gdjs.MenuCode.GDodejitObjects2.length = 0;
gdjs.MenuCode.GDHratTextObjects1.length = 0;
gdjs.MenuCode.GDHratTextObjects2.length = 0;
gdjs.MenuCode.GDOdejitTextObjects1.length = 0;
gdjs.MenuCode.GDOdejitTextObjects2.length = 0;
gdjs.MenuCode.GDjmenoObjects1.length = 0;
gdjs.MenuCode.GDjmenoObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
