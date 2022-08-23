gdjs.PribehCode = {};
gdjs.PribehCode.GDNewTextObjects1= [];
gdjs.PribehCode.GDNewTextObjects2= [];
gdjs.PribehCode.GDdalObjects1= [];
gdjs.PribehCode.GDdalObjects2= [];
gdjs.PribehCode.GDNewText2Objects1= [];
gdjs.PribehCode.GDNewText2Objects2= [];

gdjs.PribehCode.conditionTrue_0 = {val:false};
gdjs.PribehCode.condition0IsTrue_0 = {val:false};
gdjs.PribehCode.condition1IsTrue_0 = {val:false};
gdjs.PribehCode.condition2IsTrue_0 = {val:false};


gdjs.PribehCode.mapOfGDgdjs_46PribehCode_46GDdalObjects1Objects = Hashtable.newFrom({"dal": gdjs.PribehCode.GDdalObjects1});
gdjs.PribehCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("dal"), gdjs.PribehCode.GDdalObjects1);

gdjs.PribehCode.condition0IsTrue_0.val = false;
gdjs.PribehCode.condition1IsTrue_0.val = false;
{
gdjs.PribehCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PribehCode.mapOfGDgdjs_46PribehCode_46GDdalObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PribehCode.condition0IsTrue_0.val ) {
{
gdjs.PribehCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PribehCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Planeta 1", false);
}}

}


};

gdjs.PribehCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PribehCode.GDNewTextObjects1.length = 0;
gdjs.PribehCode.GDNewTextObjects2.length = 0;
gdjs.PribehCode.GDdalObjects1.length = 0;
gdjs.PribehCode.GDdalObjects2.length = 0;
gdjs.PribehCode.GDNewText2Objects1.length = 0;
gdjs.PribehCode.GDNewText2Objects2.length = 0;

gdjs.PribehCode.eventsList0(runtimeScene);
return;

}

gdjs['PribehCode'] = gdjs.PribehCode;
