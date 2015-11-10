/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/DataType','sap/ui/core/library'],function(q,D){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.layout",version:"1.28.10",dependencies:["sap.ui.core"],types:["sap.ui.layout.GridIndent","sap.ui.layout.GridPosition","sap.ui.layout.GridSpan","sap.ui.layout.form.GridElementCells","sap.ui.layout.form.SimpleFormLayout"],interfaces:[],controls:["sap.ui.layout.FixFlex","sap.ui.layout.Grid","sap.ui.layout.HorizontalLayout","sap.ui.layout.ResponsiveFlowLayout","sap.ui.layout.Splitter","sap.ui.layout.VerticalLayout","sap.ui.layout.form.Form","sap.ui.layout.form.FormLayout","sap.ui.layout.form.GridLayout","sap.ui.layout.form.ResponsiveGridLayout","sap.ui.layout.form.ResponsiveLayout","sap.ui.layout.form.SimpleForm"],elements:["sap.ui.layout.GridData","sap.ui.layout.ResponsiveFlowLayoutData","sap.ui.layout.SplitterLayoutData","sap.ui.layout.form.FormContainer","sap.ui.layout.form.FormElement","sap.ui.layout.form.GridContainerData","sap.ui.layout.form.GridElementData"]});sap.ui.layout.GridIndent=D.createType('sap.ui.layout.GridIndent',{isValid:function(v){return/^(([Ll](?:[0-9]|1[0-1]))? ?([Mm](?:[0-9]|1[0-1]))? ?([Ss](?:[0-9]|1[0-1]))?)$/.test(v);}},D.getType('string'));sap.ui.layout.GridPosition={Left:"Left",Right:"Right",Center:"Center"};sap.ui.layout.GridSpan=D.createType('sap.ui.layout.GridSpan',{isValid:function(v){return/^(([Ll](?:[1-9]|1[0-2]))? ?([Mm](?:[1-9]|1[0-2]))? ?([Ss](?:[1-9]|1[0-2]))?)$/.test(v);}},D.getType('string'));sap.ui.layout.form=sap.ui.layout.form||{};sap.ui.layout.form.GridElementCells=D.createType('sap.ui.layout.form.GridElementCells',{isValid:function(v){return/^(auto|full|([1-9]|1[0-6]))$/.test(v);}},D.getType('string'));sap.ui.layout.form.SimpleFormLayout={ResponsiveLayout:"ResponsiveLayout",GridLayout:"GridLayout",ResponsiveGridLayout:"ResponsiveGridLayout"};if(!sap.ui.layout.form.FormHelper){sap.ui.layout.form.FormHelper={createLabel:function(t){throw new Error("no Label control available!");},createButton:function(i,p,t){throw new Error("no Button control available!");},setButtonContent:function(b,t,T,i,I){throw new Error("no Button control available!");},addFormClass:function(){return null;},bArrowKeySupport:true,bFinal:false};}return sap.ui.layout;});
