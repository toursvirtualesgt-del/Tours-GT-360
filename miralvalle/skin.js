// Garden Gnome Software - Skin
// Pano2VR 8.0 beta 2/22072
// Filename: quaranta.ggsk
// Generated 2026-03-12T19:19:42Z

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('player_muted', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_skin', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_translations', 2, false, { ignoreInState: 0  });
	player.addVariable('hs_info_id', 0, "", { ignoreInState: 0  });
	player.addVariable('hs_info_title', 0, "", { ignoreInState: 0  });
	player.addVariable('hs_info_description', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_hs_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hs_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hs_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hs_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hs_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hs_video_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hs_video_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('hs_has_description', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_popup_desc_toggle', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_popup_mobile_desc', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_dark', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_icon_shape', 1, 1, { ignoreInState: 1  });
	player.addVariable('opt_thumbnails', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_3d_node_hotspots', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info_available', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_projections', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_vr', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('right_open', 2, false, { ignoreInState: 0  });
	player.addVariable('player_mouse_down', 2, false, { ignoreInState: 0  });
	player.addVariable('thumbs_desktop_node_cloner_hasUp', 2, false, { ignoreInState: 0  });
	player.addVariable('thumbs_desktop_node_cloner_hasDown', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('model_loading', 2, false, { ignoreInState: 0  });
	player.addVariable('cur_ud_title', 0, "", { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	var pano=player;
	player.setApiVersion(7);
	this.rasterizeHTML = player.getRasterizeHTML();
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	me.fontsLoaded=0;
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i,hs,el,els,elo,ela,geometry,material;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	this._=function(text, params) {
		return player._(text, params);
	}
	
	player.setMargins({'left': {'value': 0, 'unit': 'px'}, 'top': {'value': 0, 'unit': 'px'}, 'right': {'value': 0, 'unit': 'px'}, 'bottom': {'value': 0, 'unit': 'px'}});
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		if (player.is3dModel()) {
			let hg = player.get3dHotspotGroup();
			if (hg) {
				let startObject = null;
				if (startElement !== undefined && startElement != me.divSkin) {
					if (startElement.ggId) {
						hg.traverse(function(el) {
							if (el.userData && el.userData.ggId === startElement.ggId) {
								startObject = el;
							}
						});
					}
				} else {
					startObject = hg;
				}
				if (startObject) {
					startObject.traverse(function(el) {
						if (el.userData && el.userData.ggUpdatePosition) {
							el.userData.ggUpdatePosition();
						}
					});
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('languagechanged', this.languageChanged);
	
	this.getClassStyles = function(className) {
		className = '.' + className;
		for (let sheet of document.styleSheets) {
			try {
				for (let rule of sheet.cssRules || sheet.rules) {
					if (rule.selectorText === className) {
						return rule.style;
					}
				}
			} catch (e) {
				console.warn("Cannot access stylesheet: ", e);
			}
		}
		return null;
	};
	this.paintTextDivToCanvas = function(el, stylesString, textureHeightFromEl, autoSize, scrollbar) {
		const skinStyles = skin.getClassStyles('ggskin');
		const skinTextStyles = skin.getClassStyles('ggskin_text');
		const skinStylesString = skinStyles ? skinStyles.cssText : '';
		const skinTextStylesString = skinTextStyles ? skinTextStyles.cssText : '';
		let elementStylesString = '';
		if (Array.isArray(el.userData.cssClasses)) {
			el.userData.cssClasses.forEach(function(className) {
				const classStyles = skin.getClassStyles(className);
				if (classStyles) {
					elementStylesString += classStyles.cssText;
				}
			});
		}
		const outerDiv = document.createElement('div');
		const textDiv = document.createElement('div');
		textDiv.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
		textDiv.style = skinStylesString + skinTextStylesString + elementStylesString + stylesString;
		textDiv.innerHTML = el.userData.ggText;
		textDiv.style.position = 'absolute';
		textDiv.style.left = '0px';
		textDiv.style.top = '0px';
		const styleTag = document.createElement('style');
		styleTag.type = 'text/css';
		styleTag.appendChild(document.createTextNode("@font-face { font-display: auto; font-family: 'SourceSans3'; font-style: normal; font-weight: 400; src: url('fonts/source-sans-3-latin-regular.woff2') format('woff2'); } @font-face { font-display: auto; font-family: 'SourceSans3'; font-style: normal; font-weight: 600; src: url('fonts/source-sans-3-latin-600.woff2') format('woff2'); }"));
		outerDiv.appendChild(styleTag);
		outerDiv.appendChild(textDiv);
		document.body.appendChild(outerDiv);
		el.userData.boxWidthCanv = textDiv.clientWidth;
		el.userData.totalHeightCanv = textDiv.clientHeight;
		elStyle = window.getComputedStyle(textDiv);
		const lineHeight = elStyle.lineHeight;
		if (lineHeight !== 'normal') {
			el.userData.lineHeight = parseFloat(lineHeight);
		} else {
			el.userData.lineHeight = parseFloat(elStyle.fontSize) * 1.2;
		}
		var canv = el.userData.tmpCanvas;
		var ctx = el.userData.tmpCanvasContext;
		canv.width = textDiv.clientWidth * 2;
		canv.height = textDiv.clientHeight * 2;
		ctx.clearRect(0, 0, canv.width, canv.height);
		if (autoSize) {
			el.userData.boxHeightCanv = el.userData.totalHeightCanv;
		} else {
			el.userData.boxHeightCanv = el.userData.height;
		}
		if (scrollbar && textDiv.clientHeight > el.userData.height) {
			el.userData.textCanvas.width = el.userData.width * 2;
		} else {
			el.userData.textCanvas.width = el.userData.boxWidthCanv * 2;
		}
		el.userData.textCanvas.height = el.userData.boxHeightCanv * 2;
		this.rasterizeHTML.drawHTML(outerDiv.innerHTML, canv, {zoom: 2, baseUrl: player.getBasePath() }).then((renderResult) => {
			el.userData.ggTextureFromCanvas();
		}, (err) => {
			console.error('Error rendering HTML to canvas:', err);
		});
		document.body.removeChild(outerDiv);
	};
	this.rectMaxRadius = function(el) {
		return Math.min(el.userData.width / 2.0 + (el.userData.borderWidth.left + el.userData.borderWidth.right) / 2.0, el.userData.height / 2.0 + (el.userData.borderWidth.top + el.userData.borderWidth.bottom) / 2.0);
	}
	this.rectCalcBorderRadiiInnerShape = function(el) {
		let maxRad = skin.rectMaxRadius(el);
		let bwTopLeft = (el.userData.borderWidth.top + el.userData.borderWidth.left) / 2.0;
		let brTopLeft = Math.max(el.userData.borderRadius.topLeft - bwTopLeft, 0.0);
		brTopLeft = Math.min(brTopLeft, maxRad - bwTopLeft);
		let bwTopRight = (el.userData.borderWidth.top + el.userData.borderWidth.right) / 2.0;
		let brTopRight = Math.max(el.userData.borderRadius.topRight - bwTopRight, 0.0);
		brTopRight = Math.min(brTopRight, maxRad - bwTopRight);
		let bwBottomRight = (el.userData.borderWidth.bottom + el.userData.borderWidth.right) / 2.0;
		let brBottomRight = Math.max(el.userData.borderRadius.bottomRight - bwBottomRight, 0.0);
		brBottomRight = Math.min(brBottomRight, maxRad - bwBottomRight);
		let bwBottomLeft = (el.userData.borderWidth.bottom + el.userData.borderWidth.left) / 2.0;
		let brBottomLeft = Math.max(el.userData.borderRadius.bottomLeft - bwBottomLeft, 0.0);
		brBottomLeft = Math.min(brBottomLeft, maxRad - bwBottomLeft);
		el.userData.borderRadiusInnerShape = {
			topLeft: brTopLeft,
			topRight: brTopRight,
			bottomRight: brBottomRight,
			bottomLeft: brBottomLeft
		};
	}
	this.rectHasRoundedCorners = function(el) {
		return (el.userData.borderRadius.topLeft > 0 || el.userData.borderRadius.topRight > 0 || el.userData.borderRadius.bottomRight > 0 || el.userData.borderRadius.bottomLeft > 0);
	}
	this.disposeGeometryAndMaterial = function(el) {
		if (el.geometry) el.geometry.dispose();
		el.geometry = null;
		if (el.material) el.material.dispose();
	}
	this.removeChildren = function(el, filter) {
		if (filter === undefined) filter ='^.*$';
		const pattern = new RegExp(filter);
		for (let i = el.children.length - 1; i >= 0; i--) {
			let child = el.children[i];
			if (pattern.test(child.name)) {
				if (child.isMesh) {
					skin.disposeGeometryAndMaterial(child);
				}
				el.remove(child);
			}
		}
	};
	this.getDepthFrom = function(root, object) {
		let depth = 0;
		let current = object;
		while (current && current !== root) {
			if (current.userData && current.userData.hasOwnProperty('ggId')) depth++;
			current = current.parent;
		}
		return current === root ? depth : -1;
	};
	this.getElementVrPosition = function(el, x, y) {
		var vrPos = {};
		var renderableEl = el.parent && (el.parent.type == 'Mesh' || el.parent.type == 'Group');
		switch (el.userData.hanchor) {
			case 0:
			vrPos.x = (0) - ((renderableEl ? el.parent.userData.width : 800) / 200.0) + (x / 100.0) + (el.userData.width / 200.0);
			break;
			case 1:
			vrPos.x = (0) + (x / 100.0);
			break;
			case 2:
			vrPos.x = (0) + ((renderableEl ? el.parent.userData.width : 800) / 200.0) - (x / 100.0) - (el.userData.width / 200.0);
			break;
		}
		switch (el.userData.vanchor) {
			case 0:
			vrPos.y = (0) + ((renderableEl ? el.parent.userData.height : 600) / 200.0) - (y / 100.0) - (el.userData.height / 200.0);
			break;
			case 1:
			vrPos.y = (0) - (y / 100.0);
			break;
			case 2:
			vrPos.y = (0) - ((renderableEl ? el.parent.userData.height : 600) / 200.0) + (y / 100.0) + (el.userData.height / 200.0);
			break;
		}
		vrPos.x += el.userData.curScaleOffX;
		vrPos.y += el.userData.curScaleOffY;
		return vrPos;
	}
	this.addSkin=function() {
		var hs='';
		var el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_hs_url') == true)) || 
				((player.getVariableValue('vis_hs_image') == true)) || 
				((player.getVariableValue('vis_hs_pdf') == true)) || 
				((player.getVariableValue('vis_hs_video_file') == true)) || 
				((player.getVariableValue('vis_hs_video_url') == true)) || 
				((player.getVariableValue('vis_hs_video_youtube') == true)) || 
				((player.getVariableValue('vis_hs_video_vimeo') == true)) || 
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnails') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicState_vis_skin = 1;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', false);
				}
				else if (me._variable_vis_skin.ggCurrentLogicState == 1) {
					player.setVariableValue('vis_skin', false);
				}
				else {
					player.setVariableValue('vis_skin', true);
				}
			}
		}
		me._variable_vis_thumbnails_desktop = {};
		me._variable_vis_thumbnails_desktop.ggCurrentLogicState = -1;
		me._variable_vis_thumbnails_desktop.logicBlock = function() {
			var newLogicState_vis_thumbnails_desktop;
			if (
				((player.getVariableValue('vis_thumbnails') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicState_vis_thumbnails_desktop = 0;
			}
			else {
				newLogicState_vis_thumbnails_desktop = -1;
			}
			if (me._variable_vis_thumbnails_desktop.ggCurrentLogicState != newLogicState_vis_thumbnails_desktop) {
				me._variable_vis_thumbnails_desktop.ggCurrentLogicState = newLogicState_vis_thumbnails_desktop;
				if (me._variable_vis_thumbnails_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_thumbnails_desktop', true);
				}
				else {
					player.setVariableValue('vis_thumbnails_desktop', false);
				}
			}
		}
		me._variable_vis_popup_desc_toggle = {};
		me._variable_vis_popup_desc_toggle.ggCurrentLogicState = -1;
		me._variable_vis_popup_desc_toggle.logicBlock = function() {
			var newLogicState_vis_popup_desc_toggle;
			if (
				((player.getVariableValue('hs_has_description') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicState_vis_popup_desc_toggle = 0;
			}
			else {
				newLogicState_vis_popup_desc_toggle = -1;
			}
			if (me._variable_vis_popup_desc_toggle.ggCurrentLogicState != newLogicState_vis_popup_desc_toggle) {
				me._variable_vis_popup_desc_toggle.ggCurrentLogicState = newLogicState_vis_popup_desc_toggle;
				if (me._variable_vis_popup_desc_toggle.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_popup_desc_toggle', true);
				}
				else {
					player.setVariableValue('vis_popup_desc_toggle', false);
				}
			}
		}
		me._variable_opt_info_available = {};
		me._variable_opt_info_available.ggCurrentLogicState = -1;
		me._variable_opt_info_available.logicBlock = function() {
			var newLogicState_opt_info_available;
			if (
				((player.getVariableValue('opt_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicState_opt_info_available = 0;
			}
			else {
				newLogicState_opt_info_available = -1;
			}
			if (me._variable_opt_info_available.ggCurrentLogicState != newLogicState_opt_info_available) {
				me._variable_opt_info_available.ggCurrentLogicState = newLogicState_opt_info_available;
				if (me._variable_opt_info_available.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_info_available', true);
				}
				else {
					player.setVariableValue('opt_info_available', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._right_container=document.createElement('div');
		el.ggId="right_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : min(calc(100% - 20px),  520px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._right_container.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('right_open') == false)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('right_open') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._right_container.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._right_container.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._right_container.style.transition='right 1000ms ease 0ms, top 1000ms ease 0ms';
				if (me._right_container.ggCurrentLogicStatePosition == 0) {
					me._right_container.style.right='max(calc(calc(100% - 80px) * -1), -460px)';
					me._right_container.style.top='0px';
				}
				else if (me._right_container.ggCurrentLogicStatePosition == 1) {
					me._right_container.style.right='-440px';
					me._right_container.style.top='0px';
				}
				else {
					me._right_container.style.right='0px';
					me._right_container.style.top='0px';
				}
			}
		}
		me._right_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._right_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._right_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._right_container.style.transition='right 1000ms ease 0ms, top 1000ms ease 0ms';
				if (me._right_container.ggCurrentLogicStateVisible == 0) {
					me._right_container.style.visibility="hidden";
					me._right_container.ggVisible=false;
				}
				else {
					me._right_container.style.visibility=(Number(me._right_container.style.opacity)>0||!me._right_container.style.opacity)?'inherit':'hidden';
					me._right_container.ggVisible=true;
				}
			}
		}
		me._right_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._right_bg=document.createElement('div');
		el.ggId="right_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle blur";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 80px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._right_bg.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._right_bg.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._right_bg.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._right_bg.style.transition='left 0s, top 0s, width 0s, height 0s, background-color 0s';
				if (me._right_bg.ggCurrentLogicStatePosition == 0) {
					me._right_bg.style.left='60px';
					me._right_bg.style.top='0px';
				}
				else {
					me._right_bg.style.left='80px';
					me._right_bg.style.top='0px';
				}
			}
		}
		me._right_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._right_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._right_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._right_bg.style.transition='left 0s, top 0s, width 0s, height 0s, background-color 0s';
				if (me._right_bg.ggCurrentLogicStateSize == 0) {
					me._right_bg.style.width='calc(100% - 60px)';
					me._right_bg.style.height='100%';
					skin.updateSize(me._right_bg);
				}
				else {
					me._right_bg.style.width='calc(100% - 80px)';
					me._right_bg.style.height='100%';
					skin.updateSize(me._right_bg);
				}
			}
		}
		me._right_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._right_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._right_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._right_bg.style.transition='left 0s, top 0s, width 0s, height 0s, background-color 0s';
				if (me._right_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._right_bg.style.backgroundColor="rgba(77,77,77,0.8)";
				}
				else {
					me._right_bg.style.backgroundColor="rgba(255,255,255,0.8)";
				}
			}
		}
		me._right_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_info_text_mobile=document.createElement('div');
		els=me._hs_info_text_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_info_text_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(77,77,77,1);';
		hs+='height : calc(100% - 160px);';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hs_info_text_mobile.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('hs_info_title', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			params.push(player._(String(player.getVariableValue('hs_info_description', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("<p class =  \'info_headline_mobile\'>%1<\/p>\n<p class = \'info_body_mobile\'>%2<\/p>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_info_text_mobile.ggUpdateText();
		player.addListener('varchanged_hs_info_title', function() {
			me._hs_info_text_mobile.ggUpdateText();
		});
		player.addListener('varchanged_hs_info_description', function() {
			me._hs_info_text_mobile.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_info_text_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hs_info_text_mobile.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._hs_info_text_mobile.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._hs_info_text_mobile.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._hs_info_text_mobile.style.transition='color 0s';
				if (me._hs_info_text_mobile.ggCurrentLogicStateTextColor == 0) {
					me._hs_info_text_mobile.style.color="rgba(255,255,255,1)";
				}
				else {
					me._hs_info_text_mobile.style.color="rgba(77,77,77,1)";
				}
			}
		}
		me._hs_info_text_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._right_bg.appendChild(me._hs_info_text_mobile);
		el=me._hs_info_text=document.createElement('div');
		els=me._hs_info_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_info_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(77,77,77,1);';
		hs+='height : calc(100% - 160px);';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 80px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hs_info_text.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('hs_info_title', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			params.push(player._(String(player.getVariableValue('hs_info_description', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("<p class =  \'info_headline\'>%1<\/p>\n<p class = \'info_body\'>%2<\/p>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_info_text.ggUpdateText();
		player.addListener('varchanged_hs_info_title', function() {
			me._hs_info_text.ggUpdateText();
		});
		player.addListener('varchanged_hs_info_description', function() {
			me._hs_info_text.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_info_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hs_info_text.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._hs_info_text.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._hs_info_text.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._hs_info_text.style.transition='color 0s';
				if (me._hs_info_text.ggCurrentLogicStateTextColor == 0) {
					me._hs_info_text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._hs_info_text.style.color="rgba(77,77,77,1)";
				}
			}
		}
		me._hs_info_text.ggUpdatePosition=function (useTransition) {
		}
		me._right_bg.appendChild(me._hs_info_text);
		el=me._info_text_mobile=document.createElement('div');
		els=me._info_text_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(77,77,77,1);';
		hs+='height : calc(100% - 160px);';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_mobile.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("<p class =  \'info_headline_mobile\'>%1<\/p>\n<p class = \'info_body_mobile\'>%2<\/p>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_mobile.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text_mobile.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_text_mobile.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._info_text_mobile.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._info_text_mobile.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._info_text_mobile.style.transition='color 0s';
				if (me._info_text_mobile.ggCurrentLogicStateTextColor == 0) {
					me._info_text_mobile.style.color="rgba(255,255,255,1)";
				}
				else {
					me._info_text_mobile.style.color="rgba(77,77,77,1)";
				}
			}
		}
		me._info_text_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._right_bg.appendChild(me._info_text_mobile);
		el=me._info_text=document.createElement('div');
		els=me._info_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(77,77,77,1);';
		hs+='height : calc(100% - 160px);';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 80px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("<p class =  \'info_headline\'>%1<\/p>\n<p class = \'info_body\'>%2<\/p>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_text.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._info_text.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._info_text.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._info_text.style.transition='color 0s';
				if (me._info_text.ggCurrentLogicStateTextColor == 0) {
					me._info_text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._info_text.style.color="rgba(77,77,77,1)";
				}
			}
		}
		me._info_text.ggUpdatePosition=function (useTransition) {
		}
		me._right_bg.appendChild(me._info_text);
		me._right_container.appendChild(me._right_bg);
		el=me._info=document.createElement('div');
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 40px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info.style.transition='left 0s, bottom 0s';
				if (me._info.ggCurrentLogicStatePosition == 0) {
					me._info.style.left='0px';
					me._info.style.bottom='20px';
				}
				else {
					me._info.style.left='0px';
					me._info.style.bottom='40px';
				}
			}
		}
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_info_available') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style.transition='left 0s, bottom 0s';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else if (me._info.ggCurrentLogicStateVisible == 1) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		me._info.onclick=function (e) {
			player.setVariableValue('right_open', !player.getVariableValue('right_open'));
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_translations', false);
			}
			if (
				(
					((player.getVariableValue('right_open') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._info_text.style.transition='none';
				me._info_text.style.visibility=(Number(me._info_text.style.opacity)>0||!me._info_text.style.opacity)?'inherit':'hidden';
				me._info_text.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('right_open') == true)) && 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				me._info_text_mobile.style.transition='none';
				me._info_text_mobile.style.visibility=(Number(me._info_text_mobile.style.opacity)>0||!me._info_text_mobile.style.opacity)?'inherit':'hidden';
				me._info_text_mobile.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('right_open') == true))
				)
			) {
				me._hs_info_text.style.transition='none';
				me._hs_info_text.style.visibility='hidden';
				me._hs_info_text.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('right_open') == true))
				)
			) {
				me._hs_info_text_mobile.style.transition='none';
				me._hs_info_text_mobile.style.visibility='hidden';
				me._hs_info_text_mobile.ggVisible=false;
			}
			player.setVariableValue('hs_info_id', "");
		}
		me._info.onmouseenter=function (e) {
			me.elementMouseOver['info']=true;
			me._info_bg.logicBlock_alpha();
		}
		me._info.onmouseleave=function (e) {
			me.elementMouseOver['info']=false;
			me._info_bg.logicBlock_alpha();
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_bg=document.createElement('div');
		el.ggId="info_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['info'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._info_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._info_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._info_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._info_bg.ggCurrentLogicStateAlpha == 0) {
					me._info_bg.style.visibility=me._info_bg.ggVisible?'inherit':'hidden';
					me._info_bg.style.opacity=1;
				}
				else {
					me._info_bg.style.visibility=me._info_bg.ggVisible?'inherit':'hidden';
					me._info_bg.style.opacity=0.8;
				}
			}
		}
		me._info_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._info_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._info_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._info_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._info_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._info_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._info_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._info_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._info_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._info_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._info_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._info_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._info_bg.style.borderRadius="5px";
				}
				else if (me._info_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._info_bg.style.borderRadius="20px";
				}
				else {
					me._info_bg.style.borderRadius="0px";
				}
			}
		}
		me._info_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_close=document.createElement('div');
		els=me._info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI0NC41IDE5LjM2IDY1LjEyIDQwLjAyIDY1LjEyIDQwLjAyIDQ0LjUgNjAuNjQiLz4KIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIxLjczLDI0LjJjMC0xLjA5Ljg5LTEuOTcsMS45Ny0xLjk3czEuOTcuODksMS45NywxLjk3LS44OSwxLjk3LTEuOTcsMS45Ny0xLjk3LS44Ni0xLjk3LTEuOTdaIi8+CiA8bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIyMy43MSIgeDI9IjIzLjcxIiB5MT0iMzUuNTYiIHkyPSI1OS4yNSIvPgo8L3N2Zz4K';
		me._info_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_close.style.transition='';
				if (me._info_close.ggCurrentLogicStateVisible == 0) {
					me._info_close.style.visibility=(Number(me._info_close.style.opacity)>0||!me._info_close.style.opacity)?'inherit':'hidden';
					me._info_close.ggVisible=true;
				}
				else {
					me._info_close.style.visibility="hidden";
					me._info_close.ggVisible=false;
				}
			}
		}
		me._info_close.ggUpdatePosition=function (useTransition) {
		}
		me._info_bg.appendChild(me._info_close);
		el=me._info_open=document.createElement('div');
		els=me._info_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI2MC42OCA2MC42NCA0MC4wNiAzOS45OCA0MC4wNiAzOS45OCA2MC42OCAxOS4zNiIvPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjEuNzMsMjQuMmMwLTEuMDkuODktMS45NywxLjk3LTEuOTdzMS45Ny44OSwxLjk3LDEuOTctLjg5LDEuOTctMS45NywxLjk3LTEuOTctLjg2LTEuOTctMS45N1oiLz4KIDxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjIzLjcxIiB4Mj0iMjMuNzEiIHkxPSIzNS41NiIgeTI9IjU5LjI1Ii8+Cjwvc3ZnPgo=';
		me._info_open__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_open.style.transition='';
				if (me._info_open.ggCurrentLogicStateVisible == 0) {
					me._info_open.style.visibility="hidden";
					me._info_open.ggVisible=false;
				}
				else {
					me._info_open.style.visibility=(Number(me._info_open.style.opacity)>0||!me._info_open.style.opacity)?'inherit':'hidden';
					me._info_open.ggVisible=true;
				}
			}
		}
		me._info_open.ggUpdatePosition=function (useTransition) {
		}
		me._info_bg.appendChild(me._info_open);
		me._info.appendChild(me._info_bg);
		me._right_container.appendChild(me._info);
		el=me._thumbnails=document.createElement('div');
		el.ggId="thumbnails";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 40px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_info_available') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._thumbnails.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._thumbnails.ggConditionsTruePosition = newConditionsTruePosition;
				me._thumbnails.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnails.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -20;
				}
				if (me._thumbnails.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 60;
				}
					me._thumbnails.style.left=(0+deltaX) + 'px';
					me._thumbnails.style.bottom=(40+deltaY) + 'px';
			}
		}
		me._thumbnails.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_thumbnails') == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnails.ggCurrentLogicStateVisible == 0) {
					me._thumbnails.style.visibility=(Number(me._thumbnails.style.opacity)>0||!me._thumbnails.style.opacity)?'inherit':'hidden';
					me._thumbnails.ggVisible=true;
				}
				else {
					me._thumbnails.style.visibility="hidden";
					me._thumbnails.ggVisible=false;
				}
			}
		}
		me._thumbnails.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnails.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnails.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnails.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnails.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._thumbnails.style.opacity == 0.0) { me._thumbnails.style.visibility="hidden"; } }, 505);
					me._thumbnails.style.opacity=0;
				}
				else {
					me._thumbnails.style.visibility=me._thumbnails.ggVisible?'inherit':'hidden';
					me._thumbnails.style.opacity=1;
				}
			}
		}
		me._thumbnails.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', !player.getVariableValue('vis_thumbnails'));
		}
		me._thumbnails.onmouseenter=function (e) {
			me.elementMouseOver['thumbnails']=true;
			me._thumbnails_bg.logicBlock_alpha();
		}
		me._thumbnails.onmouseleave=function (e) {
			me.elementMouseOver['thumbnails']=false;
			me._thumbnails_bg.logicBlock_alpha();
		}
		me._thumbnails.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_bg=document.createElement('div');
		el.ggId="thumbnails_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnails'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnails_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnails_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnails_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._thumbnails_bg.ggCurrentLogicStateAlpha == 0) {
					me._thumbnails_bg.style.visibility=me._thumbnails_bg.ggVisible?'inherit':'hidden';
					me._thumbnails_bg.style.opacity=1;
				}
				else {
					me._thumbnails_bg.style.visibility=me._thumbnails_bg.ggVisible?'inherit':'hidden';
					me._thumbnails_bg.style.opacity=0.8;
				}
			}
		}
		me._thumbnails_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnails_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnails_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnails_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._thumbnails_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnails_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._thumbnails_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnails_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._thumbnails_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._thumbnails_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._thumbnails_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._thumbnails_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._thumbnails_bg.style.borderRadius="5px";
				}
				else if (me._thumbnails_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._thumbnails_bg.style.borderRadius="20px";
				}
				else {
					me._thumbnails_bg.style.borderRadius="0px";
				}
			}
		}
		me._thumbnails_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_icon=document.createElement('div');
		els=me._thumbnails_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPHJlY3QgY2xhc3M9ImNscy0xIiBoZWlnaHQ9IjEyIiB3aWR0aD0iMTIiIHg9IjIyIiB5PSIyMiIvPgogPHJlY3QgY2xhc3M9ImNscy0xIiBoZWlnaHQ9IjEyIiB3aWR0aD0iMTIiIHg9IjIyIiB5PSI0NiIvPgogPHJlY3QgY2xhc3M9ImNscy0xIiBoZWlnaHQ9IjEyIiB3aWR0aD0iMTIiIHg9IjQ2IiB5PSIyMiIvPgogPHJlY3QgY2xhc3M9ImNscy0xIiBoZWlnaHQ9IjEyIiB3aWR0aD0iMTIiIHg9IjQ2IiB5PSI0NiIvPgo8L3N2Zz4K';
		me._thumbnails_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_icon.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_bg.appendChild(me._thumbnails_icon);
		me._thumbnails.appendChild(me._thumbnails_bg);
		me._right_container.appendChild(me._thumbnails);
		el=me._fullscreen=document.createElement('div');
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 40px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_info_available') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_thumbnails') == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (JSON.stringify(me._fullscreen.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._fullscreen.ggConditionsTruePosition = newConditionsTruePosition;
				me._fullscreen.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._fullscreen.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -20;
				}
				if (me._fullscreen.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._fullscreen.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 60;
				}
					me._fullscreen.style.left=(0+deltaX) + 'px';
					me._fullscreen.style.bottom=(40+deltaY) + 'px';
			}
		}
		me._fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._fullscreen.ggCurrentLogicStateVisible == 0) {
					me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
					me._fullscreen.ggVisible=true;
				}
				else {
					me._fullscreen.style.visibility="hidden";
					me._fullscreen.ggVisible=false;
				}
			}
		}
		me._fullscreen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._fullscreen.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._fullscreen.style.opacity == 0.0) { me._fullscreen.style.visibility="hidden"; } }, 505);
					me._fullscreen.style.opacity=0;
				}
				else {
					me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
					me._fullscreen.style.opacity=1;
				}
			}
		}
		me._fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen.onmouseenter=function (e) {
			me.elementMouseOver['fullscreen']=true;
			me._fullscreen_bg.logicBlock_alpha();
		}
		me._fullscreen.onmouseleave=function (e) {
			me.elementMouseOver['fullscreen']=false;
			me._fullscreen_bg.logicBlock_alpha();
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_bg=document.createElement('div');
		el.ggId="fullscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['fullscreen'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._fullscreen_bg.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen_bg.style.visibility=me._fullscreen_bg.ggVisible?'inherit':'hidden';
					me._fullscreen_bg.style.opacity=1;
				}
				else {
					me._fullscreen_bg.style.visibility=me._fullscreen_bg.ggVisible?'inherit':'hidden';
					me._fullscreen_bg.style.opacity=0.8;
				}
			}
		}
		me._fullscreen_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._fullscreen_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._fullscreen_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._fullscreen_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._fullscreen_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._fullscreen_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._fullscreen_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._fullscreen_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._fullscreen_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._fullscreen_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._fullscreen_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._fullscreen_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._fullscreen_bg.style.borderRadius="5px";
				}
				else if (me._fullscreen_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._fullscreen_bg.style.borderRadius="20px";
				}
				else {
					me._fullscreen_bg.style.borderRadius="0px";
				}
			}
		}
		me._fullscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_exit=document.createElement('div');
		els=me._fullscreen_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPGc+CiAgPHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI2MS42OSAzNi43NyA0My4yMyAzNi43NyA0My4yMyAzNi43NyA0My4yMyAxOC4zMSIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjYxLjE3IiB4Mj0iNDMuMjMiIHkxPSIxOC45OCIgeTI9IjM2Ljc3Ii8+CiA8L2c+CiA8Zz4KICA8cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjE4LjMxIDQzLjIzIDM2Ljc3IDQzLjIzIDM2Ljc3IDQzLjIzIDM2Ljc3IDYxLjY5Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTguODMiIHgyPSIzNi43NyIgeTE9IjYxLjAyIiB5Mj0iNDMuMjMiLz4K'+
			'IDwvZz4KPC9zdmc+Cg==';
		me._fullscreen_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fullscreen_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen_exit.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_exit.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_exit.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_exit.style.transition='';
				if (me._fullscreen_exit.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
					me._fullscreen_exit.ggVisible=true;
				}
				else {
					me._fullscreen_exit.style.visibility="hidden";
					me._fullscreen_exit.ggVisible=false;
				}
			}
		}
		me._fullscreen_exit.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_bg.appendChild(me._fullscreen_exit);
		el=me._fullscreen_enter=document.createElement('div');
		els=me._fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPGc+CiAgPHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI0My4yMyAxOC4zMSA2MS42OSAxOC4zMSA2MS42OSAxOC4zMSA2MS42OSAzNi43NyIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjQzLjc1IiB4Mj0iNjEuNjkiIHkxPSIzNi4xIiB5Mj0iMTguMzEiLz4KIDwvZz4KIDxnPgogIDxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMzYuNzcgNjEuNjkgMTguMzEgNjEuNjkgMTguMzEgNjEuNjkgMTguMzEgNDMuMjMiLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzNi4yNSIgeDI9IjE4LjMxIiB5MT0iNDMuOSIgeTI9IjYxLjY5Ii8+CiA8'+
			'L2c+Cjwvc3ZnPgo=';
		me._fullscreen_enter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fullscreen_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen_enter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_enter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_enter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_enter.style.transition='';
				if (me._fullscreen_enter.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_enter.style.visibility="hidden";
					me._fullscreen_enter.ggVisible=false;
				}
				else {
					me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
					me._fullscreen_enter.ggVisible=true;
				}
			}
		}
		me._fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_bg.appendChild(me._fullscreen_enter);
		me._fullscreen.appendChild(me._fullscreen_bg);
		me._right_container.appendChild(me._fullscreen);
		el=me._mute=document.createElement('div');
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 40px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mute.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_info_available') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_thumbnails') == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._mute.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._mute.ggConditionsTruePosition = newConditionsTruePosition;
				me._mute.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._mute.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -20;
				}
				if (me._mute.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._mute.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._mute.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 60;
				}
					me._mute.style.left=(0+deltaX) + 'px';
					me._mute.style.bottom=(40+deltaY) + 'px';
			}
		}
		me._mute.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mute.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mute.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mute.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._mute.ggCurrentLogicStateVisible == 0) {
					me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
					me._mute.ggVisible=true;
				}
				else {
					me._mute.style.visibility="hidden";
					me._mute.ggVisible=false;
				}
			}
		}
		me._mute.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._mute.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._mute.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._mute.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._mute.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._mute.style.opacity == 0.0) { me._mute.style.visibility="hidden"; } }, 505);
					me._mute.style.opacity=0;
				}
				else {
					me._mute.style.visibility=me._mute.ggVisible?'inherit':'hidden';
					me._mute.style.opacity=1;
				}
			}
		}
		me._mute.onclick=function (e) {
			player.toggleMuted("_all");
			player.setVariableValue('player_muted', !player.getVariableValue('player_muted'));
		}
		me._mute.onmouseenter=function (e) {
			me.elementMouseOver['mute']=true;
			me._mute_bg.logicBlock_alpha();
		}
		me._mute.onmouseleave=function (e) {
			me.elementMouseOver['mute']=false;
			me._mute_bg.logicBlock_alpha();
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._mute_bg=document.createElement('div');
		el.ggId="mute_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mute_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mute_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['mute'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._mute_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._mute_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._mute_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._mute_bg.ggCurrentLogicStateAlpha == 0) {
					me._mute_bg.style.visibility=me._mute_bg.ggVisible?'inherit':'hidden';
					me._mute_bg.style.opacity=1;
				}
				else {
					me._mute_bg.style.visibility=me._mute_bg.ggVisible?'inherit':'hidden';
					me._mute_bg.style.opacity=0.8;
				}
			}
		}
		me._mute_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._mute_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._mute_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._mute_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._mute_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._mute_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._mute_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._mute_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._mute_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._mute_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._mute_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._mute_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._mute_bg.style.borderRadius="5px";
				}
				else if (me._mute_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._mute_bg.style.borderRadius="20px";
				}
				else {
					me._mute_bg.style.borderRadius="0px";
				}
			}
		}
		me._mute_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._mute_off=document.createElement('div');
		els=me._mute_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEsIC5jbHMtMiB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICM0ZTRkNGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7CiAgICAgIH'+
			'0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgaXNvbGF0aW9uOiBpc29sYXRlOwogICAgICAgIG9wYWNpdHk6IC41OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjQzLjkgMjEuOSAyNy43IDMzLjQgMTYuMyAzMy40IDE2LjMgNDYuNiAyNy43IDQ2LjYgNDMuOSA1OC4xIDQzLjkgMjEuOSIvPgogPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNTAuNSwyNy40YzMuMiwzLjIsNS4zLDcuNyw1LjMsMTIuNnMtMiw5LjMtNS4yLDEyLjYiLz4KIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTU2LjgsMjMuMmM0LjMsNC4zLDYuOSwxMC4yLDYuOSwx'+
			'Ni44cy0yLjcsMTIuNS02LjksMTYuOCIvPgogPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iNjMuNSIgeDI9IjE3LjUiIHkxPSIxNyIgeTI9IjYzIi8+Cjwvc3ZnPgo=';
		me._mute_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mute_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mute_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mute_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('player_muted') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mute_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mute_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mute_off.style.transition='';
				if (me._mute_off.ggCurrentLogicStateVisible == 0) {
					me._mute_off.style.visibility=(Number(me._mute_off.style.opacity)>0||!me._mute_off.style.opacity)?'inherit':'hidden';
					me._mute_off.ggVisible=true;
				}
				else {
					me._mute_off.style.visibility="hidden";
					me._mute_off.ggVisible=false;
				}
			}
		}
		me._mute_off.ggUpdatePosition=function (useTransition) {
		}
		me._mute_bg.appendChild(me._mute_off);
		el=me._mute_on=document.createElement('div');
		els=me._mute_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjQzLjk0IDIxLjg4IDI3LjcxIDMzLjQxIDE2LjMgMzMuNDEgMTYuMyA0Ni41OSAyNy43MSA0Ni41OSA0My45NCA1OC4xMiA0My45NCAyMS44OCIvPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTAuNTMsMjcuMzdjMy4yNSwzLjIyLDUuMjcsNy42OSw1LjI3LDEyLjYzcy0xLjk5LDkuMzUtNS4yMSwxMi41NyIvPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTYuNzYsMjMuMjRjNC4yOSw0LjI5LDYuOTQsMTAuMjIsNi45NCwxNi43NnMtMi42NSwxMi40Ny02Ljk0LDE2Ljc2Ii8+Cjwvc3ZnPgo=';
		me._mute_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mute_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mute_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mute_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('player_muted') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mute_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mute_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mute_on.style.transition='';
				if (me._mute_on.ggCurrentLogicStateVisible == 0) {
					me._mute_on.style.visibility="hidden";
					me._mute_on.ggVisible=false;
				}
				else {
					me._mute_on.style.visibility=(Number(me._mute_on.style.opacity)>0||!me._mute_on.style.opacity)?'inherit':'hidden';
					me._mute_on.ggVisible=true;
				}
			}
		}
		me._mute_on.ggUpdatePosition=function (useTransition) {
		}
		me._mute_bg.appendChild(me._mute_on);
		me._mute.appendChild(me._mute_bg);
		me._right_container.appendChild(me._mute);
		el=me._translations=document.createElement('div');
		el.ggId="translations";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 40px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._translations.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._translations.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_info_available') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_thumbnails') == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (JSON.stringify(me._translations.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._translations.ggConditionsTruePosition = newConditionsTruePosition;
				me._translations.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._translations.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -20;
				}
				if (me._translations.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._translations.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._translations.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._translations.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 60;
				}
					me._translations.style.left=(0+deltaX) + 'px';
					me._translations.style.bottom=(40+deltaY) + 'px';
			}
		}
		me._translations.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._translations.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._translations.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._translations.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._translations.ggCurrentLogicStateVisible == 0) {
					me._translations.style.visibility=(Number(me._translations.style.opacity)>0||!me._translations.style.opacity)?'inherit':'hidden';
					me._translations.ggVisible=true;
				}
				else {
					me._translations.style.visibility="hidden";
					me._translations.ggVisible=false;
				}
			}
		}
		me._translations.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._translations.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._translations.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._translations.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._translations.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._translations.style.opacity == 0.0) { me._translations.style.visibility="hidden"; } }, 505);
					me._translations.style.opacity=0;
				}
				else {
					me._translations.style.visibility=me._translations.ggVisible?'inherit':'hidden';
					me._translations.style.opacity=1;
				}
			}
		}
		me._translations.onclick=function (e) {
			player.setVariableValue('vis_translations', !player.getVariableValue('vis_translations'));
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('right_open', false);
			}
		}
		me._translations.onmouseenter=function (e) {
			me.elementMouseOver['translations']=true;
			me._translations_bg.logicBlock_alpha();
		}
		me._translations.onmouseleave=function (e) {
			me.elementMouseOver['translations']=false;
			me._translations_bg.logicBlock_alpha();
		}
		me._translations.ggUpdatePosition=function (useTransition) {
		}
		el=me._translations_bg=document.createElement('div');
		el.ggId="translations_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._translations_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._translations_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['translations'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._translations_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._translations_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._translations_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._translations_bg.ggCurrentLogicStateAlpha == 0) {
					me._translations_bg.style.visibility=me._translations_bg.ggVisible?'inherit':'hidden';
					me._translations_bg.style.opacity=1;
				}
				else {
					me._translations_bg.style.visibility=me._translations_bg.ggVisible?'inherit':'hidden';
					me._translations_bg.style.opacity=0.8;
				}
			}
		}
		me._translations_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._translations_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._translations_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._translations_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._translations_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._translations_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._translations_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._translations_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._translations_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._translations_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._translations_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._translations_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._translations_bg.style.borderRadius="5px";
				}
				else if (me._translations_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._translations_bg.style.borderRadius="20px";
				}
				else {
					me._translations_bg.style.borderRadius="0px";
				}
			}
		}
		me._translations_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._translations_icon=document.createElement('div');
		els=me._translations_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEsIC5jbHMtMiB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICM0ZTRkNGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7CiAgICAgIH'+
			'0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPHBvbHlsaW5lIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIzNy40OSA1OC45IDUxLjQ0IDMxLjA1IDY1LjAxIDU4LjkiLz4KIDxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjQxLjY5IiB4Mj0iNjAuMDEiIHkxPSI0OC4yMyIgeTI9IjQ4LjIzIi8+CiA8bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxNC45OSIgeDI9IjQzLjM0IiB5MT0iMjcuMzgiIHkyPSIyNy4zOCIvPgogPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjkuMTYiIHgyPSIyOS4xNiIgeTE9IjE5LjEiIHkyPSIy'+
			'Ny4zOCIvPgogPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzQuNzgsMjcuMzhzLjMxLDQuNDMtLjg4LDguMjVjLTIuMTUsNi44Ni05LjMyLDExLjcyLTE0LjksMTMuMDciLz4KIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIzLjc1LDMxLjgxYy0uMDMsMS40MSwwLDQuNjQuOTEsNy41MywxLjYxLDUuMTUsNi4wNSw5LjE2LDEwLjUyLDExLjQyLDEuNDkuNzUsMi45OSwxLjMxLDQuMzgsMS42NSIvPgo8L3N2Zz4K';
		me._translations_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="translations_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._translations_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._translations_icon.ggUpdatePosition=function (useTransition) {
		}
		me._translations_bg.appendChild(me._translations_icon);
		me._translations.appendChild(me._translations_bg);
		me._right_container.appendChild(me._translations);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 40px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_info_available') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_thumbnails') == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (JSON.stringify(me._gyro.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._gyro.ggConditionsTruePosition = newConditionsTruePosition;
				me._gyro.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._gyro.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -20;
				}
				if (me._gyro.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._gyro.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._gyro.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._gyro.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._gyro.ggConditionsTruePosition.includes(5)) {
					deltaX += 0;
					deltaY += 60;
				}
					me._gyro.style.left=(0+deltaX) + 'px';
					me._gyro.style.bottom=(40+deltaY) + 'px';
			}
		}
		me._gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._gyro.ggCurrentLogicStateVisible == 0) {
					me._gyro.style.visibility=(Number(me._gyro.style.opacity)>0||!me._gyro.style.opacity)?'inherit':'hidden';
					me._gyro.ggVisible=true;
				}
				else {
					me._gyro.style.visibility="hidden";
					me._gyro.ggVisible=false;
				}
			}
		}
		me._gyro.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._gyro.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._gyro.style.opacity == 0.0) { me._gyro.style.visibility="hidden"; } }, 505);
					me._gyro.style.opacity=0;
				}
				else {
					me._gyro.style.visibility=me._gyro.ggVisible?'inherit':'hidden';
					me._gyro.style.opacity=1;
				}
			}
		}
		me._gyro.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.onmouseenter=function (e) {
			me.elementMouseOver['gyro']=true;
			me._gyro_bg.logicBlock_alpha();
		}
		me._gyro.onmouseleave=function (e) {
			me.elementMouseOver['gyro']=false;
			me._gyro_bg.logicBlock_alpha();
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_bg=document.createElement('div');
		el.ggId="gyro_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['gyro'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._gyro_bg.ggCurrentLogicStateAlpha == 0) {
					me._gyro_bg.style.visibility=me._gyro_bg.ggVisible?'inherit':'hidden';
					me._gyro_bg.style.opacity=1;
				}
				else {
					me._gyro_bg.style.visibility=me._gyro_bg.ggVisible?'inherit':'hidden';
					me._gyro_bg.style.opacity=0.8;
				}
			}
		}
		me._gyro_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._gyro_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._gyro_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._gyro_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._gyro_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._gyro_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._gyro_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._gyro_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._gyro_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._gyro_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._gyro_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._gyro_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._gyro_bg.style.borderRadius="5px";
				}
				else if (me._gyro_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._gyro_bg.style.borderRadius="20px";
				}
				else {
					me._gyro_bg.style.borderRadius="0px";
				}
			}
		}
		me._gyro_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICM0ZTRkNGQ7CiAgICAgICAgaXNvbGF0aW9uOiBpc29sYXRlOwogICAgICAgIG9wYWNpdHk6IC41OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIC'+
			'Agc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjUuNyw0MGMwLTUuNi01LjEtMTAuMy0xMi45LTEyLjgtMi41LTcuNy03LjMtMTIuOS0xMi44LTEyLjlzLTEwLjMsNS4xLTEyLjgsMTIuOWMtNy43LDIuNS0xMi45LDcuMy0xMi45LDEyLjhzNS4xLDEwLjMsMTIuOSwxMi44YzIuNSw3LjcsNy4zLDEyLjksMTIuOCwxMi45czEwLjMtNS4xLDEyLjgtMTIuOWM3'+
			'LjctMi41LDEyLjktNy4zLDEyLjktMTIuOFpNNDAsMTguM2MzLjIsMCw2LjEsMyw4LjEsNy43LTIuNS0uNS01LjMtLjctOC4xLS43cy01LjYuMy04LjEuN2MyLTQuNyw0LjktNy43LDguMS03LjdaTTUwLjgsNDBjMCwzLjQtLjQsNi43LTEuMiw5LjYtMi45LjctNi4yLDEuMi05LjYsMS4ycy02LjctLjQtOS42LTEuMmMtLjctMi45LTEuMi02LjItMS4yLTkuNnMuNC02LjcsMS4yLTkuNmMyLjktLjcsNi4yLTEuMiw5LjYtMS4yczYuNy40LDkuNiwxLjJjLjcsMi45LDEuMiw2LjIsMS4yLDkuNlpNMTguMyw0MGMwLTMuMiwzLTYuMSw3LjctOC4xLS41LDIuNS0uNyw1LjMtLjcsOC4xcy4zLDUuNi43LD'+
			'guMWMtNC43LTItNy43LTQuOS03LjctOC4xWk00MCw2MS43Yy0zLjIsMC02LjEtMy04LjEtNy43LDIuNS41LDUuMy43LDguMS43czUuNi0uMyw4LjEtLjdjLTIsNC43LTQuOSw3LjctOC4xLDcuN1pNNTQsNDguMWMuNS0yLjUuNy01LjMuNy04LjFzLS4zLTUuNi0uNy04LjFjNC43LDIsNy43LDQuOSw3LjcsOC4xcy0zLDYuMS03LjcsOC4xWiIvPgogPGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iNjMuNSIgeDI9IjE3LjUiIHkxPSIxNyIgeTI9IjYzIi8+Cjwvc3ZnPgo=';
		me._gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_off.style.transition='';
				if (me._gyro_off.ggCurrentLogicStateVisible == 0) {
					me._gyro_off.style.visibility=(Number(me._gyro_off.style.opacity)>0||!me._gyro_off.style.opacity)?'inherit':'hidden';
					me._gyro_off.ggVisible=true;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.ggVisible=false;
				}
			}
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro_bg.appendChild(me._gyro_off);
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPGVsbGlwc2UgY2xhc3M9ImNscy0xIiBjeD0iNDEuNDgiIGN5PSI0MCIgcng9IjEyLjc2IiByeT0iMjMuNyIvPgogPGVsbGlwc2UgY2xhc3M9ImNscy0xIiBjeD0iNDEuNDgiIGN5PSI0MCIgcng9IjIzLjciIHJ5PSIxMi43NiIvPgo8L3N2Zz4K';
		me._gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_on.style.transition='';
				if (me._gyro_on.ggCurrentLogicStateVisible == 0) {
					me._gyro_on.style.visibility="hidden";
					me._gyro_on.ggVisible=false;
				}
				else {
					me._gyro_on.style.visibility=(Number(me._gyro_on.style.opacity)>0||!me._gyro_on.style.opacity)?'inherit':'hidden';
					me._gyro_on.ggVisible=true;
				}
			}
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro_bg.appendChild(me._gyro_on);
		me._gyro.appendChild(me._gyro_bg);
		me._right_container.appendChild(me._gyro);
		el=me._projections=document.createElement('div');
		el.ggId="projections";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 40px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._projections.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._projections.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_info_available') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_thumbnails') == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (
				((player.getGyroAvailable() == true)) && 
				((player.getVariableValue('opt_gyro') == true))
			)
			{
				newConditionsTruePosition.push(6);
			}
			if (JSON.stringify(me._projections.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._projections.ggConditionsTruePosition = newConditionsTruePosition;
				me._projections.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._projections.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -20;
				}
				if (me._projections.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._projections.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._projections.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._projections.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._projections.ggConditionsTruePosition.includes(5)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._projections.ggConditionsTruePosition.includes(6)) {
					deltaX += 0;
					deltaY += 60;
				}
					me._projections.style.left=(0+deltaX) + 'px';
					me._projections.style.bottom=(40+deltaY) + 'px';
			}
		}
		me._projections.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_projections') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._projections.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._projections.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._projections.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._projections.ggCurrentLogicStateVisible == 0) {
					me._projections.style.visibility=(Number(me._projections.style.opacity)>0||!me._projections.style.opacity)?'inherit':'hidden';
					me._projections.ggVisible=true;
				}
				else {
					me._projections.style.visibility="hidden";
					me._projections.ggVisible=false;
				}
			}
		}
		me._projections.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._projections.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._projections.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._projections.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._projections.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._projections.style.opacity == 0.0) { me._projections.style.visibility="hidden"; } }, 505);
					me._projections.style.opacity=0;
				}
				else {
					me._projections.style.visibility=me._projections.ggVisible?'inherit':'hidden';
					me._projections.style.opacity=1;
				}
			}
		}
		me._projections.onclick=function (e) {
			if (
				(
					((player.getProjection() == 4))
				)
			) {
				player.changeProjectionEx(9,1);
			}
			if (
				(
					((player.getProjection() != 4))
				)
			) {
				player.changeProjectionEx(4,1);
			}
		}
		me._projections.onmouseenter=function (e) {
			me.elementMouseOver['projections']=true;
			me._projections_bg.logicBlock_alpha();
		}
		me._projections.onmouseleave=function (e) {
			me.elementMouseOver['projections']=false;
			me._projections_bg.logicBlock_alpha();
		}
		me._projections.ggUpdatePosition=function (useTransition) {
		}
		el=me._projections_bg=document.createElement('div');
		el.ggId="projections_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._projections_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._projections_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['projections'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._projections_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._projections_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._projections_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._projections_bg.ggCurrentLogicStateAlpha == 0) {
					me._projections_bg.style.visibility=me._projections_bg.ggVisible?'inherit':'hidden';
					me._projections_bg.style.opacity=1;
				}
				else {
					me._projections_bg.style.visibility=me._projections_bg.ggVisible?'inherit':'hidden';
					me._projections_bg.style.opacity=0.8;
				}
			}
		}
		me._projections_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._projections_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._projections_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._projections_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._projections_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._projections_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._projections_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._projections_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._projections_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._projections_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._projections_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._projections_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._projections_bg.style.borderRadius="5px";
				}
				else if (me._projections_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._projections_bg.style.borderRadius="20px";
				}
				else {
					me._projections_bg.style.borderRadius="0px";
				}
			}
		}
		me._projections_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._projections_rectilinear=document.createElement('div');
		els=me._projections_rectilinear__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTUuMyw2MC4yYzQuMy0yLjcsMTAuOC00LjUsMTgtNC41czEzLjcsMS43LDE4LDQuNXYtMjUuNGMtNC4zLDIuNy0xMC44LDQuNS0xOCw0LjVzLTEzLjctMS43LTE4LTQuNXYyNS40WiIvPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzcuMSwzOS4xYy0xLjItMi4zLTEuOS00LjgtMS45LTcuNiwwLTguNyw3LjEtMTUuOCwxNS44LTE1LjhzMTUuOCw3LjEsMTUuOCwxNS44LTYuOSwxNS42LTE1LjQsMTUuOCIvPgogPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjIuNiIgeDI9IjQ0IiB5MT0iNDcuNSIgeTI9IjQ3LjUiLz4KPC9z'+
			'dmc+Cg==';
		me._projections_rectilinear__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="projections_rectilinear";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._projections_rectilinear.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._projections_rectilinear.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getProjection() == 4))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._projections_rectilinear.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._projections_rectilinear.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._projections_rectilinear.style.transition='';
				if (me._projections_rectilinear.ggCurrentLogicStateVisible == 0) {
					me._projections_rectilinear.style.visibility="hidden";
					me._projections_rectilinear.ggVisible=false;
				}
				else {
					me._projections_rectilinear.style.visibility=(Number(me._projections_rectilinear.style.opacity)>0||!me._projections_rectilinear.style.opacity)?'inherit':'hidden';
					me._projections_rectilinear.ggVisible=true;
				}
			}
		}
		me._projections_rectilinear.ggUpdatePosition=function (useTransition) {
		}
		me._projections_bg.appendChild(me._projections_rectilinear);
		el=me._projections_steregraphic=document.createElement('div');
		els=me._projections_steregraphic__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzYuNiw0MC44Yy0xLjEsMC0yLjItLjEtMy4zLS4xLTcuMiwwLTEzLjcsMS43LTE4LDQuNXYtMjUuNGM0LjMsMi43LDEwLjgsNC41LDE4LDQuNXMxMy43LTEuNywxOC00LjV2MTIuMSIvPgogPGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI1MC45IiBjeT0iNDguNSIgcj0iMTUuOSIvPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTAuOSw0Ni41Yy0xLjEsMC0yLC45LTIsMnMuOSwyLDIsMiwyLS45LDItMi0uOS0yLTItMloiLz4KPC9zdmc+Cg==';
		me._projections_steregraphic__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="projections_steregraphic";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._projections_steregraphic.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._projections_steregraphic.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getProjection() == 9)) || 
				((player.getProjection() == 12))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._projections_steregraphic.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._projections_steregraphic.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._projections_steregraphic.style.transition='';
				if (me._projections_steregraphic.ggCurrentLogicStateVisible == 0) {
					me._projections_steregraphic.style.visibility="hidden";
					me._projections_steregraphic.ggVisible=false;
				}
				else {
					me._projections_steregraphic.style.visibility=(Number(me._projections_steregraphic.style.opacity)>0||!me._projections_steregraphic.style.opacity)?'inherit':'hidden';
					me._projections_steregraphic.ggVisible=true;
				}
			}
		}
		me._projections_steregraphic.ggUpdatePosition=function (useTransition) {
		}
		me._projections_bg.appendChild(me._projections_steregraphic);
		me._projections.appendChild(me._projections_bg);
		me._right_container.appendChild(me._projections);
		el=me._vr=document.createElement('div');
		el.ggId="vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 40px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vr.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_info_available') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_thumbnails') == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (
				((player.getGyroAvailable() == true)) && 
				((player.getVariableValue('opt_gyro') == true))
			)
			{
				newConditionsTruePosition.push(6);
			}
			if (
				((player.getVariableValue('opt_projections') == true))
			)
			{
				newConditionsTruePosition.push(7);
			}
			if (JSON.stringify(me._vr.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._vr.ggConditionsTruePosition = newConditionsTruePosition;
				me._vr.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._vr.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -20;
				}
				if (me._vr.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._vr.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._vr.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._vr.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._vr.ggConditionsTruePosition.includes(5)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._vr.ggConditionsTruePosition.includes(6)) {
					deltaX += 0;
					deltaY += 60;
				}
				if (me._vr.ggConditionsTruePosition.includes(7)) {
					deltaX += 0;
					deltaY += 60;
				}
					me._vr.style.left=(0+deltaX) + 'px';
					me._vr.style.bottom=(40+deltaY) + 'px';
			}
		}
		me._vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true)) && 
				((player.getVariableValue('opt_vr') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vr.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._vr.ggCurrentLogicStateVisible == 0) {
					me._vr.style.visibility=(Number(me._vr.style.opacity)>0||!me._vr.style.opacity)?'inherit':'hidden';
					me._vr.ggVisible=true;
				}
				else {
					me._vr.style.visibility="hidden";
					me._vr.ggVisible=false;
				}
			}
		}
		me._vr.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._vr.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vr.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vr.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._vr.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._vr.style.opacity == 0.0) { me._vr.style.visibility="hidden"; } }, 505);
					me._vr.style.opacity=0;
				}
				else {
					me._vr.style.visibility=me._vr.ggVisible?'inherit':'hidden';
					me._vr.style.opacity=1;
				}
			}
		}
		me._vr.onclick=function (e) {
			player.enterVR();
		}
		me._vr.onmouseenter=function (e) {
			me.elementMouseOver['vr']=true;
			me._vr_bg.logicBlock_alpha();
		}
		me._vr.onmouseleave=function (e) {
			me.elementMouseOver['vr']=false;
			me._vr_bg.logicBlock_alpha();
		}
		me._vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._vr_bg=document.createElement('div');
		el.ggId="vr_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vr_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vr_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['vr'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._vr_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vr_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vr_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._vr_bg.ggCurrentLogicStateAlpha == 0) {
					me._vr_bg.style.visibility=me._vr_bg.ggVisible?'inherit':'hidden';
					me._vr_bg.style.opacity=1;
				}
				else {
					me._vr_bg.style.visibility=me._vr_bg.ggVisible?'inherit':'hidden';
					me._vr_bg.style.opacity=0.8;
				}
			}
		}
		me._vr_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vr_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vr_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vr_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._vr_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._vr_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._vr_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._vr_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._vr_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._vr_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._vr_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._vr_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._vr_bg.style.borderRadius="5px";
				}
				else if (me._vr_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._vr_bg.style.borderRadius="20px";
				}
				else {
					me._vr_bg.style.borderRadius="0px";
				}
			}
		}
		me._vr_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._vr_on=document.createElement('div');
		els=me._vr_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJpY29uZV9zY3VyZSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODAgODA7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'B5PSIwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNGU0ZDRkO30KPC9zdHlsZT4KIDxnPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01Ny44LDU2LjJoLTguNmMtMi4zLDAtNC40LTEuMi01LjctMy4ybC0wLjItMC4zbC0yLjYtN2MtMC4yLTAuNC0wLjUtMC41LTAuNy0wLjVzLTAuNiwwLjEtMC43LDAuNWwtMi44LDcuMyAgIGMtMS4yLDItMy4zLDMuMi01LjcsMy4yaC04LjZjLTQuNCwwLTgtMy42LTgtOFYzMS44YzAtNC40LDMuNi04LDgtOGgzNS40YzQuNCwwLDgsMy42LDgsOHYxNi40QzY1LjcsNTIuNiw2Mi4yLDU2LjIsNTcuOCw1Ni4yeiAgICBNNDcuMSw1MS4x'+
			'YzAuNSwwLjcsMS4zLDEuMSwyLjIsMS4xaDguNmMyLjIsMCwzLjktMS44LDMuOS00VjMxLjhjMC0yLjItMS44LTQtNC00SDIyLjNjLTIuMiwwLTQsMS44LTQsNHYxNi40YzAsMi4yLDEuOCw0LDQsNCAgIGg4LjZjMC45LDAsMS43LTAuNCwyLjItMS4xbDIuNi02LjhjMC43LTEuOSwyLjUtMy4xLDQuNS0zLjFzMy43LDEuMiw0LjUsMy4xTDQ3LjEsNTEuMXogTTUxLjMsNDMuNGMtMi4yLDAtNC0xLjgtNC00ICAgYzAtMi4yLDEuOC00LDQtNGMyLjIsMCw0LDEuOCw0LDRDNTUuMiw0MS43LDUzLjUsNDMuNCw1MS4zLDQzLjR6IE0yOS4xLDQzLjRjLTIuMiwwLTQtMS44LTQtNGMwLTIuMiwxLjgtNCw0LT'+
			'RzNCwxLjgsNCw0ICAgQzMzLjEsNDEuNywzMS4zLDQzLjQsMjkuMSw0My40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._vr_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="vr_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vr_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vr_on.ggUpdatePosition=function (useTransition) {
		}
		me._vr_bg.appendChild(me._vr_on);
		me._vr.appendChild(me._vr_bg);
		me._right_container.appendChild(me._vr);
		me.divSkin.appendChild(me._right_container);
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text text_shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 30px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='pointer-events: none;';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title.ggUpdateText();
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._node_title.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._node_title.ggCurrentLogicStatePosition == 0) {
					me._node_title.style.left='20px';
					me._node_title.style.bottom='20px';
				}
				else {
					me._node_title.style.left='40px';
					me._node_title.style.bottom='40px';
				}
			}
		}
		me._node_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnails_desktop') == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_title.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._node_title.ggCurrentLogicStateSize == 0) {
					me._node_title.style.width='calc(100% - 580px)';
					me._node_title.style.height='30px';
					skin.updateSize(me._node_title);
				}
				else if (me._node_title.ggCurrentLogicStateSize == 1) {
					me._node_title.style.width='calc(20% - 60px)';
					me._node_title.style.height='30px';
					skin.updateSize(me._node_title);
				}
				else {
					me._node_title.style.width='calc(100% - 100px)';
					me._node_title.style.height='30px';
					skin.updateSize(me._node_title);
				}
			}
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else if (me._node_title.ggCurrentLogicStateVisible == 1) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._node_title);
		el=me._project_title=document.createElement('div');
		els=me._project_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text text_shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 65px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 30px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='pointer-events: none;';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._project_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._project_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._project_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._project_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._project_title.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._project_title.ggCurrentLogicStatePosition == 0) {
					me._project_title.style.left='20px';
					me._project_title.style.bottom='45px';
				}
				else {
					me._project_title.style.left='40px';
					me._project_title.style.bottom='65px';
				}
			}
		}
		me._project_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnails_desktop') == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._project_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._project_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._project_title.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._project_title.ggCurrentLogicStateSize == 0) {
					me._project_title.style.width='calc(100% - 580px)';
					me._project_title.style.height='30px';
					skin.updateSize(me._project_title);
				}
				else if (me._project_title.ggCurrentLogicStateSize == 1) {
					me._project_title.style.width='calc(20% - 60px)';
					me._project_title.style.height='30px';
					skin.updateSize(me._project_title);
				}
				else {
					me._project_title.style.width='calc(100% - 100px)';
					me._project_title.style.height='30px';
					skin.updateSize(me._project_title);
				}
			}
		}
		me._project_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._project_title.ggCurrentLogicStateVisible == 0) {
					me._project_title.style.visibility="hidden";
					me._project_title.ggVisible=false;
				}
				else if (me._project_title.ggCurrentLogicStateVisible == 1) {
					me._project_title.style.visibility="hidden";
					me._project_title.ggVisible=false;
				}
				else {
					me._project_title.style.visibility=(Number(me._project_title.style.opacity)>0||!me._project_title.style.opacity)?'inherit':'hidden';
					me._project_title.ggVisible=true;
				}
			}
		}
		me._project_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._project_title);
		el=me._screentint=document.createElement('div');
		el.ggId="screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle blur";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid rgba(255,255,255,0.392157);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hs_url') == true)) || 
				((player.getVariableValue('vis_hs_image') == true)) || 
				((player.getVariableValue('vis_hs_pdf') == true)) || 
				((player.getVariableValue('vis_hs_video_file') == true)) || 
				((player.getVariableValue('vis_hs_video_url') == true)) || 
				((player.getVariableValue('vis_hs_video_youtube') == true)) || 
				((player.getVariableValue('vis_hs_video_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint.style.transition='background-color 0s';
				if (me._screentint.ggCurrentLogicStateVisible == 0) {
					me._screentint.style.visibility=(Number(me._screentint.style.opacity)>0||!me._screentint.style.opacity)?'inherit':'hidden';
					me._screentint.ggVisible=true;
				}
				else {
					me._screentint.style.visibility="hidden";
					me._screentint.ggVisible=false;
				}
			}
		}
		me._screentint.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._screentint.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._screentint.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._screentint.style.transition='background-color 0s';
				if (me._screentint.ggCurrentLogicStateBackgroundColor == 0) {
					me._screentint.style.backgroundColor="rgba(77,77,77,0.8)";
				}
				else {
					me._screentint.style.backgroundColor="rgba(255,255,255,0.8)";
				}
			}
		}
		me._screentint.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup=document.createElement('div');
		el.ggId="close_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_popup.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._close_popup.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._close_popup.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._close_popup.style.transition='right 0s, top 0s';
				if (me._close_popup.ggCurrentLogicStatePosition == 0) {
					me._close_popup.style.right='20px';
					me._close_popup.style.top='20px';
				}
				else {
					me._close_popup.style.right='40px';
					me._close_popup.style.top='40px';
				}
			}
		}
		me._close_popup.onclick=function (e) {
			player.setVariableValue('vis_hs_url', false);
			player.setVariableValue('vis_hs_image', false);
			player.setVariableValue('vis_hs_pdf', false);
			player.setVariableValue('vis_hs_video_file', false);
			player.setVariableValue('vis_hs_video_url', false);
			player.setVariableValue('vis_hs_video_youtube', false);
			player.setVariableValue('vis_hs_video_vimeo', false);
			player.setVariableValue('vis_popup_mobile_desc', false);
			player.setVariableValue('hs_has_description', false);
				me._popup_title.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._popup_title.ggUpdateText();
			me._popup_title.ggTextDiv.scrollTop = 0;
				me._popup_description.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._popup_description.ggUpdateText();
			me._popup_description.ggTextDiv.scrollTop = 0;
				me._popup_description_mobile.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._popup_description_mobile.ggUpdateText();
			me._popup_description_mobile.ggTextDiv.scrollTop = 0;
		}
		me._close_popup.onmouseenter=function (e) {
			me.elementMouseOver['close_popup']=true;
			me._close_popup_bg.logicBlock_alpha();
		}
		me._close_popup.onmouseleave=function (e) {
			me.elementMouseOver['close_popup']=false;
			me._close_popup_bg.logicBlock_alpha();
		}
		me._close_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_bg=document.createElement('div');
		el.ggId="close_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_popup_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['close_popup'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._close_popup_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._close_popup_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._close_popup_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._close_popup_bg.ggCurrentLogicStateAlpha == 0) {
					me._close_popup_bg.style.visibility=me._close_popup_bg.ggVisible?'inherit':'hidden';
					me._close_popup_bg.style.opacity=1;
				}
				else {
					me._close_popup_bg.style.visibility=me._close_popup_bg.ggVisible?'inherit':'hidden';
					me._close_popup_bg.style.opacity=0.8;
				}
			}
		}
		me._close_popup_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._close_popup_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._close_popup_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._close_popup_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._close_popup_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._close_popup_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._close_popup_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._close_popup_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._close_popup_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._close_popup_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._close_popup_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._close_popup_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._close_popup_bg.style.borderRadius="5px";
				}
				else if (me._close_popup_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._close_popup_bg.style.borderRadius="20px";
				}
				else {
					me._close_popup_bg.style.borderRadius="0px";
				}
			}
		}
		me._close_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_icon=document.createElement('div');
		els=me._close_popup_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjIuNjciIHgyPSI1Ni4wNSIgeTE9IjIzLjIyIiB5Mj0iNTYuODkiLz4KIDxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjU2LjE5IiB4Mj0iMjIuNTMiIHkxPSIyMy4zNyIgeTI9IjU2Ljc0Ii8+Cjwvc3ZnPgo=';
		me._close_popup_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close_popup_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_popup_icon.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_bg.appendChild(me._close_popup_icon);
		me._close_popup.appendChild(me._close_popup_bg);
		me._screentint.appendChild(me._close_popup);
		el=me._toggle_popup_description=document.createElement('div');
		el.ggId="toggle_popup_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_popup_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._toggle_popup_description.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._toggle_popup_description.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._toggle_popup_description.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._toggle_popup_description.style.transition='right 0s, top 0s';
				if (me._toggle_popup_description.ggCurrentLogicStatePosition == 0) {
					me._toggle_popup_description.style.right='80px';
					me._toggle_popup_description.style.top='20px';
				}
				else {
					me._toggle_popup_description.style.right='100px';
					me._toggle_popup_description.style.top='40px';
				}
			}
		}
		me._toggle_popup_description.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup_desc_toggle') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_popup_description.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_popup_description.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_popup_description.style.transition='right 0s, top 0s';
				if (me._toggle_popup_description.ggCurrentLogicStateVisible == 0) {
					me._toggle_popup_description.style.visibility=(Number(me._toggle_popup_description.style.opacity)>0||!me._toggle_popup_description.style.opacity)?'inherit':'hidden';
					me._toggle_popup_description.ggVisible=true;
				}
				else {
					me._toggle_popup_description.style.visibility="hidden";
					me._toggle_popup_description.ggVisible=false;
				}
			}
		}
		me._toggle_popup_description.onclick=function (e) {
			player.setVariableValue('vis_popup_mobile_desc', !player.getVariableValue('vis_popup_mobile_desc'));
		}
		me._toggle_popup_description.onmouseenter=function (e) {
			me.elementMouseOver['toggle_popup_description']=true;
			me._toggle_popup_description_bg.logicBlock_alpha();
		}
		me._toggle_popup_description.onmouseleave=function (e) {
			me.elementMouseOver['toggle_popup_description']=false;
			me._toggle_popup_description_bg.logicBlock_alpha();
		}
		me._toggle_popup_description.ggUpdatePosition=function (useTransition) {
		}
		el=me._toggle_popup_description_bg=document.createElement('div');
		el.ggId="toggle_popup_description_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_popup_description_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._toggle_popup_description_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['toggle_popup_description'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._toggle_popup_description_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._toggle_popup_description_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._toggle_popup_description_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._toggle_popup_description_bg.ggCurrentLogicStateAlpha == 0) {
					me._toggle_popup_description_bg.style.visibility=me._toggle_popup_description_bg.ggVisible?'inherit':'hidden';
					me._toggle_popup_description_bg.style.opacity=1;
				}
				else {
					me._toggle_popup_description_bg.style.visibility=me._toggle_popup_description_bg.ggVisible?'inherit':'hidden';
					me._toggle_popup_description_bg.style.opacity=0.8;
				}
			}
		}
		me._toggle_popup_description_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._toggle_popup_description_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._toggle_popup_description_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._toggle_popup_description_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._toggle_popup_description_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._toggle_popup_description_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._toggle_popup_description_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._toggle_popup_description_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._toggle_popup_description_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._toggle_popup_description_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._toggle_popup_description_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._toggle_popup_description_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._toggle_popup_description_bg.style.borderRadius="5px";
				}
				else if (me._toggle_popup_description_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._toggle_popup_description_bg.style.borderRadius="20px";
				}
				else {
					me._toggle_popup_description_bg.style.borderRadius="0px";
				}
			}
		}
		me._toggle_popup_description_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._toggle_popup_description_icon=document.createElement('div');
		els=me._toggle_popup_description_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzguMDMsMjQuMmMwLTEuMDkuODktMS45NywxLjk3LTEuOTdzMS45Ny44OSwxLjk3LDEuOTctLjg5LDEuOTctMS45NywxLjk3LTEuOTctLjg2LTEuOTctMS45N1oiLz4KIDxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjQwIiB4Mj0iNDAiIHkxPSIzNS41NiIgeTI9IjU5LjI1Ii8+Cjwvc3ZnPgo=';
		me._toggle_popup_description_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="toggle_popup_description_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_popup_description_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._toggle_popup_description_icon.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_popup_description_bg.appendChild(me._toggle_popup_description_icon);
		me._toggle_popup_description.appendChild(me._toggle_popup_description_bg);
		me._screentint.appendChild(me._toggle_popup_description);
		el=me._popup_description_mobile=document.createElement('div');
		els=me._popup_description_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="popup_description_mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text popup_body_mobile";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(77,77,77,1);';
		hs+='height : calc(100vh - 120px);';
		hs+='left : calc(50% - ((calc(100vw - 40px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100vw - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._popup_description_mobile.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._popup_description_mobile.ggUpdateText();
		el.appendChild(els);
		me._popup_description_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popup_description_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup_mobile_desc') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_description_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_description_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_description_mobile.style.transition='color 0s';
				if (me._popup_description_mobile.ggCurrentLogicStateVisible == 0) {
					me._popup_description_mobile.style.visibility=(Number(me._popup_description_mobile.style.opacity)>0||!me._popup_description_mobile.style.opacity)?'inherit':'hidden';
					me._popup_description_mobile.ggVisible=true;
				}
				else {
					me._popup_description_mobile.style.visibility="hidden";
					me._popup_description_mobile.ggVisible=false;
				}
			}
		}
		me._popup_description_mobile.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._popup_description_mobile.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._popup_description_mobile.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._popup_description_mobile.style.transition='color 0s';
				if (me._popup_description_mobile.ggCurrentLogicStateTextColor == 0) {
					me._popup_description_mobile.style.color="rgba(255,255,255,1)";
				}
				else {
					me._popup_description_mobile.style.color="rgba(77,77,77,1)";
				}
			}
		}
		me._popup_description_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._screentint.appendChild(me._popup_description_mobile);
		el=me._popup_description=document.createElement('div');
		els=me._popup_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="popup_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text popup_body";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 25px;';
		hs+='color : rgba(77,77,77,1);';
		hs+='height : 55px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100vw - 80px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._popup_description.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._popup_description.ggUpdateText();
		el.appendChild(els);
		me._popup_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popup_description.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup_desc_toggle') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_description.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_description.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_description.style.transition='color 0s';
				if (me._popup_description.ggCurrentLogicStateVisible == 0) {
					me._popup_description.style.visibility="hidden";
					me._popup_description.ggVisible=false;
				}
				else {
					me._popup_description.style.visibility=(Number(me._popup_description.style.opacity)>0||!me._popup_description.style.opacity)?'inherit':'hidden';
					me._popup_description.ggVisible=true;
				}
			}
		}
		me._popup_description.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._popup_description.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._popup_description.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._popup_description.style.transition='color 0s';
				if (me._popup_description.ggCurrentLogicStateTextColor == 0) {
					me._popup_description.style.color="rgba(255,255,255,1)";
				}
				else {
					me._popup_description.style.color="rgba(77,77,77,1)";
				}
			}
		}
		me._popup_description.ggUpdatePosition=function (useTransition) {
		}
		me._screentint.appendChild(me._popup_description);
		el=me._popup_title=document.createElement('div');
		els=me._popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text popup_headline";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(77,77,77,1);';
		hs+='height : 40px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100vw - 160px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._popup_title.ggUpdateText();
		el.appendChild(els);
		me._popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popup_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._popup_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._popup_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._popup_title.style.transition='left 0s, top 0s, width 0s, height 0s, color 0s';
				if (me._popup_title.ggCurrentLogicStatePosition == 0) {
					me._popup_title.style.left='20px';
					me._popup_title.style.top='20px';
				}
				else {
					me._popup_title.style.left='40px';
					me._popup_title.style.top='40px';
				}
			}
		}
		me._popup_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getVariableValue('vis_popup_desc_toggle') == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._popup_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._popup_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._popup_title.style.transition='left 0s, top 0s, width 0s, height 0s, color 0s';
				if (me._popup_title.ggCurrentLogicStateSize == 0) {
					me._popup_title.style.width='calc(100vw - 100px)';
					me._popup_title.style.height='40px';
					skin.updateSize(me._popup_title);
				}
				else {
					me._popup_title.style.width='calc(100vw - 160px)';
					me._popup_title.style.height='40px';
					skin.updateSize(me._popup_title);
				}
			}
		}
		me._popup_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._popup_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._popup_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._popup_title.style.transition='left 0s, top 0s, width 0s, height 0s, color 0s';
				if (me._popup_title.ggCurrentLogicStateTextColor == 0) {
					me._popup_title.style.color="rgba(255,255,255,1)";
				}
				else {
					me._popup_title.style.color="rgba(77,77,77,1)";
				}
			}
		}
		me._popup_title.logicBlock_cssclasses = function() {
			var newLogicStateCssClasses;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateCssClasses = 0;
			}
			else {
				newLogicStateCssClasses = -1;
			}
			if (me._popup_title.ggCurrentLogicStateCssClasses != newLogicStateCssClasses) {
				me._popup_title.ggCurrentLogicStateCssClasses = newLogicStateCssClasses;
				me._popup_title.style.transition='left 0s, top 0s, width 0s, height 0s, color 0s';
				if (me._popup_title.ggCurrentLogicStateCssClasses == 0) {
					me._popup_title.className = 'ggskin ggskin_text popup_headline_mobile';
				}
				else {
					me._popup_title.className = 'ggskin ggskin_text popup_headline';
				}
			}
		}
		me._popup_title.onclick=function (e) {
			me._close_popup.onclick.call(me._close_popup);
		}
		me._popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._screentint.appendChild(me._popup_title);
		me.divSkin.appendChild(me._screentint);
		el=me._translations_popup=document.createElement('div');
		el.ggId="translations_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((266px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 266px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._translations_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._translations_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_translations') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._translations_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._translations_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._translations_popup.style.transition='';
				if (me._translations_popup.ggCurrentLogicStateVisible == 0) {
					me._translations_popup.style.visibility=(Number(me._translations_popup.style.opacity)>0||!me._translations_popup.style.opacity)?'inherit':'hidden';
					me._translations_popup.ggVisible=true;
				}
				else {
					me._translations_popup.style.visibility="hidden";
					me._translations_popup.ggVisible=false;
				}
			}
		}
		me._translations_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._translations_popup_bg=document.createElement('div');
		el.ggId="translations_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle blur";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._translations_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._translations_popup_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._translations_popup_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._translations_popup_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._translations_popup_bg.style.transition='background-color 0s';
				if (me._translations_popup_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._translations_popup_bg.style.backgroundColor="rgba(77,77,77,0.8)";
				}
				else {
					me._translations_popup_bg.style.backgroundColor="rgba(255,255,255,0.8)";
				}
			}
		}
		me._translations_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		me._translations_popup.appendChild(me._translations_popup_bg);
		el=me._close_translations_popup=document.createElement('div');
		el.ggId="close_translations_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_translations_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_translations_popup.onclick=function (e) {
			player.setVariableValue('vis_translations', false);
		}
		me._close_translations_popup.onmouseenter=function (e) {
			me.elementMouseOver['close_translations_popup']=true;
			me._close_translations_popup_bg.logicBlock_alpha();
		}
		me._close_translations_popup.onmouseleave=function (e) {
			me.elementMouseOver['close_translations_popup']=false;
			me._close_translations_popup_bg.logicBlock_alpha();
		}
		me._close_translations_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_translations_popup_bg=document.createElement('div');
		el.ggId="close_translations_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_translations_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_translations_popup_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['close_translations_popup'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._close_translations_popup_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._close_translations_popup_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._close_translations_popup_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._close_translations_popup_bg.ggCurrentLogicStateAlpha == 0) {
					me._close_translations_popup_bg.style.visibility=me._close_translations_popup_bg.ggVisible?'inherit':'hidden';
					me._close_translations_popup_bg.style.opacity=1;
				}
				else {
					me._close_translations_popup_bg.style.visibility=me._close_translations_popup_bg.ggVisible?'inherit':'hidden';
					me._close_translations_popup_bg.style.opacity=0.8;
				}
			}
		}
		me._close_translations_popup_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._close_translations_popup_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._close_translations_popup_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._close_translations_popup_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._close_translations_popup_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._close_translations_popup_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._close_translations_popup_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._close_translations_popup_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._close_translations_popup_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._close_translations_popup_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._close_translations_popup_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._close_translations_popup_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._close_translations_popup_bg.style.borderRadius="5px";
				}
				else if (me._close_translations_popup_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._close_translations_popup_bg.style.borderRadius="20px";
				}
				else {
					me._close_translations_popup_bg.style.borderRadius="0px";
				}
			}
		}
		me._close_translations_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_translations_popup_icon=document.createElement('div');
		els=me._close_translations_popup_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjIuNjciIHgyPSI1Ni4wNSIgeTE9IjIzLjIyIiB5Mj0iNTYuODkiLz4KIDxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjU2LjE5IiB4Mj0iMjIuNTMiIHkxPSIyMy4zNyIgeTI9IjU2Ljc0Ii8+Cjwvc3ZnPgo=';
		me._close_translations_popup_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close_translations_popup_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_translations_popup_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_translations_popup_icon.ggUpdatePosition=function (useTransition) {
		}
		me._close_translations_popup_bg.appendChild(me._close_translations_popup_icon);
		me._close_translations_popup.appendChild(me._close_translations_popup_bg);
		me._translations_popup.appendChild(me._close_translations_popup);
		el=me._translations_scroller=document.createElement('div');
		els=me._translations_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggInInteraction = false;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 221px;';
		hs+="";
		els.setAttribute('style',hs);
		me._translations_scroller.ggScrollByX = function(diffX) {
			if(!me._translations_scroller.ggHorScrollVisible || diffX == 0 || me._translations_scroller.ggHPercentVisible >= 1.0) return;
			me._translations_scroller.ggScrollPosX = (me._translations_scroller__horScrollFg.offsetLeft + diffX);
			me._translations_scroller.ggScrollPosX = Math.max(me._translations_scroller.ggScrollPosX, 0);
			me._translations_scroller.ggScrollPosX = Math.min(me._translations_scroller.ggScrollPosX, me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth);
			me._translations_scroller__horScrollFg.style.left = me._translations_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._translations_scroller.ggScrollPosX / (me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth);
			me._translations_scroller__content.style.left = -(Math.round((me._translations_scroller.ggContentWidth * (1.0 - me._translations_scroller.ggHPercentVisible)) * percentScrolled)) + me._translations_scroller.ggContentLeftOffset + 'px';
			me._translations_scroller.ggScrollPosXPercent = (me._translations_scroller__horScrollFg.offsetLeft / me._translations_scroller__horScrollBg.offsetWidth);
		}
		me._translations_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._translations_scroller.ggHorScrollVisible || diffX == 0 || me._translations_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._translations_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._translations_scroller.ggScrollPosX >= me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth)) {
					me._translations_scroller.ggScrollPosX = Math.min(me._translations_scroller.ggScrollPosX, me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._translations_scroller.ggScrollPosX <= 0)) {
					me._translations_scroller.ggScrollPosX = Math.max(me._translations_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._translations_scroller__horScrollFg.style.left = me._translations_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._translations_scroller.ggScrollPosX / (me._translations_scroller__horScrollBg.offsetWidth - me._translations_scroller__horScrollFg.offsetWidth);
			me._translations_scroller__content.style.left = -(Math.round((me._translations_scroller.ggContentWidth * (1.0 - me._translations_scroller.ggHPercentVisible)) * percentScrolled)) + me._translations_scroller.ggContentLeftOffset + 'px';
			me._translations_scroller.ggScrollPosXPercent = (me._translations_scroller__horScrollFg.offsetLeft / me._translations_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._translations_scroller.ggScrollByY = function(diffY) {
			if(!me._translations_scroller.ggVertScrollVisible || diffY == 0 || me._translations_scroller.ggVPercentVisible >= 1.0) return;
			me._translations_scroller.ggScrollPosY = (me._translations_scroller__vertScrollFg.offsetTop + diffY);
			me._translations_scroller.ggScrollPosY = Math.max(me._translations_scroller.ggScrollPosY, 0);
			me._translations_scroller.ggScrollPosY = Math.min(me._translations_scroller.ggScrollPosY, me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
			me._translations_scroller__vertScrollFg.style.top = me._translations_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._translations_scroller.ggScrollPosY / (me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
			me._translations_scroller__content.style.top = -(Math.round((me._translations_scroller.ggContentHeight * (1.0 - me._translations_scroller.ggVPercentVisible)) * percentScrolled)) + me._translations_scroller.ggContentTopOffset + 'px';
			me._translations_scroller.ggScrollPosYPercent = (me._translations_scroller__vertScrollFg.offsetTop / me._translations_scroller__vertScrollBg.offsetHeight);
		}
		me._translations_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._translations_scroller.ggVertScrollVisible || diffY == 0 || me._translations_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._translations_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._translations_scroller.ggScrollPosY >= me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight)) {
					me._translations_scroller.ggScrollPosY = Math.min(me._translations_scroller.ggScrollPosY, me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._translations_scroller.ggScrollPosY <= 0)) {
					me._translations_scroller.ggScrollPosY = Math.max(me._translations_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._translations_scroller__vertScrollFg.style.top = me._translations_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._translations_scroller.ggScrollPosY / (me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
			me._translations_scroller__content.style.top = -(Math.round((me._translations_scroller.ggContentHeight * (1.0 - me._translations_scroller.ggVPercentVisible)) * percentScrolled)) + me._translations_scroller.ggContentTopOffset + 'px';
			me._translations_scroller.ggScrollPosYPercent = (me._translations_scroller__vertScrollFg.offsetTop / me._translations_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._translations_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._translations_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._translations_scroller.ggHPercentVisible);
					me._translations_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._translations_scroller.clientWidth - (me._translations_scroller.ggVertScrollVisible ? 7 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._translations_scroller.clientWidth - (me._translations_scroller.ggVertScrollVisible ? 7 : 0))) * me._translations_scroller.ggHPercentVisible);
					me._translations_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._translations_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._translations_scroller.ggVPercentVisible);
					me._translations_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._translations_scroller.clientHeight - (me._translations_scroller.ggHorScrollVisible ? 7 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._translations_scroller.clientHeight - (me._translations_scroller.ggHorScrollVisible ? 7 : 0))) * me._translations_scroller.ggVPercentVisible);
					me._translations_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._translations_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._translations_scroller.ggDragInertiaX *= 0.96;
				me._translations_scroller.ggDragInertiaY *= 0.96;
				me._translations_scroller.ggScrollByX(me._translations_scroller.ggDragInertiaX);
				me._translations_scroller.ggScrollByY(me._translations_scroller.ggDragInertiaY);
				if (Math.abs(me._translations_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._translations_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._translations_scroller.ggInInteraction = false;
			setTimeout(function() { me._translations_scroller.ggIsDragging = false; }, 100);
		}
		me._translations_scroller__content.mousetouchmove = e => {
			if (!me._translations_scroller.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._translations_scroller__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._translations_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._translations_scroller.ggDragStartY) > 10) me._translations_scroller.ggIsDragging = true;
			var diffX = (eventX - me._translations_scroller.ggDragLastX) * me._translations_scroller.ggHPercentVisible;
			var diffY = (eventY - me._translations_scroller.ggDragLastY) * me._translations_scroller.ggVPercentVisible;
			me._translations_scroller.ggDragInertiaX = -diffX;
			me._translations_scroller.ggDragInertiaY = -diffY;
			me._translations_scroller.ggDragLastX = eventX;
			me._translations_scroller.ggDragLastY = eventY;
			me._translations_scroller.ggScrollByX(-diffX);
			me._translations_scroller.ggScrollByY(-diffY);
		}
		me._translations_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._translations_scroller.ggDragLastX = me._translations_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._translations_scroller.ggDragLastY = me._translations_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._translations_scroller.ggInInteraction = true;
		}
		els.onmousedown = me._translations_scroller__content.mousetouchstart;
		els.ontouchstart = me._translations_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._translations_scroller__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._translations_scroller.contentMouseupListener = function() { me._translations_scroller__content.mousetouchend(); });
		document.addEventListener('touchend', me._translations_scroller.contentTouchendListener = function() { me._translations_scroller__content.mousetouchend(); });
		document.addEventListener('mousemove', me._translations_scroller.contentMousemoveListener = function() { me._translations_scroller__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._translations_scroller.contentTouchmoveListener = function() { me._translations_scroller__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._translations_scroller.pointerupListener = function() { me._translations_scroller__content.mousetouchend(); });
			document.addEventListener('pointermove', me._translations_scroller.pointermoveListener = function() { me._translations_scroller__content.mousetouchmove(); });
		}
		elVertScrollBg = me._translations_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 7px; height: 77px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._translations_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 7px; height: 77px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._translations_scroller.ggScrollPosY = 0;
		me._translations_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._translations_scroller.ggDragLastY = e.clientY;
			document.addEventListener('mouseup', me._translations_scroller.vertMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._translations_scroller.ggDragInertiaY *= 0.96;
					me._translations_scroller.ggScrollByY(me._translations_scroller.ggDragInertiaY);
					if (Math.abs(me._translations_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._translations_scroller.vertMouseupListener);
				document.removeEventListener('mousemove', me._translations_scroller.vertMousemoveListener);
			});
			document.addEventListener('mousemove', me._translations_scroller.vertMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._translations_scroller.ggDragLastY;
				me._translations_scroller.ggDragInertiaY = diffY;
				me._translations_scroller.ggDragLastY = e.clientY;
				me._translations_scroller.ggScrollByY(diffY);
			});
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._translations_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._translations_scroller.vertTouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._translations_scroller.ggDragInertiaY *= 0.96;
					me._translations_scroller.ggScrollByY(me._translations_scroller.ggDragInertiaY);
					if (Math.abs(me._translations_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._translations_scroller.vertTouchendListener);
				document.removeEventListener('touchmove', me._translations_scroller.vertTouchmoveListener);
				document.removeEventListener('pointerup', me._translations_scroller.vertPointerupListener);
				document.removeEventListener('pointermove', me._translations_scroller.vertPointermoveListener);
			}
			document.addEventListener('touchend', me._translations_scroller.vertTouchendListener = function() { me._translations_scroller.vertTouchend(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._translations_scroller.vertPointerupListener = function() { me._translations_scroller.vertTouchend(); });
			}
			me._translations_scroller.vertTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._translations_scroller.ggDragLastY;
				me._translations_scroller.ggDragInertiaY = diffY;
				me._translations_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._translations_scroller.ggScrollByY(diffY);
			}
			document.addEventListener('touchmove', me._translations_scroller.vertTouchmoveListener = function(e) { me._translations_scroller.vertTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._translations_scroller.vertPointermoveListener = function(e) { me._translations_scroller.vertTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._translations_scroller.ggScrollHeight;
			if (e.offsetY < me._translations_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._translations_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._translations_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._translations_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._translations_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._translations_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._translations_scroller.ggScrollByYSmooth(30 * me._translations_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._translations_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 7px; height: 7px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="translations_scroller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 20px;';
		hs+='height : calc(100% -  100px);';
		hs+='left : calc(50% - ((calc(100% - 40px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._translations_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._translations_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._translations_scroller.ggScrollPosY / me._translations_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._translations_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 7) || (!me._translations_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._translations_scroller__vertScrollBg.style.visibility = 'inherit';
					me._translations_scroller__vertScrollFg.style.visibility = 'inherit';
					me._translations_scroller.ggVertScrollVisible = true;
				} else {
					me._translations_scroller__vertScrollBg.style.visibility = 'hidden';
					me._translations_scroller__vertScrollFg.style.visibility = 'hidden';
					me._translations_scroller.ggVertScrollVisible = false;
				}
				if(me._translations_scroller.ggVertScrollVisible) {
					me._translations_scroller.ggAvailableWidth = me._translations_scroller.clientWidth - 7;
					if (me._translations_scroller.ggHorScrollVisible) {
						me._translations_scroller.ggAvailableHeight = me._translations_scroller.clientHeight - 7;
						me._translations_scroller.ggAvailableHeightWithScale = me._translations_scroller.getBoundingClientRect().height - me._translations_scroller__vertScrollBg.getBoundingClientRect().width;
						me._translations_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._translations_scroller.ggAvailableHeight = me._translations_scroller.clientHeight;
						me._translations_scroller.ggAvailableHeightWithScale = me._translations_scroller.getBoundingClientRect().height;
						me._translations_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._translations_scroller__vertScrollBg.style.height = me._translations_scroller.ggAvailableHeight + 'px';
					me._translations_scroller.ggVPercentVisible = contentHeight != 0 ? me._translations_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._translations_scroller.ggVPercentVisible > 1.0) me._translations_scroller.ggVPercentVisible = 1.0;
					me._translations_scroller.ggScrollHeight =  Math.round(me._translations_scroller__vertScrollBg.offsetHeight * me._translations_scroller.ggVPercentVisible);
					me._translations_scroller__vertScrollFg.style.height = me._translations_scroller.ggScrollHeight + 'px';
					me._translations_scroller.ggScrollPosY = me._translations_scroller.ggScrollPosYPercent * me._translations_scroller.ggAvailableHeight;
					me._translations_scroller.ggScrollPosY = Math.min(me._translations_scroller.ggScrollPosY, me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
					me._translations_scroller__vertScrollFg.style.top = me._translations_scroller.ggScrollPosY + 'px';
					if (me._translations_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._translations_scroller.ggScrollPosY / (me._translations_scroller__vertScrollBg.offsetHeight - me._translations_scroller__vertScrollFg.offsetHeight);
						me._translations_scroller__content.style.top = -(Math.round((me._translations_scroller.ggContentHeight * (1.0 - me._translations_scroller.ggVPercentVisible)) * percentScrolled)) + me._translations_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._translations_scroller.ggAvailableWidth = me._translations_scroller.clientWidth;
					me._translations_scroller.ggScrollPosY = 0;
					me._translations_scroller.ggScrollPosYPercent = 0.0;
					me._translations_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._translations_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._translations_scroller.ggHorScrollVisible || vertScrollWasVisible != me._translations_scroller.ggVertScrollVisible) {
					skin.updateSize(me._translations_scroller);
					me._translations_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._translations_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._translations_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 222;
		el.ggHeight = 25;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._translations_cloner.ggUpdating == true) return;
			me._translations_cloner.ggUpdating = true;
			var el=me._translations_cloner;
			var curNumCols = 0;
			curNumCols = me._translations_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && false) {
				me._translations_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._translations_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._translations_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._translations_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._translations_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._translations_cloner.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._translations_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_translations_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._translations_cloner.ggNodeCount = me._translations_cloner.ggNumFilterPassed;
			me._translations_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._translations_cloner.parentNode && me._translations_cloner.parentNode.classList.contains('ggskin_subelement') && me._translations_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._translations_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="translations_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 25px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._translations_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._translations_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._translations_cloner.childNodes.length; i++) {
				var child=me._translations_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._translations_cloner.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			var newWidth = (pw*100)/100.0;
			if (newWidth != this.ggWidth) {
				this.ggWidth = newWidth;
				this.ggSizeChanged = true;
			}
			me._translations_cloner.ggUpdate();
		}
		me._translations_scroller__content.appendChild(me._translations_cloner);
		me._translations_popup.appendChild(me._translations_scroller);
		me.divSkin.appendChild(me._translations_popup);
		el=me._thumbs_desktop=document.createElement('div');
		el.ggId="thumbs_desktop";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_desktop.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('opt_proj_title') == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._thumbs_desktop.ggCurrentLogicStateSize != newLogicStateSize) {
				me._thumbs_desktop.ggCurrentLogicStateSize = newLogicStateSize;
				me._thumbs_desktop.style.transition='width 0s, height 0s';
				if (me._thumbs_desktop.ggCurrentLogicStateSize == 0) {
					me._thumbs_desktop.style.width='80%';
					me._thumbs_desktop.style.height='120px';
					me._thumbs_desktop.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me._thumbs_desktop);
				}
				else {
					me._thumbs_desktop.style.width='60%';
					me._thumbs_desktop.style.height='120px';
					me._thumbs_desktop.style.left = 'calc(50% - (60% / 2))';
					skin.updateSize(me._thumbs_desktop);
				}
			}
		}
		me._thumbs_desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('vis_thumbnails') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getVariableValue('right_open') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs_desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs_desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs_desktop.style.transition='width 0s, height 0s';
				if (me._thumbs_desktop.ggCurrentLogicStateVisible == 0) {
					me._thumbs_desktop.style.visibility=(Number(me._thumbs_desktop.style.opacity)>0||!me._thumbs_desktop.style.opacity)?'inherit':'hidden';
					me._thumbs_desktop.ggVisible=true;
				}
				else {
					me._thumbs_desktop.style.visibility="hidden";
					me._thumbs_desktop.ggVisible=false;
				}
			}
		}
		me._thumbs_desktop.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_up=document.createElement('div');
		el.ggId="thumbs_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 60px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_up.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('thumbs_desktop_node_cloner_hasUp') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs_up.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs_up.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs_up.style.transition='';
				if (me._thumbs_up.ggCurrentLogicStateVisible == 0) {
					me._thumbs_up.style.visibility=(Number(me._thumbs_up.style.opacity)>0||!me._thumbs_up.style.opacity)?'inherit':'hidden';
					me._thumbs_up.ggVisible=true;
				}
				else {
					me._thumbs_up.style.visibility="hidden";
					me._thumbs_up.ggVisible=false;
				}
			}
		}
		me._thumbs_up.onclick=function (e) {
			skin.findElements('thumbs_desktop_node_cloner')[0].ggGoUp();
		}
		me._thumbs_up.onmouseenter=function (e) {
			me.elementMouseOver['thumbs_up']=true;
			me._thumbs_up_bg.logicBlock_alpha();
		}
		me._thumbs_up.onmouseleave=function (e) {
			me.elementMouseOver['thumbs_up']=false;
			me._thumbs_up_bg.logicBlock_alpha();
		}
		me._thumbs_up.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_up_bg=document.createElement('div');
		el.ggId="thumbs_up_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_up_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_up_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbs_up'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbs_up_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbs_up_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbs_up_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._thumbs_up_bg.ggCurrentLogicStateAlpha == 0) {
					me._thumbs_up_bg.style.visibility=me._thumbs_up_bg.ggVisible?'inherit':'hidden';
					me._thumbs_up_bg.style.opacity=1;
				}
				else {
					me._thumbs_up_bg.style.visibility=me._thumbs_up_bg.ggVisible?'inherit':'hidden';
					me._thumbs_up_bg.style.opacity=0.8;
				}
			}
		}
		me._thumbs_up_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbs_up_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbs_up_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbs_up_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._thumbs_up_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbs_up_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._thumbs_up_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbs_up_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._thumbs_up_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._thumbs_up_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._thumbs_up_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._thumbs_up_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._thumbs_up_bg.style.borderRadius="5px";
				}
				else if (me._thumbs_up_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._thumbs_up_bg.style.borderRadius="20px";
				}
				else {
					me._thumbs_up_bg.style.borderRadius="0px";
				}
			}
		}
		me._thumbs_up_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_up_icon=document.createElement('div');
		els=me._thumbs_up_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyMS44IDYwLjYgNDIuNSA0MCA0Mi41IDQwIDIxLjggMTkuNCIvPgogPHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI0MS41IDYwLjYgNjIuMiA0MCA2Mi4yIDQwIDQxLjUgMTkuNCIvPgo8L3N2Zz4K';
		me._thumbs_up_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbs_up_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_up_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_up_icon.ggUpdatePosition=function (useTransition) {
		}
		me._thumbs_up_bg.appendChild(me._thumbs_up_icon);
		me._thumbs_up.appendChild(me._thumbs_up_bg);
		me._thumbs_desktop.appendChild(me._thumbs_up);
		el=me._thumbs_down=document.createElement('div');
		el.ggId="thumbs_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 60px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_down.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('thumbs_desktop_node_cloner_hasDown') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs_down.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs_down.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs_down.style.transition='';
				if (me._thumbs_down.ggCurrentLogicStateVisible == 0) {
					me._thumbs_down.style.visibility=(Number(me._thumbs_down.style.opacity)>0||!me._thumbs_down.style.opacity)?'inherit':'hidden';
					me._thumbs_down.ggVisible=true;
				}
				else {
					me._thumbs_down.style.visibility="hidden";
					me._thumbs_down.ggVisible=false;
				}
			}
		}
		me._thumbs_down.onclick=function (e) {
			skin.findElements('thumbs_desktop_node_cloner')[0].ggGoDown();
		}
		me._thumbs_down.onmouseenter=function (e) {
			me.elementMouseOver['thumbs_down']=true;
			me._thumbs_down_bg.logicBlock_alpha();
		}
		me._thumbs_down.onmouseleave=function (e) {
			me.elementMouseOver['thumbs_down']=false;
			me._thumbs_down_bg.logicBlock_alpha();
		}
		me._thumbs_down.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_down_bg=document.createElement('div');
		el.ggId="thumbs_down_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_down_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_down_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbs_down'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbs_down_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbs_down_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbs_down_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._thumbs_down_bg.ggCurrentLogicStateAlpha == 0) {
					me._thumbs_down_bg.style.visibility=me._thumbs_down_bg.ggVisible?'inherit':'hidden';
					me._thumbs_down_bg.style.opacity=1;
				}
				else {
					me._thumbs_down_bg.style.visibility=me._thumbs_down_bg.ggVisible?'inherit':'hidden';
					me._thumbs_down_bg.style.opacity=0.8;
				}
			}
		}
		me._thumbs_down_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbs_down_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbs_down_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbs_down_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._thumbs_down_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbs_down_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._thumbs_down_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbs_down_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._thumbs_down_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._thumbs_down_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._thumbs_down_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._thumbs_down_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._thumbs_down_bg.style.borderRadius="5px";
				}
				else if (me._thumbs_down_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._thumbs_down_bg.style.borderRadius="20px";
				}
				else {
					me._thumbs_down_bg.style.borderRadius="0px";
				}
			}
		}
		me._thumbs_down_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_down_icon=document.createElement('div');
		els=me._thumbs_down_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI1OC4yIDE5LjQgMzcuNSA0MCAzNy41IDQwIDU4LjIgNjAuNiIvPgogPHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIzOC41IDE5LjQgMTcuOCA0MCAxNy44IDQwIDM4LjUgNjAuNiIvPgo8L3N2Zz4K';
		me._thumbs_down_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbs_down_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_down_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_down_icon.ggUpdatePosition=function (useTransition) {
		}
		me._thumbs_down_bg.appendChild(me._thumbs_down_icon);
		me._thumbs_down.appendChild(me._thumbs_down_bg);
		me._thumbs_desktop.appendChild(me._thumbs_down);
		el=me._thumbs_desktop_container=document.createElement('div');
		el.ggId="thumbs_desktop_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 80px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_desktop_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_desktop_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_desktop_node_cloner=document.createElement('div');
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 100;
		el.ggHeight = 80;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggGoUp = function() {
			if (me._thumbs_desktop_node_cloner.ggCloneOffset + me._thumbs_desktop_node_cloner.ggNumCols <= me._thumbs_desktop_node_cloner.ggNumFilterPassed) {
				me._thumbs_desktop_node_cloner.ggCloneOffset += me._thumbs_desktop_node_cloner.ggNumCols;
				me._thumbs_desktop_node_cloner.ggCloneOffsetChanged = true;
				me._thumbs_desktop_node_cloner.ggUpdate();
			}
		}
		el.ggGoDown = function() {
			if (me._thumbs_desktop_node_cloner.ggCloneOffset > 0) {
				me._thumbs_desktop_node_cloner.ggCloneOffset -= me._thumbs_desktop_node_cloner.ggNumCols;
				me._thumbs_desktop_node_cloner.ggCloneOffset = Math.max(me._thumbs_desktop_node_cloner.ggCloneOffset, 0);
				me._thumbs_desktop_node_cloner.ggCloneOffsetChanged = true;
				me._thumbs_desktop_node_cloner.ggUpdate();
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbs_desktop_node_cloner.ggUpdating == true) return;
			me._thumbs_desktop_node_cloner.ggUpdating = true;
			var el=me._thumbs_desktop_node_cloner;
			var curNumCols = 0;
			var parentWidth = me._thumbs_desktop_node_cloner.parentNode.classList.contains('ggskin_subelement') ? (me._thumbs_desktop_node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._thumbs_desktop_node_cloner.parentNode.parentNode.ggAvailableWidth : me._thumbs_desktop_node_cloner.parentNode.parentNode.clientWidth) : me._thumbs_desktop_node_cloner.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._thumbs_desktop_node_cloner.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._thumbs_desktop_node_cloner.offsetLeft) * me._thumbs_desktop_node_cloner.ggNumRepeat / 100.0) / me._thumbs_desktop_node_cloner.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) ) && false) {
				me._thumbs_desktop_node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
			centerOffsetHor = ((parentWidth - me._thumbs_desktop_node_cloner.offsetLeft) % me._thumbs_desktop_node_cloner.offsetWidth) / 2;
				me._thumbs_desktop_node_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbs_desktop_node_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbs_desktop_node_cloner.getFilteredNodes(tourNodes, filter);
			numNodes = tourNodes.length;
			if ((parentWidth - me._thumbs_desktop_node_cloner.offsetLeft) > (me._thumbs_desktop_node_cloner.offsetWidth * numNodes)) {
				centerOffsetHor = ((parentWidth - me._thumbs_desktop_node_cloner.offsetLeft) - (me._thumbs_desktop_node_cloner.offsetWidth * numNodes)) / 2;
			}
			me._thumbs_desktop_node_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbs_desktop_node_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbs_desktop_node_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbs_desktop_node_cloner.ggWidth) + 'px';
				parameter.width=me._thumbs_desktop_node_cloner.ggWidth + 'px';
				parameter.height=me._thumbs_desktop_node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbs_desktop_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					keepCloning = false;
				}
			}
			player.setVariableValue('thumbs_desktop_node_cloner_hasDown', me._thumbs_desktop_node_cloner.ggCloneOffset > 0);
			player.setVariableValue('thumbs_desktop_node_cloner_hasUp', me._thumbs_desktop_node_cloner.ggCloneOffset + me._thumbs_desktop_node_cloner.ggNumCols < me._thumbs_desktop_node_cloner.ggNumFilterPassed);
			me._thumbs_desktop_node_cloner.ggNodeCount = me._thumbs_desktop_node_cloner.ggNumFilterPassed;
			me._thumbs_desktop_node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbs_desktop_node_cloner.parentNode && me._thumbs_desktop_node_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbs_desktop_node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbs_desktop_node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbs_desktop_node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_desktop_node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_desktop_node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbs_desktop_node_cloner.childNodes.length; i++) {
				var child=me._thumbs_desktop_node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbs_desktop_node_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbs_desktop_node_cloner.ggUpdate();
		}
		me._thumbs_desktop_container.appendChild(me._thumbs_desktop_node_cloner);
		me._thumbs_desktop.appendChild(me._thumbs_desktop_container);
		me.divSkin.appendChild(me._thumbs_desktop);
		el=me._thumbs_phone=document.createElement('div');
		el.ggId="thumbs_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs_phone.style.transition='';
				if (me._thumbs_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbs_phone.style.visibility=(Number(me._thumbs_phone.style.opacity)>0||!me._thumbs_phone.style.opacity)?'inherit':'hidden';
					me._thumbs_phone.ggVisible=true;
				}
				else {
					me._thumbs_phone.style.visibility="hidden";
					me._thumbs_phone.ggVisible=false;
				}
			}
		}
		me._thumbs_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_phone_bg=document.createElement('div');
		el.ggId="thumbs_phone_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle blur";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_phone_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_phone_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbs_phone_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbs_phone_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbs_phone_bg.style.transition='background-color 0s';
				if (me._thumbs_phone_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbs_phone_bg.style.backgroundColor="rgba(77,77,77,0.8)";
				}
				else {
					me._thumbs_phone_bg.style.backgroundColor="rgba(255,255,255,0.8)";
				}
			}
		}
		me._thumbs_phone_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_phone_scroller=document.createElement('div');
		els=me._thumbs_phone_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggInInteraction = false;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 134px;';
		hs+='left : 50%;';
		hs+='margin-left : -79.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 159px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbs_phone_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbs_phone_scroller.ggHorScrollVisible || diffX == 0 || me._thumbs_phone_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbs_phone_scroller.ggScrollPosX = (me._thumbs_phone_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbs_phone_scroller.ggScrollPosX = Math.max(me._thumbs_phone_scroller.ggScrollPosX, 0);
			me._thumbs_phone_scroller.ggScrollPosX = Math.min(me._thumbs_phone_scroller.ggScrollPosX, me._thumbs_phone_scroller__horScrollBg.offsetWidth - me._thumbs_phone_scroller__horScrollFg.offsetWidth);
			me._thumbs_phone_scroller__horScrollFg.style.left = me._thumbs_phone_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbs_phone_scroller.ggScrollPosX / (me._thumbs_phone_scroller__horScrollBg.offsetWidth - me._thumbs_phone_scroller__horScrollFg.offsetWidth);
			me._thumbs_phone_scroller__content.style.left = -(Math.round((me._thumbs_phone_scroller.ggContentWidth * (1.0 - me._thumbs_phone_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbs_phone_scroller.ggContentLeftOffset + 'px';
			me._thumbs_phone_scroller.ggScrollPosXPercent = (me._thumbs_phone_scroller__horScrollFg.offsetLeft / me._thumbs_phone_scroller__horScrollBg.offsetWidth);
		}
		me._thumbs_phone_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbs_phone_scroller.ggHorScrollVisible || diffX == 0 || me._thumbs_phone_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbs_phone_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbs_phone_scroller.ggScrollPosX >= me._thumbs_phone_scroller__horScrollBg.offsetWidth - me._thumbs_phone_scroller__horScrollFg.offsetWidth)) {
					me._thumbs_phone_scroller.ggScrollPosX = Math.min(me._thumbs_phone_scroller.ggScrollPosX, me._thumbs_phone_scroller__horScrollBg.offsetWidth - me._thumbs_phone_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbs_phone_scroller.ggScrollPosX <= 0)) {
					me._thumbs_phone_scroller.ggScrollPosX = Math.max(me._thumbs_phone_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbs_phone_scroller__horScrollFg.style.left = me._thumbs_phone_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbs_phone_scroller.ggScrollPosX / (me._thumbs_phone_scroller__horScrollBg.offsetWidth - me._thumbs_phone_scroller__horScrollFg.offsetWidth);
			me._thumbs_phone_scroller__content.style.left = -(Math.round((me._thumbs_phone_scroller.ggContentWidth * (1.0 - me._thumbs_phone_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbs_phone_scroller.ggContentLeftOffset + 'px';
			me._thumbs_phone_scroller.ggScrollPosXPercent = (me._thumbs_phone_scroller__horScrollFg.offsetLeft / me._thumbs_phone_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbs_phone_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbs_phone_scroller.ggVertScrollVisible || diffY == 0 || me._thumbs_phone_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbs_phone_scroller.ggScrollPosY = (me._thumbs_phone_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbs_phone_scroller.ggScrollPosY = Math.max(me._thumbs_phone_scroller.ggScrollPosY, 0);
			me._thumbs_phone_scroller.ggScrollPosY = Math.min(me._thumbs_phone_scroller.ggScrollPosY, me._thumbs_phone_scroller__vertScrollBg.offsetHeight - me._thumbs_phone_scroller__vertScrollFg.offsetHeight);
			me._thumbs_phone_scroller__vertScrollFg.style.top = me._thumbs_phone_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbs_phone_scroller.ggScrollPosY / (me._thumbs_phone_scroller__vertScrollBg.offsetHeight - me._thumbs_phone_scroller__vertScrollFg.offsetHeight);
			me._thumbs_phone_scroller__content.style.top = -(Math.round((me._thumbs_phone_scroller.ggContentHeight * (1.0 - me._thumbs_phone_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbs_phone_scroller.ggContentTopOffset + 'px';
			me._thumbs_phone_scroller.ggScrollPosYPercent = (me._thumbs_phone_scroller__vertScrollFg.offsetTop / me._thumbs_phone_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbs_phone_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbs_phone_scroller.ggVertScrollVisible || diffY == 0 || me._thumbs_phone_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbs_phone_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbs_phone_scroller.ggScrollPosY >= me._thumbs_phone_scroller__vertScrollBg.offsetHeight - me._thumbs_phone_scroller__vertScrollFg.offsetHeight)) {
					me._thumbs_phone_scroller.ggScrollPosY = Math.min(me._thumbs_phone_scroller.ggScrollPosY, me._thumbs_phone_scroller__vertScrollBg.offsetHeight - me._thumbs_phone_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbs_phone_scroller.ggScrollPosY <= 0)) {
					me._thumbs_phone_scroller.ggScrollPosY = Math.max(me._thumbs_phone_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbs_phone_scroller__vertScrollFg.style.top = me._thumbs_phone_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbs_phone_scroller.ggScrollPosY / (me._thumbs_phone_scroller__vertScrollBg.offsetHeight - me._thumbs_phone_scroller__vertScrollFg.offsetHeight);
			me._thumbs_phone_scroller__content.style.top = -(Math.round((me._thumbs_phone_scroller.ggContentHeight * (1.0 - me._thumbs_phone_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbs_phone_scroller.ggContentTopOffset + 'px';
			me._thumbs_phone_scroller.ggScrollPosYPercent = (me._thumbs_phone_scroller__vertScrollFg.offsetTop / me._thumbs_phone_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbs_phone_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbs_phone_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbs_phone_scroller.ggHPercentVisible);
					me._thumbs_phone_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbs_phone_scroller.clientWidth - (me._thumbs_phone_scroller.ggVertScrollVisible ? 7 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbs_phone_scroller.clientWidth - (me._thumbs_phone_scroller.ggVertScrollVisible ? 7 : 0))) * me._thumbs_phone_scroller.ggHPercentVisible);
					me._thumbs_phone_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbs_phone_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbs_phone_scroller.ggVPercentVisible);
					me._thumbs_phone_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbs_phone_scroller.clientHeight - (me._thumbs_phone_scroller.ggHorScrollVisible ? 7 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbs_phone_scroller.clientHeight - (me._thumbs_phone_scroller.ggHorScrollVisible ? 7 : 0))) * me._thumbs_phone_scroller.ggVPercentVisible);
					me._thumbs_phone_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbs_phone_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbs_phone_scroller.ggDragInertiaX *= 0.96;
				me._thumbs_phone_scroller.ggDragInertiaY *= 0.96;
				me._thumbs_phone_scroller.ggScrollByX(me._thumbs_phone_scroller.ggDragInertiaX);
				me._thumbs_phone_scroller.ggScrollByY(me._thumbs_phone_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbs_phone_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbs_phone_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbs_phone_scroller.ggInInteraction = false;
			setTimeout(function() { me._thumbs_phone_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbs_phone_scroller__content.mousetouchmove = e => {
			if (!me._thumbs_phone_scroller.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._thumbs_phone_scroller__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbs_phone_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbs_phone_scroller.ggDragStartY) > 10) me._thumbs_phone_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbs_phone_scroller.ggDragLastX) * me._thumbs_phone_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbs_phone_scroller.ggDragLastY) * me._thumbs_phone_scroller.ggVPercentVisible;
			me._thumbs_phone_scroller.ggDragInertiaX = -diffX;
			me._thumbs_phone_scroller.ggDragInertiaY = -diffY;
			me._thumbs_phone_scroller.ggDragLastX = eventX;
			me._thumbs_phone_scroller.ggDragLastY = eventY;
			me._thumbs_phone_scroller.ggScrollByX(-diffX);
			me._thumbs_phone_scroller.ggScrollByY(-diffY);
		}
		me._thumbs_phone_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbs_phone_scroller.ggDragLastX = me._thumbs_phone_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbs_phone_scroller.ggDragLastY = me._thumbs_phone_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbs_phone_scroller.ggInInteraction = true;
		}
		els.onmousedown = me._thumbs_phone_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbs_phone_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbs_phone_scroller__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._thumbs_phone_scroller.contentMouseupListener = function() { me._thumbs_phone_scroller__content.mousetouchend(); });
		document.addEventListener('touchend', me._thumbs_phone_scroller.contentTouchendListener = function() { me._thumbs_phone_scroller__content.mousetouchend(); });
		document.addEventListener('mousemove', me._thumbs_phone_scroller.contentMousemoveListener = function() { me._thumbs_phone_scroller__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._thumbs_phone_scroller.contentTouchmoveListener = function() { me._thumbs_phone_scroller__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._thumbs_phone_scroller.pointerupListener = function() { me._thumbs_phone_scroller__content.mousetouchend(); });
			document.addEventListener('pointermove', me._thumbs_phone_scroller.pointermoveListener = function() { me._thumbs_phone_scroller__content.mousetouchmove(); });
		}
		elVertScrollBg = me._thumbs_phone_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 7px; height: 493px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbs_phone_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 7px; height: 493px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbs_phone_scroller.ggScrollPosY = 0;
		me._thumbs_phone_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbs_phone_scroller.ggDragLastY = e.clientY;
			document.addEventListener('mouseup', me._thumbs_phone_scroller.vertMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbs_phone_scroller.ggDragInertiaY *= 0.96;
					me._thumbs_phone_scroller.ggScrollByY(me._thumbs_phone_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbs_phone_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._thumbs_phone_scroller.vertMouseupListener);
				document.removeEventListener('mousemove', me._thumbs_phone_scroller.vertMousemoveListener);
			});
			document.addEventListener('mousemove', me._thumbs_phone_scroller.vertMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbs_phone_scroller.ggDragLastY;
				me._thumbs_phone_scroller.ggDragInertiaY = diffY;
				me._thumbs_phone_scroller.ggDragLastY = e.clientY;
				me._thumbs_phone_scroller.ggScrollByY(diffY);
			});
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbs_phone_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbs_phone_scroller.vertTouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbs_phone_scroller.ggDragInertiaY *= 0.96;
					me._thumbs_phone_scroller.ggScrollByY(me._thumbs_phone_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbs_phone_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._thumbs_phone_scroller.vertTouchendListener);
				document.removeEventListener('touchmove', me._thumbs_phone_scroller.vertTouchmoveListener);
				document.removeEventListener('pointerup', me._thumbs_phone_scroller.vertPointerupListener);
				document.removeEventListener('pointermove', me._thumbs_phone_scroller.vertPointermoveListener);
			}
			document.addEventListener('touchend', me._thumbs_phone_scroller.vertTouchendListener = function() { me._thumbs_phone_scroller.vertTouchend(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._thumbs_phone_scroller.vertPointerupListener = function() { me._thumbs_phone_scroller.vertTouchend(); });
			}
			me._thumbs_phone_scroller.vertTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbs_phone_scroller.ggDragLastY;
				me._thumbs_phone_scroller.ggDragInertiaY = diffY;
				me._thumbs_phone_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbs_phone_scroller.ggScrollByY(diffY);
			}
			document.addEventListener('touchmove', me._thumbs_phone_scroller.vertTouchmoveListener = function(e) { me._thumbs_phone_scroller.vertTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._thumbs_phone_scroller.vertPointermoveListener = function(e) { me._thumbs_phone_scroller.vertTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbs_phone_scroller.ggScrollHeight;
			if (e.offsetY < me._thumbs_phone_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbs_phone_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbs_phone_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbs_phone_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbs_phone_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbs_phone_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbs_phone_scroller.ggScrollByYSmooth(30 * me._thumbs_phone_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbs_phone_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 7px; height: 7px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbs_phone_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 100px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_phone_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_phone_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 7;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (7/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbs_phone_scroller.ggScrollPosY / me._thumbs_phone_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbs_phone_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 7) || (!me._thumbs_phone_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbs_phone_scroller__vertScrollBg.style.visibility = 'inherit';
					me._thumbs_phone_scroller__vertScrollFg.style.visibility = 'inherit';
					me._thumbs_phone_scroller.ggVertScrollVisible = true;
				} else {
					me._thumbs_phone_scroller__vertScrollBg.style.visibility = 'hidden';
					me._thumbs_phone_scroller__vertScrollFg.style.visibility = 'hidden';
					me._thumbs_phone_scroller.ggVertScrollVisible = false;
				}
				if(me._thumbs_phone_scroller.ggVertScrollVisible) {
					me._thumbs_phone_scroller.ggAvailableWidth = me._thumbs_phone_scroller.clientWidth - 7;
					if (me._thumbs_phone_scroller.ggHorScrollVisible) {
						me._thumbs_phone_scroller.ggAvailableHeight = me._thumbs_phone_scroller.clientHeight - 7;
						me._thumbs_phone_scroller.ggAvailableHeightWithScale = me._thumbs_phone_scroller.getBoundingClientRect().height - me._thumbs_phone_scroller__vertScrollBg.getBoundingClientRect().width;
						me._thumbs_phone_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbs_phone_scroller.ggAvailableHeight = me._thumbs_phone_scroller.clientHeight;
						me._thumbs_phone_scroller.ggAvailableHeightWithScale = me._thumbs_phone_scroller.getBoundingClientRect().height;
						me._thumbs_phone_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._thumbs_phone_scroller__vertScrollBg.style.height = me._thumbs_phone_scroller.ggAvailableHeight + 'px';
					me._thumbs_phone_scroller.ggVPercentVisible = contentHeight != 0 ? me._thumbs_phone_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbs_phone_scroller.ggVPercentVisible > 1.0) me._thumbs_phone_scroller.ggVPercentVisible = 1.0;
					me._thumbs_phone_scroller.ggScrollHeight =  Math.round(me._thumbs_phone_scroller__vertScrollBg.offsetHeight * me._thumbs_phone_scroller.ggVPercentVisible);
					me._thumbs_phone_scroller__vertScrollFg.style.height = me._thumbs_phone_scroller.ggScrollHeight + 'px';
					me._thumbs_phone_scroller.ggScrollPosY = me._thumbs_phone_scroller.ggScrollPosYPercent * me._thumbs_phone_scroller.ggAvailableHeight;
					me._thumbs_phone_scroller.ggScrollPosY = Math.min(me._thumbs_phone_scroller.ggScrollPosY, me._thumbs_phone_scroller__vertScrollBg.offsetHeight - me._thumbs_phone_scroller__vertScrollFg.offsetHeight);
					me._thumbs_phone_scroller__vertScrollFg.style.top = me._thumbs_phone_scroller.ggScrollPosY + 'px';
					if (me._thumbs_phone_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbs_phone_scroller.ggScrollPosY / (me._thumbs_phone_scroller__vertScrollBg.offsetHeight - me._thumbs_phone_scroller__vertScrollFg.offsetHeight);
						me._thumbs_phone_scroller__content.style.top = -(Math.round((me._thumbs_phone_scroller.ggContentHeight * (1.0 - me._thumbs_phone_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbs_phone_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbs_phone_scroller.ggAvailableWidth = me._thumbs_phone_scroller.clientWidth;
					me._thumbs_phone_scroller.ggScrollPosY = 0;
					me._thumbs_phone_scroller.ggScrollPosYPercent = 0.0;
					me._thumbs_phone_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbs_phone_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbs_phone_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbs_phone_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbs_phone_scroller);
					me._thumbs_phone_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbs_phone_node_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbs_phone_node_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 160;
		el.ggHeight = 135;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbs_phone_node_cloner.ggUpdating == true) return;
			me._thumbs_phone_node_cloner.ggUpdating = true;
			var el=me._thumbs_phone_node_cloner;
			var curNumCols = 0;
			var parentWidth = me._thumbs_phone_node_cloner.parentNode.classList.contains('ggskin_subelement') ? (me._thumbs_phone_node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._thumbs_phone_node_cloner.parentNode.parentNode.ggAvailableWidth : me._thumbs_phone_node_cloner.parentNode.parentNode.clientWidth) : me._thumbs_phone_node_cloner.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._thumbs_phone_node_cloner.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._thumbs_phone_node_cloner.offsetLeft) * me._thumbs_phone_node_cloner.ggNumRepeat / 100.0) / me._thumbs_phone_node_cloner.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbs_phone_node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbs_phone_node_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbs_phone_node_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbs_phone_node_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbs_phone_node_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbs_phone_node_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbs_phone_node_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbs_phone_node_cloner.ggWidth) + 'px';
				parameter.width=me._thumbs_phone_node_cloner.ggWidth + 'px';
				parameter.height=me._thumbs_phone_node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbs_phone_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbs_phone_node_cloner.ggNodeCount = me._thumbs_phone_node_cloner.ggNumFilterPassed;
			me._thumbs_phone_node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbs_phone_node_cloner.parentNode && me._thumbs_phone_node_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbs_phone_node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbs_phone_node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbs_phone_node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 135px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_phone_node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_phone_node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbs_phone_node_cloner.childNodes.length; i++) {
				var child=me._thumbs_phone_node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbs_phone_node_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbs_phone_node_cloner.ggUpdate();
		}
		me._thumbs_phone_scroller__content.appendChild(me._thumbs_phone_node_cloner);
		me._thumbs_phone_bg.appendChild(me._thumbs_phone_scroller);
		me._thumbs_phone.appendChild(me._thumbs_phone_bg);
		el=me._close_thumbs_phone=document.createElement('div');
		el.ggId="close_thumbs_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_thumbs_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_thumbs_phone.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', false);
		}
		me._close_thumbs_phone.onmouseenter=function (e) {
			me.elementMouseOver['close_thumbs_phone']=true;
			me._close_thumbs_phone_bg.logicBlock_alpha();
		}
		me._close_thumbs_phone.onmouseleave=function (e) {
			me.elementMouseOver['close_thumbs_phone']=false;
			me._close_thumbs_phone_bg.logicBlock_alpha();
		}
		me._close_thumbs_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_thumbs_phone_bg=document.createElement('div');
		el.ggId="close_thumbs_phone_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_thumbs_phone_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_thumbs_phone_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['close_thumbs_phone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._close_thumbs_phone_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._close_thumbs_phone_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._close_thumbs_phone_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._close_thumbs_phone_bg.ggCurrentLogicStateAlpha == 0) {
					me._close_thumbs_phone_bg.style.visibility=me._close_thumbs_phone_bg.ggVisible?'inherit':'hidden';
					me._close_thumbs_phone_bg.style.opacity=1;
				}
				else {
					me._close_thumbs_phone_bg.style.visibility=me._close_thumbs_phone_bg.ggVisible?'inherit':'hidden';
					me._close_thumbs_phone_bg.style.opacity=0.8;
				}
			}
		}
		me._close_thumbs_phone_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._close_thumbs_phone_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._close_thumbs_phone_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._close_thumbs_phone_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._close_thumbs_phone_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._close_thumbs_phone_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._close_thumbs_phone_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._close_thumbs_phone_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._close_thumbs_phone_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._close_thumbs_phone_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._close_thumbs_phone_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._close_thumbs_phone_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._close_thumbs_phone_bg.style.borderRadius="5px";
				}
				else if (me._close_thumbs_phone_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._close_thumbs_phone_bg.style.borderRadius="20px";
				}
				else {
					me._close_thumbs_phone_bg.style.borderRadius="0px";
				}
			}
		}
		me._close_thumbs_phone_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_thumbs_phone_icon=document.createElement('div');
		els=me._close_thumbs_phone_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjIuNjciIHgyPSI1Ni4wNSIgeTE9IjIzLjIyIiB5Mj0iNTYuODkiLz4KIDxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjU2LjE5IiB4Mj0iMjIuNTMiIHkxPSIyMy4zNyIgeTI9IjU2Ljc0Ii8+Cjwvc3ZnPgo=';
		me._close_thumbs_phone_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close_thumbs_phone_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_thumbs_phone_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_thumbs_phone_icon.ggUpdatePosition=function (useTransition) {
		}
		me._close_thumbs_phone_bg.appendChild(me._close_thumbs_phone_icon);
		me._close_thumbs_phone.appendChild(me._close_thumbs_phone_bg);
		me._thumbs_phone.appendChild(me._close_thumbs_phone);
		me.divSkin.appendChild(me._thumbs_phone);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 150px;';
		hs+='left : calc(50% - ((266px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 266px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_splashscreen_bg=document.createElement('div');
		el.ggId="sounds_splashscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle blur";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sounds_splashscreen_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sounds_splashscreen_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sounds_splashscreen_bg.style.transition='background-color 0s';
				if (me._sounds_splashscreen_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._sounds_splashscreen_bg.style.backgroundColor="rgba(77,77,77,0.8)";
				}
				else {
					me._sounds_splashscreen_bg.style.backgroundColor="rgba(255,255,255,0.8)";
				}
			}
		}
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off_bg=document.createElement('div');
		el.ggId="sounds_off_bg";
		el.ggDx=60;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 60px);';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_off_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['sounds_off_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._sounds_off_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._sounds_off_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._sounds_off_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._sounds_off_bg.ggCurrentLogicStateAlpha == 0) {
					me._sounds_off_bg.style.visibility=me._sounds_off_bg.ggVisible?'inherit':'hidden';
					me._sounds_off_bg.style.opacity=1;
				}
				else {
					me._sounds_off_bg.style.visibility=me._sounds_off_bg.ggVisible?'inherit':'hidden';
					me._sounds_off_bg.style.opacity=0.8;
				}
			}
		}
		me._sounds_off_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sounds_off_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sounds_off_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sounds_off_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._sounds_off_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._sounds_off_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._sounds_off_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._sounds_off_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._sounds_off_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._sounds_off_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._sounds_off_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._sounds_off_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._sounds_off_bg.style.borderRadius="8px";
				}
				else if (me._sounds_off_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._sounds_off_bg.style.borderRadius="40px";
				}
				else {
					me._sounds_off_bg.style.borderRadius="0px";
				}
			}
		}
		me._sounds_off_bg.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('player_muted', false);
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_off_bg.onmouseenter=function (e) {
			me.elementMouseOver['sounds_off_bg']=true;
			me._sounds_off_bg.logicBlock_alpha();
		}
		me._sounds_off_bg.onmouseleave=function (e) {
			me.elementMouseOver['sounds_off_bg']=false;
			me._sounds_off_bg.logicBlock_alpha();
		}
		me._sounds_off_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEsIC5jbHMtMiB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICM0ZTRkNGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7CiAgICAgIH'+
			'0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgaXNvbGF0aW9uOiBpc29sYXRlOwogICAgICAgIG9wYWNpdHk6IC41OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjQzLjkgMjEuOSAyNy43IDMzLjQgMTYuMyAzMy40IDE2LjMgNDYuNiAyNy43IDQ2LjYgNDMuOSA1OC4xIDQzLjkgMjEuOSIvPgogPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNTAuNSwyNy40YzMuMiwzLjIsNS4zLDcuNyw1LjMsMTIuNnMtMiw5LjMtNS4yLDEyLjYiLz4KIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTU2LjgsMjMuMmM0LjMsNC4zLDYuOSwxMC4yLDYuOSwx'+
			'Ni44cy0yLjcsMTIuNS02LjksMTYuOCIvPgogPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iNjMuNSIgeDI9IjE3LjUiIHkxPSIxNyIgeTI9IjYzIi8+Cjwvc3ZnPgo=';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sounds_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_off_bg.appendChild(me._sounds_off);
		me._sounds_splashscreen_bg.appendChild(me._sounds_off_bg);
		el=me._sounds_on_bg=document.createElement('div');
		el.ggId="sounds_on_bg";
		el.ggDx=-60;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) - 60px);';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_on_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['sounds_on_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._sounds_on_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._sounds_on_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._sounds_on_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._sounds_on_bg.ggCurrentLogicStateAlpha == 0) {
					me._sounds_on_bg.style.visibility=me._sounds_on_bg.ggVisible?'inherit':'hidden';
					me._sounds_on_bg.style.opacity=1;
				}
				else {
					me._sounds_on_bg.style.visibility=me._sounds_on_bg.ggVisible?'inherit':'hidden';
					me._sounds_on_bg.style.opacity=0.8;
				}
			}
		}
		me._sounds_on_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._sounds_on_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._sounds_on_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._sounds_on_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._sounds_on_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._sounds_on_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._sounds_on_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._sounds_on_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._sounds_on_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._sounds_on_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._sounds_on_bg.style.transition='opacity 200ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._sounds_on_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._sounds_on_bg.style.borderRadius="8px";
				}
				else if (me._sounds_on_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._sounds_on_bg.style.borderRadius="40px";
				}
				else {
					me._sounds_on_bg.style.borderRadius="0px";
				}
			}
		}
		me._sounds_on_bg.onclick=function (e) {
			player.setVariableValue('sounds_splashscreen_accepted', true);
			player.startAutoplayMedia();
		}
		me._sounds_on_bg.onmouseenter=function (e) {
			me.elementMouseOver['sounds_on_bg']=true;
			me._sounds_on_bg.logicBlock_alpha();
		}
		me._sounds_on_bg.onmouseleave=function (e) {
			me.elementMouseOver['sounds_on_bg']=false;
			me._sounds_on_bg.logicBlock_alpha();
		}
		me._sounds_on_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIHNjdXJlIiBpZD0iaWNvbmVfc2N1cmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjNGU0ZDRkOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3'+
			'N0eWxlPgogPC9kZWZzPgogPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjQzLjk0IDIxLjg4IDI3LjcxIDMzLjQxIDE2LjMgMzMuNDEgMTYuMyA0Ni41OSAyNy43MSA0Ni41OSA0My45NCA1OC4xMiA0My45NCAyMS44OCIvPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTAuNTMsMjcuMzdjMy4yNSwzLjIyLDUuMjcsNy42OSw1LjI3LDEyLjYzcy0xLjk5LDkuMzUtNS4yMSwxMi41NyIvPgogPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTYuNzYsMjMuMjRjNC4yOSw0LjI5LDYuOTQsMTAuMjIsNi45NCwxNi43NnMtMi42NSwxMi40Ny02Ljk0LDE2Ljc2Ii8+Cjwvc3ZnPgo=';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sounds_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_on_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen_bg.appendChild(me._sounds_on_bg);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._model_load_spinner=document.createElement('div');
		els=me._model_load_spinner__img=document.createElement('img');
		els.className='ggskin ggskin_model_load_spinner';
		hs=basePath + 'images/model_load_spinner.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="model_load_spinner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		el.userData=el;
		hs ='';
		hs+='height : 100px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._model_load_spinner.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._model_load_spinner.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._model_load_spinner.ggCurrentLogicStateSize != newLogicStateSize) {
				me._model_load_spinner.ggCurrentLogicStateSize = newLogicStateSize;
				me._model_load_spinner.style.transition='width 0s, height 0s';
				if (me._model_load_spinner.ggCurrentLogicStateSize == 0) {
					me._model_load_spinner.style.width='75px';
					me._model_load_spinner.style.height='75px';
					skin.updateSize(me._model_load_spinner);
				}
				else {
					me._model_load_spinner.style.width='100px';
					me._model_load_spinner.style.height='100px';
					skin.updateSize(me._model_load_spinner);
				}
			}
		}
		me._model_load_spinner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('model_loading') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._model_load_spinner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._model_load_spinner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._model_load_spinner.style.transition='width 0s, height 0s';
				if (me._model_load_spinner.ggCurrentLogicStateVisible == 0) {
					me._model_load_spinner.style.visibility=(Number(me._model_load_spinner.style.opacity)>0||!me._model_load_spinner.style.opacity)?'inherit':'hidden';
					me._model_load_spinner.ggVisible=true;
				}
				else {
					me._model_load_spinner.style.visibility="hidden";
					me._model_load_spinner.ggVisible=false;
				}
			}
		}
		me._model_load_spinner.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._model_load_spinner);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		me._right_container.logicBlock_position();
		me._right_container.logicBlock_visible();
		me._right_bg.logicBlock_position();
		me._right_bg.logicBlock_size();
		me._right_bg.logicBlock_backgroundcolor();
		me._hs_info_text_mobile.logicBlock_textcolor();
		me._hs_info_text.logicBlock_textcolor();
		me._info_text_mobile.logicBlock_textcolor();
		me._info_text.logicBlock_textcolor();
		me.elementMouseOver['info']=false;
		me._info.logicBlock_position();
		me._info.logicBlock_visible();
		me._info_bg.logicBlock_alpha();
		me._info_bg.logicBlock_backgroundcolor();
		me._info_bg.logicBlock_borderradius();
		me._info_close.logicBlock_visible();
		me._info_open.logicBlock_visible();
		me.elementMouseOver['thumbnails']=false;
		me._thumbnails.logicBlock_position();
		me._thumbnails.logicBlock_visible();
		me._thumbnails.logicBlock_alpha();
		me._thumbnails_bg.logicBlock_alpha();
		me._thumbnails_bg.logicBlock_backgroundcolor();
		me._thumbnails_bg.logicBlock_borderradius();
		me.elementMouseOver['fullscreen']=false;
		me._fullscreen.logicBlock_position();
		me._fullscreen.logicBlock_visible();
		me._fullscreen.logicBlock_alpha();
		me._fullscreen_bg.logicBlock_alpha();
		me._fullscreen_bg.logicBlock_backgroundcolor();
		me._fullscreen_bg.logicBlock_borderradius();
		me._fullscreen_exit.logicBlock_visible();
		me._fullscreen_enter.logicBlock_visible();
		me.elementMouseOver['mute']=false;
		me._mute.logicBlock_position();
		me._mute.logicBlock_visible();
		me._mute.logicBlock_alpha();
		me._mute_bg.logicBlock_alpha();
		me._mute_bg.logicBlock_backgroundcolor();
		me._mute_bg.logicBlock_borderradius();
		me._mute_off.logicBlock_visible();
		me._mute_on.logicBlock_visible();
		me.elementMouseOver['translations']=false;
		me._translations.logicBlock_position();
		me._translations.logicBlock_visible();
		me._translations.logicBlock_alpha();
		me._translations_bg.logicBlock_alpha();
		me._translations_bg.logicBlock_backgroundcolor();
		me._translations_bg.logicBlock_borderradius();
		me.elementMouseOver['gyro']=false;
		me._gyro.logicBlock_position();
		me._gyro.logicBlock_visible();
		me._gyro.logicBlock_alpha();
		me._gyro_bg.logicBlock_alpha();
		me._gyro_bg.logicBlock_backgroundcolor();
		me._gyro_bg.logicBlock_borderradius();
		me._gyro_off.logicBlock_visible();
		me._gyro_on.logicBlock_visible();
		me.elementMouseOver['projections']=false;
		me._projections.logicBlock_position();
		me._projections.logicBlock_visible();
		me._projections.logicBlock_alpha();
		me._projections_bg.logicBlock_alpha();
		me._projections_bg.logicBlock_backgroundcolor();
		me._projections_bg.logicBlock_borderradius();
		me._projections_rectilinear.logicBlock_visible();
		me._projections_steregraphic.logicBlock_visible();
		me.elementMouseOver['vr']=false;
		me._vr.logicBlock_position();
		me._vr.logicBlock_visible();
		me._vr.logicBlock_alpha();
		me._vr_bg.logicBlock_alpha();
		me._vr_bg.logicBlock_backgroundcolor();
		me._vr_bg.logicBlock_borderradius();
		me._node_title.logicBlock_position();
		me._node_title.logicBlock_size();
		me._node_title.logicBlock_visible();
		me._project_title.logicBlock_position();
		me._project_title.logicBlock_size();
		me._project_title.logicBlock_visible();
		me._screentint.logicBlock_visible();
		me._screentint.logicBlock_backgroundcolor();
		me.elementMouseOver['close_popup']=false;
		me._close_popup.logicBlock_position();
		me._close_popup_bg.logicBlock_alpha();
		me._close_popup_bg.logicBlock_backgroundcolor();
		me._close_popup_bg.logicBlock_borderradius();
		me.elementMouseOver['toggle_popup_description']=false;
		me._toggle_popup_description.logicBlock_position();
		me._toggle_popup_description.logicBlock_visible();
		me._toggle_popup_description_bg.logicBlock_alpha();
		me._toggle_popup_description_bg.logicBlock_backgroundcolor();
		me._toggle_popup_description_bg.logicBlock_borderradius();
		me._popup_description_mobile.logicBlock_visible();
		me._popup_description_mobile.logicBlock_textcolor();
		me._popup_description.logicBlock_visible();
		me._popup_description.logicBlock_textcolor();
		me._popup_title.logicBlock_position();
		me._popup_title.logicBlock_size();
		me._popup_title.logicBlock_textcolor();
		me._popup_title.logicBlock_cssclasses();
		me._translations_popup.logicBlock_visible();
		me._translations_popup_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['close_translations_popup']=false;
		me._close_translations_popup_bg.logicBlock_alpha();
		me._close_translations_popup_bg.logicBlock_backgroundcolor();
		me._close_translations_popup_bg.logicBlock_borderradius();
		me._thumbs_desktop.logicBlock_size();
		me._thumbs_desktop.logicBlock_visible();
		me.elementMouseOver['thumbs_up']=false;
		me._thumbs_up.logicBlock_visible();
		me._thumbs_up_bg.logicBlock_alpha();
		me._thumbs_up_bg.logicBlock_backgroundcolor();
		me._thumbs_up_bg.logicBlock_borderradius();
		me.elementMouseOver['thumbs_down']=false;
		me._thumbs_down.logicBlock_visible();
		me._thumbs_down_bg.logicBlock_alpha();
		me._thumbs_down_bg.logicBlock_backgroundcolor();
		me._thumbs_down_bg.logicBlock_borderradius();
		me._thumbs_phone.logicBlock_visible();
		me._thumbs_phone_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['close_thumbs_phone']=false;
		me._close_thumbs_phone_bg.logicBlock_alpha();
		me._close_thumbs_phone_bg.logicBlock_backgroundcolor();
		me._close_thumbs_phone_bg.logicBlock_borderradius();
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_splashscreen_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['sounds_off_bg']=false;
		me._sounds_off_bg.logicBlock_alpha();
		me._sounds_off_bg.logicBlock_backgroundcolor();
		me._sounds_off_bg.logicBlock_borderradius();
		me.elementMouseOver['sounds_on_bg']=false;
		me._sounds_on_bg.logicBlock_alpha();
		me._sounds_on_bg.logicBlock_backgroundcolor();
		me._sounds_on_bg.logicBlock_borderradius();
		pano.on("modelloadstarted", () => { pano.setVariableValue("model_loading", true); });
pano.on("modelloaded", () => { pano.setVariableValue("model_loading", false); });
		me._model_load_spinner.logicBlock_size();
		me._model_load_spinner.logicBlock_visible();
		el = me._local_fonts;
		;
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_activehotspotchanged();
				}
			}
			me._variable_opt_info_available.logicBlock();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._thumbs_phone_node_cloner.ggInstances.length; i++) {
				me._thumbs_phone_node_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbs_desktop_node_cloner.ggInstances.length; i++) {
				me._thumbs_desktop_node_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._translations_cloner.ggInstances.length; i++) {
				me._translations_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_thumbnails_desktop.logicBlock();
			me._variable_vis_popup_desc_toggle.logicBlock();
			me._variable_opt_info_available.logicBlock();
			me._right_container.logicBlock_position();
			me._right_container.logicBlock_visible();
			me._right_bg.logicBlock_position();
			me._right_bg.logicBlock_size();
			me._right_bg.logicBlock_backgroundcolor();
			me._hs_info_text_mobile.logicBlock_textcolor();
			me._hs_info_text.logicBlock_textcolor();
			me._info_text_mobile.logicBlock_textcolor();
			me._info_text.logicBlock_textcolor();
			me._info.logicBlock_position();
			me._info.logicBlock_visible();
			me._info_bg.logicBlock_backgroundcolor();
			me._info_bg.logicBlock_borderradius();
			me._info_close.logicBlock_visible();
			me._info_open.logicBlock_visible();
			me._thumbnails.logicBlock_position();
			me._thumbnails.logicBlock_visible();
			me._thumbnails.logicBlock_alpha();
			me._thumbnails_bg.logicBlock_backgroundcolor();
			me._thumbnails_bg.logicBlock_borderradius();
			me._fullscreen.logicBlock_position();
			me._fullscreen.logicBlock_visible();
			me._fullscreen.logicBlock_alpha();
			me._fullscreen_bg.logicBlock_backgroundcolor();
			me._fullscreen_bg.logicBlock_borderradius();
			me._mute.logicBlock_position();
			me._mute.logicBlock_alpha();
			me._mute_bg.logicBlock_backgroundcolor();
			me._mute_bg.logicBlock_borderradius();
			me._mute_off.logicBlock_visible();
			me._mute_on.logicBlock_visible();
			me._translations.logicBlock_position();
			me._translations.logicBlock_alpha();
			me._translations_bg.logicBlock_backgroundcolor();
			me._translations_bg.logicBlock_borderradius();
			me._gyro.logicBlock_position();
			me._gyro.logicBlock_visible();
			me._gyro.logicBlock_alpha();
			me._gyro_bg.logicBlock_backgroundcolor();
			me._gyro_bg.logicBlock_borderradius();
			me._gyro_off.logicBlock_visible();
			me._gyro_on.logicBlock_visible();
			me._projections.logicBlock_position();
			me._projections.logicBlock_visible();
			me._projections.logicBlock_alpha();
			me._projections_bg.logicBlock_backgroundcolor();
			me._projections_bg.logicBlock_borderradius();
			me._vr.logicBlock_position();
			me._vr.logicBlock_visible();
			me._vr.logicBlock_alpha();
			me._vr_bg.logicBlock_backgroundcolor();
			me._vr_bg.logicBlock_borderradius();
				me._node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._node_title.ggUpdateText();
			me._node_title.ggTextDiv.scrollTop = 0;
			player.setVariableValue('cur_ud_title', player._(me.ggUserdata.title));
			me._node_title.logicBlock_position();
			me._node_title.logicBlock_size();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_position();
			me._project_title.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._screentint.logicBlock_visible();
			me._screentint.logicBlock_backgroundcolor();
			me._close_popup.logicBlock_position();
			me._close_popup_bg.logicBlock_backgroundcolor();
			me._close_popup_bg.logicBlock_borderradius();
			me._toggle_popup_description.logicBlock_position();
			me._toggle_popup_description.logicBlock_visible();
			me._toggle_popup_description_bg.logicBlock_backgroundcolor();
			me._toggle_popup_description_bg.logicBlock_borderradius();
			me._popup_description_mobile.logicBlock_visible();
			me._popup_description_mobile.logicBlock_textcolor();
			me._popup_description.logicBlock_visible();
			me._popup_description.logicBlock_textcolor();
			me._popup_title.logicBlock_position();
			me._popup_title.logicBlock_size();
			me._popup_title.logicBlock_textcolor();
			me._popup_title.logicBlock_cssclasses();
			me._translations_popup.logicBlock_visible();
			me._translations_popup_bg.logicBlock_backgroundcolor();
			me._close_translations_popup_bg.logicBlock_backgroundcolor();
			me._close_translations_popup_bg.logicBlock_borderradius();
			me._translations_cloner.ggUpdateConditionNodeChange();
			me._thumbs_desktop.logicBlock_size();
			me._thumbs_desktop.logicBlock_visible();
			me._thumbs_up.logicBlock_visible();
			me._thumbs_up_bg.logicBlock_backgroundcolor();
			me._thumbs_up_bg.logicBlock_borderradius();
			me._thumbs_down.logicBlock_visible();
			me._thumbs_down_bg.logicBlock_backgroundcolor();
			me._thumbs_down_bg.logicBlock_borderradius();
			me._thumbs_desktop_node_cloner.ggUpdateConditionNodeChange();
			me._thumbs_phone.logicBlock_visible();
			me._thumbs_phone_bg.logicBlock_backgroundcolor();
			me._thumbs_phone_node_cloner.ggUpdateConditionNodeChange();
			me._close_thumbs_phone_bg.logicBlock_backgroundcolor();
			me._close_thumbs_phone_bg.logicBlock_borderradius();
			me._sounds_splashscreen.logicBlock_visible();
			me._sounds_splashscreen_bg.logicBlock_backgroundcolor();
			me._sounds_off_bg.logicBlock_backgroundcolor();
			me._sounds_off_bg.logicBlock_borderradius();
			me._sounds_on_bg.logicBlock_backgroundcolor();
			me._sounds_on_bg.logicBlock_borderradius();
			me._model_load_spinner.logicBlock_size();
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._thumbs_phone_node_cloner.ggInstances.length; i++) {
				me._thumbs_phone_node_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			for(var i = 0; i < me._thumbs_desktop_node_cloner.ggInstances.length; i++) {
				me._thumbs_desktop_node_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			for(var i = 0; i < me._translations_cloner.ggInstances.length; i++) {
				me._translations_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_thumbnails_desktop.logicBlock();
			me._variable_vis_popup_desc_toggle.logicBlock();
			me._variable_opt_info_available.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._right_container.logicBlock_position();
			me._right_container.logicBlock_visible();
			me._right_bg.logicBlock_position();
			me._right_bg.logicBlock_size();
			me._right_bg.logicBlock_backgroundcolor();
			me._hs_info_text_mobile.logicBlock_textcolor();
			me._hs_info_text.logicBlock_textcolor();
			me._info_text_mobile.logicBlock_textcolor();
			me._info_text.logicBlock_textcolor();
			me._info.logicBlock_position();
			me._info.logicBlock_visible();
			me._info_bg.logicBlock_backgroundcolor();
			me._info_bg.logicBlock_borderradius();
			me._info_close.logicBlock_visible();
			me._info_open.logicBlock_visible();
			me._thumbnails.logicBlock_position();
			me._thumbnails.logicBlock_visible();
			me._thumbnails.logicBlock_alpha();
			me._thumbnails_bg.logicBlock_backgroundcolor();
			me._thumbnails_bg.logicBlock_borderradius();
			me._fullscreen.logicBlock_position();
			me._fullscreen.logicBlock_visible();
			me._fullscreen.logicBlock_alpha();
			me._fullscreen_bg.logicBlock_backgroundcolor();
			me._fullscreen_bg.logicBlock_borderradius();
			me._mute.logicBlock_position();
			me._mute.logicBlock_visible();
			me._mute.logicBlock_alpha();
			me._mute_bg.logicBlock_backgroundcolor();
			me._mute_bg.logicBlock_borderradius();
			me._mute_off.logicBlock_visible();
			me._mute_on.logicBlock_visible();
			me._translations.logicBlock_position();
			me._translations.logicBlock_visible();
			me._translations.logicBlock_alpha();
			me._translations_bg.logicBlock_backgroundcolor();
			me._translations_bg.logicBlock_borderradius();
			me._gyro.logicBlock_position();
			me._gyro.logicBlock_visible();
			me._gyro.logicBlock_alpha();
			me._gyro_bg.logicBlock_backgroundcolor();
			me._gyro_bg.logicBlock_borderradius();
			me._projections.logicBlock_position();
			me._projections.logicBlock_visible();
			me._projections.logicBlock_alpha();
			me._projections_bg.logicBlock_backgroundcolor();
			me._projections_bg.logicBlock_borderradius();
			me._vr.logicBlock_position();
			me._vr.logicBlock_visible();
			me._vr.logicBlock_alpha();
			me._vr_bg.logicBlock_backgroundcolor();
			me._vr_bg.logicBlock_borderradius();
			me._node_title.logicBlock_position();
			me._node_title.logicBlock_size();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_position();
			me._project_title.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._screentint.logicBlock_visible();
			me._screentint.logicBlock_backgroundcolor();
			me._close_popup.logicBlock_position();
			me._close_popup_bg.logicBlock_backgroundcolor();
			me._close_popup_bg.logicBlock_borderradius();
			me._toggle_popup_description.logicBlock_position();
			me._toggle_popup_description.logicBlock_visible();
			me._toggle_popup_description_bg.logicBlock_backgroundcolor();
			me._toggle_popup_description_bg.logicBlock_borderradius();
			me._popup_description_mobile.logicBlock_visible();
			me._popup_description_mobile.logicBlock_textcolor();
			me._popup_description.logicBlock_visible();
			me._popup_description.logicBlock_textcolor();
			me._popup_title.logicBlock_position();
			me._popup_title.logicBlock_size();
			me._popup_title.logicBlock_textcolor();
			me._popup_title.logicBlock_cssclasses();
			me._translations_popup.logicBlock_visible();
			me._translations_popup_bg.logicBlock_backgroundcolor();
			me._close_translations_popup_bg.logicBlock_backgroundcolor();
			me._close_translations_popup_bg.logicBlock_borderradius();
			me._translations_scroller.ggUpdatePosition();
			me._translations_cloner.ggTranslations = player.getProjectTranslations();
			me._translations_cloner.ggUpdate();
			me._thumbs_desktop.logicBlock_size();
			me._thumbs_desktop.logicBlock_visible();
			me._thumbs_up.logicBlock_visible();
			me._thumbs_up_bg.logicBlock_backgroundcolor();
			me._thumbs_up_bg.logicBlock_borderradius();
			me._thumbs_down.logicBlock_visible();
			me._thumbs_down_bg.logicBlock_backgroundcolor();
			me._thumbs_down_bg.logicBlock_borderradius();
			me._thumbs_phone.logicBlock_visible();
			me._thumbs_phone_bg.logicBlock_backgroundcolor();
			me._thumbs_phone_scroller.ggUpdatePosition();
			me._close_thumbs_phone_bg.logicBlock_backgroundcolor();
			me._close_thumbs_phone_bg.logicBlock_borderradius();
			me._sounds_splashscreen.logicBlock_visible();
			me._sounds_splashscreen_bg.logicBlock_backgroundcolor();
			me._sounds_off_bg.logicBlock_backgroundcolor();
			me._sounds_off_bg.logicBlock_borderradius();
			me._sounds_on_bg.logicBlock_backgroundcolor();
			me._sounds_on_bg.logicBlock_borderradius();
			me._model_load_spinner.logicBlock_size();
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._fullscreen_exit.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._fullscreen_exit.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
		});
		player.addListener('gyroavailable', function(event) {
			me._gyro.logicBlock_visible();
			me._projections.logicBlock_position();
			me._vr.logicBlock_position();
		});
		player.addListener('gyrochanged', function(event) {
			me._gyro_off.logicBlock_visible();
			me._gyro_on.logicBlock_visible();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('playerdown', function(event) {
			player.setVariableValue('player_mouse_down', true);
		});
		player.addListener('playerup', function(event) {
			player.setVariableValue('player_mouse_down', false);
		});
		player.addListener('projectionchanged', function(event) {
			me._projections_rectilinear.logicBlock_visible();
			me._projections_steregraphic.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._fullscreen.logicBlock_visible();
			me._mute.logicBlock_position();
			me._translations.logicBlock_position();
			me._gyro.logicBlock_position();
			me._projections.logicBlock_position();
			me._vr.logicBlock_position();
		});
		player.addListener('varchanged_hs_has_description', function(event) {
			me._variable_vis_popup_desc_toggle.logicBlock();
		});
		player.addListener('varchanged_model_loading', function(event) {
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('varchanged_opt_3d_node_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_opt_3d_node_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_opt_3d_node_hotspots();
				}
			}
		});
		player.addListener('varchanged_opt_3d_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_opt_3d_preview();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_opt_3d_preview();
				}
			}
		});
		player.addListener('varchanged_opt_dark', function(event) {
			for(var i = 0; i < me._thumbs_phone_node_cloner.ggInstances.length; i++) {
				me._thumbs_phone_node_cloner.ggInstances[i].ggEvent_varchanged_opt_dark(event);
			}
			for(var i = 0; i < me._thumbs_desktop_node_cloner.ggInstances.length; i++) {
				me._thumbs_desktop_node_cloner.ggInstances[i].ggEvent_varchanged_opt_dark(event);
			}
			for(var i = 0; i < me._translations_cloner.ggInstances.length; i++) {
				me._translations_cloner.ggInstances[i].ggEvent_varchanged_opt_dark(event);
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_opt_dark();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_opt_dark();
				}
			}
			me._right_bg.logicBlock_backgroundcolor();
			me._hs_info_text_mobile.logicBlock_textcolor();
			me._hs_info_text.logicBlock_textcolor();
			me._info_text_mobile.logicBlock_textcolor();
			me._info_text.logicBlock_textcolor();
			me._info_bg.logicBlock_backgroundcolor();
			me._thumbnails_bg.logicBlock_backgroundcolor();
			me._fullscreen_bg.logicBlock_backgroundcolor();
			me._mute_bg.logicBlock_backgroundcolor();
			me._translations_bg.logicBlock_backgroundcolor();
			me._gyro_bg.logicBlock_backgroundcolor();
			me._projections_bg.logicBlock_backgroundcolor();
			me._vr_bg.logicBlock_backgroundcolor();
			me._screentint.logicBlock_backgroundcolor();
			me._close_popup_bg.logicBlock_backgroundcolor();
			me._toggle_popup_description_bg.logicBlock_backgroundcolor();
			me._popup_description_mobile.logicBlock_textcolor();
			me._popup_description.logicBlock_textcolor();
			me._popup_title.logicBlock_textcolor();
			me._translations_popup_bg.logicBlock_backgroundcolor();
			me._close_translations_popup_bg.logicBlock_backgroundcolor();
			me._thumbs_up_bg.logicBlock_backgroundcolor();
			me._thumbs_down_bg.logicBlock_backgroundcolor();
			me._thumbs_phone_bg.logicBlock_backgroundcolor();
			me._close_thumbs_phone_bg.logicBlock_backgroundcolor();
			me._sounds_splashscreen_bg.logicBlock_backgroundcolor();
			me._sounds_off_bg.logicBlock_backgroundcolor();
			me._sounds_on_bg.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._fullscreen.logicBlock_visible();
			me._mute.logicBlock_position();
			me._translations.logicBlock_position();
			me._gyro.logicBlock_position();
			me._projections.logicBlock_position();
			me._vr.logicBlock_position();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._gyro.logicBlock_visible();
			me._projections.logicBlock_position();
			me._vr.logicBlock_position();
		});
		player.addListener('varchanged_opt_icon_shape', function(event) {
			for(var i = 0; i < me._thumbs_desktop_node_cloner.ggInstances.length; i++) {
				me._thumbs_desktop_node_cloner.ggInstances[i].ggEvent_varchanged_opt_icon_shape(event);
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_opt_icon_shape();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_opt_icon_shape();
				}
			}
			me._info_bg.logicBlock_borderradius();
			me._thumbnails_bg.logicBlock_borderradius();
			me._fullscreen_bg.logicBlock_borderradius();
			me._mute_bg.logicBlock_borderradius();
			me._translations_bg.logicBlock_borderradius();
			me._gyro_bg.logicBlock_borderradius();
			me._projections_bg.logicBlock_borderradius();
			me._vr_bg.logicBlock_borderradius();
			me._close_popup_bg.logicBlock_borderradius();
			me._toggle_popup_description_bg.logicBlock_borderradius();
			me._close_translations_popup_bg.logicBlock_borderradius();
			me._thumbs_up_bg.logicBlock_borderradius();
			me._thumbs_down_bg.logicBlock_borderradius();
			me._close_thumbs_phone_bg.logicBlock_borderradius();
			me._sounds_off_bg.logicBlock_borderradius();
			me._sounds_on_bg.logicBlock_borderradius();
		});
		player.addListener('varchanged_opt_info', function(event) {
			me._variable_opt_info_available.logicBlock();
		});
		player.addListener('varchanged_opt_info_available', function(event) {
			me._info.logicBlock_visible();
			me._thumbnails.logicBlock_position();
			me._fullscreen.logicBlock_position();
			me._mute.logicBlock_position();
			me._translations.logicBlock_position();
			me._gyro.logicBlock_position();
			me._projections.logicBlock_position();
			me._vr.logicBlock_position();
		});
		player.addListener('varchanged_opt_proj_title', function(event) {
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._thumbs_desktop.logicBlock_size();
		});
		player.addListener('varchanged_opt_projections', function(event) {
			me._projections.logicBlock_visible();
			me._vr.logicBlock_position();
		});
		player.addListener('varchanged_opt_thumbnails', function(event) {
			me._thumbnails.logicBlock_visible();
			me._fullscreen.logicBlock_position();
			me._mute.logicBlock_position();
			me._translations.logicBlock_position();
			me._gyro.logicBlock_position();
			me._projections.logicBlock_position();
			me._vr.logicBlock_position();
		});
		player.addListener('varchanged_opt_vr', function(event) {
			me._vr.logicBlock_visible();
		});
		player.addListener('varchanged_player_mouse_down', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_player_mouse_down();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_player_mouse_down();
				}
			}
		});
		player.addListener('varchanged_player_muted', function(event) {
			me._mute_off.logicBlock_visible();
			me._mute_on.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_resp_phone();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_resp_phone();
				}
			}
			me._variable_vis_skin.logicBlock();
			me._variable_vis_thumbnails_desktop.logicBlock();
			me._variable_vis_popup_desc_toggle.logicBlock();
			me._right_container.logicBlock_position();
			me._right_bg.logicBlock_position();
			me._right_bg.logicBlock_size();
			me._info.logicBlock_position();
			me._thumbnails.logicBlock_position();
			me._fullscreen.logicBlock_position();
			me._mute.logicBlock_position();
			me._translations.logicBlock_position();
			me._gyro.logicBlock_position();
			me._projections.logicBlock_position();
			me._vr.logicBlock_position();
			me._node_title.logicBlock_position();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_position();
			me._project_title.logicBlock_visible();
			me._close_popup.logicBlock_position();
			me._toggle_popup_description.logicBlock_position();
			me._popup_title.logicBlock_position();
			me._popup_title.logicBlock_size();
			me._popup_title.logicBlock_cssclasses();
			me._thumbs_desktop.logicBlock_visible();
			me._thumbs_phone.logicBlock_visible();
			me._model_load_spinner.logicBlock_size();
		});
		player.addListener('varchanged_right_open', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_right_open();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_right_open();
				}
			}
			me._right_container.logicBlock_position();
			me._info.logicBlock_visible();
			me._info_close.logicBlock_visible();
			me._info_open.logicBlock_visible();
			me._thumbnails.logicBlock_alpha();
			me._fullscreen.logicBlock_alpha();
			me._mute.logicBlock_alpha();
			me._translations.logicBlock_alpha();
			me._gyro.logicBlock_alpha();
			me._projections.logicBlock_alpha();
			me._vr.logicBlock_alpha();
			me._node_title.logicBlock_size();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._thumbs_desktop.logicBlock_visible();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_thumbs_desktop_node_cloner_hasDown', function(event) {
			me._thumbs_down.logicBlock_visible();
		});
		player.addListener('varchanged_thumbs_desktop_node_cloner_hasUp', function(event) {
			me._thumbs_up.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hs_image', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hs_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hs_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hs_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hs_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hs_video_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hs_video_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint.logicBlock_visible();
		});
		player.addListener('varchanged_vis_popup_desc_toggle', function(event) {
			me._toggle_popup_description.logicBlock_visible();
			me._popup_description.logicBlock_visible();
			me._popup_title.logicBlock_size();
		});
		player.addListener('varchanged_vis_popup_mobile_desc', function(event) {
			me._popup_description_mobile.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._right_container.logicBlock_visible();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._thumbs_desktop.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnails', function(event) {
			me._variable_vis_skin.logicBlock();
			me._variable_vis_thumbnails_desktop.logicBlock();
			me._thumbs_desktop.logicBlock_visible();
			me._thumbs_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnails_desktop', function(event) {
			if (
				(
					((player.getVariableValue('opt_3d_node_hotspots') == true))
				)
			) {
				player.updatePanorama();
			}
			me._node_title.logicBlock_size();
			me._project_title.logicBlock_size();
		});
		player.addListener('varchanged_vis_translations', function(event) {
			me._translations_popup.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._translations_cloner.ggUpdate();
			me._thumbs_desktop_node_cloner.ggUpdate();
			me._thumbs_phone_node_cloner.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._vr.logicBlock_visible();
		});
	};
	function SkinCloner_thumbs_phone_node_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbs_phone_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbs_phone_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbs_phone_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbs_phone_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumbs_phone_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbs_phone_title.ggUpdateText();
		el.appendChild(els);
		me._thumbs_phone_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._thumbs_phone_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._thumbs_phone_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._thumbs_phone_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._thumbs_phone_title.style.transition='color 0s';
				if (me._thumbs_phone_title.ggCurrentLogicStateTextColor == 0) {
					me._thumbs_phone_title.style.color="rgba(255,255,255,1)";
				}
				else {
					me._thumbs_phone_title.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._thumbs_phone_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbs_phone_title);
		el=me._thumbs_phone_thumb=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbs_phone_thumb;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbs_phone_thumb__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbs_phone_thumb_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbs_phone_thumb";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbs_phone_thumb.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbs_phone_thumb.onclick=function (e) {
			if (me._thumbs_phone_thumb.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbs_phone_thumb.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbs_phone_thumb);
		me._thumbs_phone_title.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._thumbs_phone_title.logicBlock_textcolor();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbs_phone_title.logicBlock_textcolor();
			};
			me.ggEvent_varchanged_opt_dark=function(event) {
				me._thumbs_phone_title.logicBlock_textcolor();
			};
	};
	function SkinCloner_thumbs_desktop_node_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_container=document.createElement('div');
		el.ggId="node_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._node_container.ggIsActive() == false)) && 
				((me.elementMouseOver['node_container'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me._node_container.ggIsActive() == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_container.style.transition='opacity 0s';
				if (me._node_container.ggCurrentLogicStateAlpha == 0) {
					me._node_container.style.visibility=me._node_container.ggVisible?'inherit':'hidden';
					me._node_container.style.opacity=0.8;
				}
				else if (me._node_container.ggCurrentLogicStateAlpha == 1) {
					me._node_container.style.visibility=me._node_container.ggVisible?'inherit':'hidden';
					me._node_container.style.opacity=0.6;
				}
				else {
					me._node_container.style.visibility=me._node_container.ggVisible?'inherit':'hidden';
					me._node_container.style.opacity=1;
				}
			}
		}
		me._node_container.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._node_container.onmouseenter=function (e) {
				skin._node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._node_title.ggUpdateText();
			skin._node_title.ggTextDiv.scrollTop = 0;
			me.elementMouseOver['node_container']=true;
			me._node_container.logicBlock_alpha();
		}
		me._node_container.onmouseleave=function (e) {
				skin._node_title.ggUpdateText=function() {
					var params = [];
					params.push(player._(String(player.getVariableValue('cur_ud_title', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._node_title.ggUpdateText();
			skin._node_title.ggTextDiv.scrollTop = 0;
			me.elementMouseOver['node_container']=false;
			me._node_container.logicBlock_alpha();
		}
		me._node_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_bg=document.createElement('div');
		el.ggId="node_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._node_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._node_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._node_bg.style.transition='background-color 0s, border-radius 0s';
				if (me._node_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._node_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._node_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._node_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._node_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._node_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._node_bg.style.transition='background-color 0s, border-radius 0s';
				if (me._node_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._node_bg.style.borderRadius="10px";
				}
				else if (me._node_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._node_bg.style.borderRadius="50px";
				}
				else {
					me._node_bg.style.borderRadius="0px";
				}
			}
		}
		me._node_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_img=document.createElement('div');
		els=me._node_img__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/node_img_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_img";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_img.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_img.logicBlock_imageborderradius = function() {
			var newLogicStateImageBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateImageBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateImageBorderRadius = 1;
			}
			else {
				newLogicStateImageBorderRadius = -1;
			}
			if (me._node_img.ggCurrentLogicStateImageBorderRadius != newLogicStateImageBorderRadius) {
				me._node_img.ggCurrentLogicStateImageBorderRadius = newLogicStateImageBorderRadius;
				me._node_img.ggSubElement.style.transition='border-radius 0s';
				if (me._node_img.ggCurrentLogicStateImageBorderRadius == 0) {
					me._node_img.ggSubElement.style.borderRadius="8px";
				}
				else if (me._node_img.ggCurrentLogicStateImageBorderRadius == 1) {
					me._node_img.ggSubElement.style.borderRadius="36px";
				}
				else {
					me._node_img.ggSubElement.style.borderRadius="0px";
				}
			}
		}
		me._node_img.ggUpdatePosition=function (useTransition) {
		}
		me._node_bg.appendChild(me._node_img);
		me._node_container.appendChild(me._node_bg);
		me.__div.appendChild(me._node_container);
		me.elementMouseOver['node_container']=false;
		me._node_container.logicBlock_alpha();
		me._node_bg.logicBlock_backgroundcolor();
		me._node_bg.logicBlock_borderradius();
		me._node_img.logicBlock_imageborderradius();
			me.ggEvent_changenode=function(event) {
				me._node_container.logicBlock_alpha();
				me._node_bg.logicBlock_backgroundcolor();
				me._node_bg.logicBlock_borderradius();
				me._node_img.logicBlock_imageborderradius();
			};
			me.ggEvent_configloaded=function(event) {
				me._node_bg.logicBlock_backgroundcolor();
				me._node_bg.logicBlock_borderradius();
				me._node_img.logicBlock_imageborderradius();
			};
			me.ggEvent_varchanged_opt_dark=function(event) {
				me._node_bg.logicBlock_backgroundcolor();
			};
			me.ggEvent_varchanged_opt_icon_shape=function(event) {
				me._node_bg.logicBlock_borderradius();
				me._node_img.logicBlock_imageborderradius();
			};
	};
	function SkinCloner_translations_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._translations_entry=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._translations_entry;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._translations_entry__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="translations_entry";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,0.705882);';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._translations_entry.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._translations_entry.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._translations_entry.ggUpdateText();
		});
		el.appendChild(els);
		me._translations_entry.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._translations_entry.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('opt_dark') == true)) && 
				((me.elementMouseOver['translations_entry'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['translations_entry'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateTextColor = 2;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._translations_entry.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._translations_entry.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._translations_entry.style.transition='color 0s';
				if (me._translations_entry.ggCurrentLogicStateTextColor == 0) {
					me._translations_entry.style.color="rgba(255,255,255,1)";
				}
				else if (me._translations_entry.ggCurrentLogicStateTextColor == 1) {
					me._translations_entry.style.color="rgba(0,0,0,1)";
				}
				else if (me._translations_entry.ggCurrentLogicStateTextColor == 2) {
					me._translations_entry.style.color="rgba(255,255,255,0.705882)";
				}
				else {
					me._translations_entry.style.color="rgba(0,0,0,0.705882)";
				}
			}
		}
		me._translations_entry.onclick=function (e) {
			if (me._translations_entry.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_translations', false);
		}
		me._translations_entry.onmouseenter=function (e) {
			me.elementMouseOver['translations_entry']=true;
			me._translations_entry.logicBlock_textcolor();
		}
		me._translations_entry.onmouseleave=function (e) {
			me.elementMouseOver['translations_entry']=false;
			me._translations_entry.logicBlock_textcolor();
		}
		me._translations_entry.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._translations_entry);
		me.elementMouseOver['translations_entry']=false;
		me._translations_entry.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._translations_entry.logicBlock_textcolor();
			};
			me.ggEvent_configloaded=function(event) {
				me._translations_entry.logicBlock_textcolor();
			};
			me.ggEvent_varchanged_opt_dark=function(event) {
				me._translations_entry.logicBlock_textcolor();
			};
	};
	function SkinHotspotClass_ht_node__3d(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.ggNodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._ht_node.visible = (v>0 && me._ht_node.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.name = 'ht_node';
		el.userData.x = -3.29;
		el.userData.y = 0.8;
		el.translateZ(0.000);
		el.userData.z = 0.000;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'sticky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 0;
		el.userData.renderOrder = 0;
		el.userData.isVisible = function() {
			let vis = me._ht_node.visible
			let parentEl = me._ht_node.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node.userData.opacity = v;
			v = v * me._ht_node.userData.parentOpacity;
			if (me._ht_node.userData.setOpacityInternal) me._ht_node.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node.children.length; i++) {
				let child = me._ht_node.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node.userData.parentOpacity = v;
			v = v * me._ht_node.userData.opacity
			if (me._ht_node.userData.setOpacityInternal) me._ht_node.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node.children.length; i++) {
				let child = me._ht_node.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node = el;
		el.userData.ggId="ht_node";
		me._ht_node.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == false)) || 
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
			me._ht_node.visible=false;
			player.repaint();
			me._ht_node.userData.visible=false;
				}
				else {
			me._ht_node.visible=((!me._ht_node.material && Number(me._ht_node.userData.opacity>0)) || (me._ht_node.material && Number(me._ht_node.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node.userData.visible=true;
				}
			}
		}
		me._ht_node.userData.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._node_hs.visible = (v>0 && me._node_hs.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 70;
		el.userData.height = 70;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'node_hs';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.030);
		el.userData.z = 0.030;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 1;
		el.userData.renderOrder = 1;
		el.userData.setOpacityInternal = function(v) {
			if (me._node_hs.material) me._node_hs.material.opacity = v;
			me._node_hs.visible = (v>0 && me._node_hs.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._node_hs.visible
			let parentEl = me._node_hs.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._node_hs.userData.opacity = v;
			v = v * me._node_hs.userData.parentOpacity;
			if (me._node_hs.userData.setOpacityInternal) me._node_hs.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs.children.length; i++) {
				let child = me._node_hs.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._node_hs.userData.parentOpacity = v;
			v = v * me._node_hs.userData.opacity
			if (me._node_hs.userData.setOpacityInternal) me._node_hs.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs.children.length; i++) {
				let child = me._node_hs.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._node_hs = el;
		el.userData.ggId="node_hs";
		me._node_hs.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs.userData.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			}
		}
		me._node_hs.userData.onmouseenter=function (e) {
			me.elementMouseOver['node_hs']=true;
			me._node_hs_vr_icon_bg.logicBlock_zindex();
			me._node_hs_bg.logicBlock_zindex();
			me._node_hs_bg.logicBlock_alpha();
		}
		me._node_hs.userData.onmouseleave=function (e) {
			me.elementMouseOver['node_hs']=false;
			me._node_hs_vr_icon_bg.logicBlock_zindex();
			me._node_hs_bg.logicBlock_zindex();
			me._node_hs_bg.logicBlock_alpha();
		}
		me._node_hs.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._node_hs_anim.visible = (v>0 && me._node_hs_anim.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 70;
		el.userData.height = 70;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'node_hs_anim';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.setOpacityInternal = function(v) {
			if (me._node_hs_anim.material) me._node_hs_anim.material.opacity = v;
			me._node_hs_anim.visible = (v>0 && me._node_hs_anim.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._node_hs_anim.visible
			let parentEl = me._node_hs_anim.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._node_hs_anim.userData.opacity = v;
			v = v * me._node_hs_anim.userData.parentOpacity;
			if (me._node_hs_anim.userData.setOpacityInternal) me._node_hs_anim.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_anim.children.length; i++) {
				let child = me._node_hs_anim.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._node_hs_anim.userData.parentOpacity = v;
			v = v * me._node_hs_anim.userData.opacity
			if (me._node_hs_anim.userData.setOpacityInternal) me._node_hs_anim.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_anim.children.length; i++) {
				let child = me._node_hs_anim.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._node_hs_anim = el;
		el.userData.ggId="node_hs_anim";
		me._node_hs_anim.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs_anim.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_3d_node_hotspots') == false)) && 
				((player.is3dModel() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_hs_anim.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_hs_anim.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._node_hs_anim.ggCurrentLogicStateVisible == 0) {
			me._node_hs_anim.visible=((!me._node_hs_anim.material && Number(me._node_hs_anim.userData.opacity>0)) || (me._node_hs_anim.material && Number(me._node_hs_anim.material.opacity)>0))?true:false;
			player.repaint();
			me._node_hs_anim.userData.visible=true;
				}
				else {
			me._node_hs_anim.visible=false;
			player.repaint();
			me._node_hs_anim.userData.visible=false;
				}
			}
		}
		me._node_hs_anim.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['node_hs_anim']=true;
		}
		me._node_hs_anim.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['node_hs_anim']=false;
		}
		me._node_hs_anim.userData.ggUpdatePosition=function (useTransition) {
		}
		me._node_hs.add(me._node_hs_anim);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: new THREE.Color(1, 1, 1).convertSRGBToLinear(), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'node_hs_vr_icon_bg_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 42;
		el.userData.height = 42;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'node_hs_vr_icon_bg';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.090);
		el.userData.z = 0.090;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 3;
		el.userData.renderOrder = 3;
		el.userData.isVisible = function() {
			let vis = me._node_hs_vr_icon_bg.visible
			let parentEl = me._node_hs_vr_icon_bg.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._node_hs_vr_icon_bg.userData.opacity = v;
			v = v * me._node_hs_vr_icon_bg.userData.parentOpacity;
			if (me._node_hs_vr_icon_bg.userData.setOpacityInternal) me._node_hs_vr_icon_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_vr_icon_bg.children.length; i++) {
				let child = me._node_hs_vr_icon_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._node_hs_vr_icon_bg.userData.parentOpacity = v;
			v = v * me._node_hs_vr_icon_bg.userData.opacity
			if (me._node_hs_vr_icon_bg.userData.setOpacityInternal) me._node_hs_vr_icon_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_vr_icon_bg.children.length; i++) {
				let child = me._node_hs_vr_icon_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._node_hs_vr_icon_bg = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 35;
		el.userData.borderRadius.default.topRight = 35;
		el.userData.borderRadius.default.bottomRight = 35;
		el.userData.borderRadius.default.bottomLeft = 35;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._node_hs_vr_icon_bg;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._node_hs_vr_icon_bg);
			if (skin.rectHasRoundedCorners(me._node_hs_vr_icon_bg)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = el.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = el.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = el.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = el.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'node_hs_vr_icon_bg_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'node_hs_vr_icon_bg_geometry';
			}
			el.geometry = geometry;
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._node_hs_vr_icon_bg.material.opacity = v * me._node_hs_vr_icon_bg.userData.backgroundColorAlpha;
			if (me._node_hs_vr_icon_bg.userData.ggSubElement) {
				me._node_hs_vr_icon_bg.userData.ggSubElement.material.opacity = v
				me._node_hs_vr_icon_bg.userData.ggSubElement.visible = (v>0 && me._node_hs_vr_icon_bg.userData.visible);
			}
			me._node_hs_vr_icon_bg.visible = (v>0 && me._node_hs_vr_icon_bg.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._node_hs_vr_icon_bg.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._node_hs_vr_icon_bg.userData.backgroundColorAlpha = v;
			me._node_hs_vr_icon_bg.userData.setOpacity(me._node_hs_vr_icon_bg.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 35, 35, 35, 35);
		el.userData.ggId="node_hs_vr_icon_bg";
		me._node_hs_vr_icon_bg.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs_vr_icon_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('player_mouse_down') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node_hs_vr_icon_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node_hs_vr_icon_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				if (me._node_hs_vr_icon_bg.ggCurrentLogicStateScaling == 0) {
					me._node_hs_vr_icon_bg.userData.transitionValue_scale = {x: 0.6, y: 0.6, z: 1.0};
					for (var i = 0; i < me._node_hs_vr_icon_bg.userData.transitions.length; i++) {
						if (me._node_hs_vr_icon_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._node_hs_vr_icon_bg.userData.transitions[i].interval);
							me._node_hs_vr_icon_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._node_hs_vr_icon_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._node_hs_vr_icon_bg.scale.set(transition_scale.startScale.x + (me._node_hs_vr_icon_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._node_hs_vr_icon_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._node_hs_vr_icon_bg.position.x = (me._node_hs_vr_icon_bg.position.x - me._node_hs_vr_icon_bg.userData.curScaleOffX) + scaleOffX;
							me._node_hs_vr_icon_bg.userData.curScaleOffX = scaleOffX;
							me._node_hs_vr_icon_bg.position.y = (me._node_hs_vr_icon_bg.position.y - me._node_hs_vr_icon_bg.userData.curScaleOffY) + scaleOffY;
							me._node_hs_vr_icon_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._node_hs_vr_icon_bg.userData.transitions.splice(me._node_hs_vr_icon_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._node_hs_vr_icon_bg.userData.transitions.push(transition_scale);
					}
				}
				else {
					me._node_hs_vr_icon_bg.userData.transitionValue_scale = {x: 1, y: 1, z: 1.0};
					for (var i = 0; i < me._node_hs_vr_icon_bg.userData.transitions.length; i++) {
						if (me._node_hs_vr_icon_bg.userData.transitions[i].property == 'scale') {
							clearInterval(me._node_hs_vr_icon_bg.userData.transitions[i].interval);
							me._node_hs_vr_icon_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_scale = {};
						transition_scale.property = 'scale';
						transition_scale.startTime = Date.now();
						transition_scale.startScale = structuredClone(me._node_hs_vr_icon_bg.scale);
						transition_scale.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_scale.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._node_hs_vr_icon_bg.scale.set(transition_scale.startScale.x + (me._node_hs_vr_icon_bg.userData.transitionValue_scale.x - transition_scale.startScale.x) * tfval, transition_scale.startScale.y + (me._node_hs_vr_icon_bg.userData.transitionValue_scale.y - transition_scale.startScale.y) * tfval, 1.0);
							var scaleOffX = 0;
							var scaleOffY = 0;
							me._node_hs_vr_icon_bg.position.x = (me._node_hs_vr_icon_bg.position.x - me._node_hs_vr_icon_bg.userData.curScaleOffX) + scaleOffX;
							me._node_hs_vr_icon_bg.userData.curScaleOffX = scaleOffX;
							me._node_hs_vr_icon_bg.position.y = (me._node_hs_vr_icon_bg.position.y - me._node_hs_vr_icon_bg.userData.curScaleOffY) + scaleOffY;
							me._node_hs_vr_icon_bg.userData.curScaleOffY = scaleOffY;
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_scale.interval);
								me._node_hs_vr_icon_bg.userData.transitions.splice(me._node_hs_vr_icon_bg.userData.transitions.indexOf(transition_scale), 1);
							}
						}, 20);
						me._node_hs_vr_icon_bg.userData.transitions.push(transition_scale);
					}
				}
			}
		}
		me._node_hs_vr_icon_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_hs_vr_icon_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_hs_vr_icon_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._node_hs_vr_icon_bg.ggCurrentLogicStateVisible == 0) {
			me._node_hs_vr_icon_bg.visible=((!me._node_hs_vr_icon_bg.material && Number(me._node_hs_vr_icon_bg.userData.opacity>0)) || (me._node_hs_vr_icon_bg.material && Number(me._node_hs_vr_icon_bg.material.opacity)>0))?true:false;
			player.repaint();
			me._node_hs_vr_icon_bg.userData.visible=true;
				}
				else {
			me._node_hs_vr_icon_bg.visible=false;
			player.repaint();
			me._node_hs_vr_icon_bg.userData.visible=false;
				}
			}
		}
		me._node_hs_vr_icon_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('player_mouse_down') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_hs_vr_icon_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_hs_vr_icon_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._node_hs_vr_icon_bg.ggCurrentLogicStateAlpha == 0) {
					me._node_hs_vr_icon_bg.userData.transitionValue_alpha = 0.2;
					for (var i = 0; i < me._node_hs_vr_icon_bg.userData.transitions.length; i++) {
						if (me._node_hs_vr_icon_bg.userData.transitions[i].property == 'alpha') {
							clearInterval(me._node_hs_vr_icon_bg.userData.transitions[i].interval);
							me._node_hs_vr_icon_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._node_hs_vr_icon_bg.material ? me._node_hs_vr_icon_bg.material.opacity : me._node_hs_vr_icon_bg.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._node_hs_vr_icon_bg.userData.setOpacity(transition_alpha.startAlpha + (me._node_hs_vr_icon_bg.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._node_hs_vr_icon_bg.userData.transitions.splice(me._node_hs_vr_icon_bg.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._node_hs_vr_icon_bg.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._node_hs_vr_icon_bg.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._node_hs_vr_icon_bg.userData.transitions.length; i++) {
						if (me._node_hs_vr_icon_bg.userData.transitions[i].property == 'alpha') {
							clearInterval(me._node_hs_vr_icon_bg.userData.transitions[i].interval);
							me._node_hs_vr_icon_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._node_hs_vr_icon_bg.material ? me._node_hs_vr_icon_bg.material.opacity : me._node_hs_vr_icon_bg.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._node_hs_vr_icon_bg.userData.setOpacity(transition_alpha.startAlpha + (me._node_hs_vr_icon_bg.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._node_hs_vr_icon_bg.userData.transitions.splice(me._node_hs_vr_icon_bg.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._node_hs_vr_icon_bg.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._node_hs_vr_icon_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._node_hs_vr_icon_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._node_hs_vr_icon_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				if (me._node_hs_vr_icon_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._node_hs_vr_icon_bg.userData.setBackgroundColor(new THREE.Color('#4d4d4d'));
					me._node_hs_vr_icon_bg.userData.setBackgroundColorAlpha(1);
				}
				else {
					me._node_hs_vr_icon_bg.userData.setBackgroundColor(new THREE.Color('#ffffff'));
					me._node_hs_vr_icon_bg.userData.setBackgroundColorAlpha(1);
				}
			}
		}
		me._node_hs_vr_icon_bg.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['node_hs'] == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._node_hs_vr_icon_bg.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._node_hs_vr_icon_bg.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				if (me._node_hs_vr_icon_bg.ggCurrentLogicStateZIndex == 0) {
			me._node_hs_vr_icon_bg.traverse((obj)=>{
				let level = skin.getDepthFrom(me._node_hs_vr_icon_bg, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (1 > 0) {
					if (obj == me._node_hs_vr_icon_bg) {
						obj.renderOrder = 10000 + 1000*1
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._node_hs_vr_icon_bg.userData.renderOrder + level;
				}
				if (obj.material) {
					if (player.get3dModelType() != 2) {
						obj.material.depthTest = false;
						obj.material.depthWrite = false;
					} else {
						obj.material.transparent = true;
					}
				}
			});
			player.repaint();
				}
				else {
			me._node_hs_vr_icon_bg.traverse((obj)=>{
				let level = skin.getDepthFrom(me._node_hs_vr_icon_bg, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (-10000 > 0) {
					if (obj == me._node_hs_vr_icon_bg) {
						obj.renderOrder = 10000 + 1000*-10000
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._node_hs_vr_icon_bg.userData.renderOrder + level;
				}
				if (obj.material) {
					if (player.get3dModelType() != 2) {
						obj.material.depthTest = true;
						obj.material.depthWrite = true;
					} else {
						obj.material.transparent = obj.userData.hasOwnProperty('transparentIn3d') ? obj.userData.transparentIn3d : false;
					}
				}
			});
			player.repaint();
				}
			}
		}
		me._node_hs_vr_icon_bg.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 42;
		el.userData.height = 42;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'node_hs_vr_icon';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.120);
		el.userData.z = 0.120;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 4;
		el.userData.renderOrder = 4;
		el.userData.isVisible = function() {
			let vis = me._node_hs_vr_icon.visible
			let parentEl = me._node_hs_vr_icon.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._node_hs_vr_icon.userData.opacity = v;
			v = v * me._node_hs_vr_icon.userData.parentOpacity;
			if (me._node_hs_vr_icon.userData.setOpacityInternal) me._node_hs_vr_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_vr_icon.children.length; i++) {
				let child = me._node_hs_vr_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._node_hs_vr_icon.userData.parentOpacity = v;
			v = v * me._node_hs_vr_icon.userData.opacity
			if (me._node_hs_vr_icon.userData.setOpacityInternal) me._node_hs_vr_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_vr_icon.children.length; i++) {
				let child = me._node_hs_vr_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._node_hs_vr_icon = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._node_hs_vr_icon.userData.materialNormal) me._node_hs_vr_icon.userData.materialNormal.opacity = v;
			if (me._node_hs_vr_icon.userData.materialOver) me._node_hs_vr_icon.userData.materialOver.opacity = v;
			if (me._node_hs_vr_icon.userData.materialActive) me._node_hs_vr_icon.userData.materialActive.opacity = v;
			me._node_hs_vr_icon.visible = (v>0 && me._node_hs_vr_icon.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAR0klEQVR4nO1dfXBc1XX/nbtr7S4YExjiEc6UMqCRhNPakik4OGRqSikj+b23kuCBTDCQxnUIhQITQhMHWxUf4bMhNDjlwzR8OGC6YGvfPtmlDMWegglDbBmHgKQYCmkBjdNAY2yvVtp3T//YJ0bae9++t5Jsh4x/M57x3HvPxzt7P8859wo4giM4giM4gsmCDrcC47FixYoZH3zwwakAGonoZAHMYuZZEGIWAEDKvUS0VwJ7mfldAP1z5sx5+6GHHho9nHqPx2E16JIlS46LEy1mIc4F8zkA6gHEq2RTBDAIohdJyheKzFt6e3s/nn5to+GQG9S27ZmFQuECSHk5iP4cgJhmERLMWyHEY4lE4tlMJrNvmvlXxCEzqGVZDZDyRhBdDODoQyR2P5ifjk'+
	'l558ZNmwYPhcCDbtB0Oj2XpbwJwMWY/t4YFRLA0yTErdls9s2DKeigGdS27WML+fytIPrbScjZB6LdYP4IzPtAtB8AwHw0iGaC6Hgw1wGYWSVfBvOaRCp1UyaT+V2VtJFwMAxKlmVdDOZ7AdRGaJ8H88tEtIWJtsXj8f4NGzYMAeAwOR0dHbXFYrGRmBcx82IQfRlAKoLMIWK+Luu6/xpBTlWYVoPatj1zeHj4QQIuCWk6QkDOY17ned7mzZs3F6ZDfktLSyIWi7XEiC5lwARQU5GA6KeJROLK6Vy4ps2g6XT6T1nKDICGCs32gOiHiULhwcxzz300XbJ1sM8///hCIvENMF8HYHaFpgMkhJ3NZn8xHXKnxaBpw2hlomcQMNwY+IiIuhKJxCOZTCY/HTKjwrbtVKFQ+DozdxNwfECzAwxcmMvlNk9V3pQNaprmMgJ+'+
	'AiCmqWYAD8fi8ZUbN2787VRlTQWGYZwghPg+mJdD/91FEH3NcZx1U5EzJYOapnkNAf+krWT+UACX9LjulqnImG60GcZiCTwJohO1DYiucRzn/sny1/WqSPB75kMBSj03Wiz+lbtp00Hd800G/YOD78794hefYOZ5AOo0TVobGhvfHhgY2DUZ/pMyaNowWkH0NDQbdQJ+nEgml2Wz2UN65KsG/f39++fNm/eUNzr6eRCdoWli1Tc0/HxwcHB3tbyrHvL+av4qdAsQ0WrHcW7F1PZ2ZBhGgxCiCVLWEdFs6W/gBbCPmfdAiN1Syp2u6w5MVZZlWTeB+WZN3QES4kvVrv5VGdSyrGPA/Bp0W6OSMW+pht8Yurq6xI4dO84k5nYQdUA/FHXYDeYNFIttaGpqeq27u1tORn7aNFcz0K2p6k8kk2dUs0+txqBkmuY63aadgB'+
	'9nc7mrUWVvsW07NZLPX8tEVwP4QjW0GrxPzPfXpFL3TWJrRpZhrAHRNzV165xc7jJE/LbIc6hlWZ2k+xWJnkskk8vefPPNyL2jq6tLzJo161KvWNzo98hZUWkrYBaI/tIrFi9raGz8TWdn5xtbt26N/APPmz//3zzPWwh1dMxrrK9/a2Bw8JdR+ETqobZtH1sYHu6Hejb/YLRYbNq8efNvovABPp2DHwWwICrNJLGDhLiimjmwvb19tjc6ulOzpRpKJJONURwqkdxphXz+VqjGZMH81aqMaRgmS7kN0Yx5AMxvA3iZgGcJeBbAy37ZgQj0C1jKbaZpGlH127hx4x6h90PUjgwPR1ofQnuo7898Q2lL9LDjOCsiaVqaf79FwF0VZDIBPwPQS57X27Np0+sInreorbV1PsdiSxgwACysxBdE33Yc5wcV+E2AaZoPE7Bc'+
	'0U+IPwnzp4bGb3zn8ARlGfgoHot9N4pyAChtmvczcFWQCAaeisViq3t6et6OyJN7Nm3aCWAngNva2tpO9Tzv5gAvF4H5nrRpnhJ14WTm74Koo+zsT1LK7wH4aiXaij3UsqwGML+J8qmhiuOZaZo3EHB3gOYvSuB613Vfj8IrDIZhzBfAvSA6R9uA6AbHcf4xCq+AY7WMed5plcIpledQKW/UtNmTSCQeiaJU2jBMf5irILo7kUqdN13GBADXdV9PpFLnEXCPtgHz3VHn1GQyuRZA+fogvFjsxkp0gT3Utu2ZheHhIZQH1IhWOo5ze5hC/mq+DWqYYoSB5blc7okwHlNB2jAuY6KHoTqZ95EQi6Ks/qZpriTgtrLi/YlksjZosx/YQwuFwgVQo5MjiULhwTBFurq6hL81UmI+h8KYAJB13ceJ+W80VTOllD/p6uoK3e'+
	'EkR0YeADBSVnz0SD7fEUQTzFTKy8uLCMhF8bT39fVdAs3WiIB7DoUxx5B13cfBrMyZBJzet3370jB6/1vd8nImUmwzBq1BlyxZchyIFpeXe8yhzlfbtlNg/r5SwfxiTTL5nTD66UYilfp7ML+oVBB937bt0IAe6b95cVtb2+d07bXbpjjRYlbn17zneaEhgpF8/loQ/VFZMUOI6zKZjBdGP4auri7R19d3FqQ8h4n+GACI+T0I8WJzc/MrUR0hmUzGMwzjelHaYo3HSSP5/LUA7qj4PZ63aUY8nsdE75ooFouLAfSUt9f2UBbiXLWQXw6LTnZ1dQnf0TGRFHjKcZyoDltKG8bFfX19b4H5JRDdQsByApaD6BYwv9TX1/dW2jAuRsSjs7+TeErRi+jqsLl08+bNBQK2lZcLQLURgubQUuLWBBDRlkqCAWDnzp1nQPUa'+
	'cSwWWx1GC5Tcg5ZpPsNE68FcH9iQuZ6J1lum+YxlWcdE4Q2i1VA39V94ffv2PwsjZeYtGn7ava5i0BUrVsxAKQtuIlMi5VdS2niebvV7NcoJyLKsYyDl8wACV1ANOiDl81GM6jjObgCvlpdzydtVEQHf3uDbagIUg/r5mcrcGo/H+0PkEjTKkWaV1NIyPwqihRHallHSQjA/iijDn7lXKQIuCKMlIt23x4eGhk4pL9QN+UZN2T4/PSYQhmE0QONpJ89TPqIcacO4CME9cxeY14N5PYCgebjD51EZQuh0qfN1D4TjOB8CUDbyzKzYSg2yEZ2scCTajRCnghCiSVN8wPcaBaKrq0uwEGpMh/lDyfwVJ5eb77juUsd1lzq53HzJ/BUAyo/LQtwctsA4jrMTGtdfgO4T2Ps2mACdrRQFhM57zhyeNiOlGgdi/hAhP0RfX9'+
	'9ZugVIAhe5rvtSebnrui9JZlsjq76vr++sEC0Zmh9Dq7vaRpcVrdhKMSgz6wwaGqQiIjV/iKjiNAEAkFK3Wu7SGXMMfp06/PW8JoJZ0UmrezkZkWID0thKHSJjFwQmStwfJlBqzu2k6w1lGNu0Tyzk8AQJTRstL0Up9UfW6a6Q6ebQKD30CKYG1aBS7lXKmENz4oX+FwxNuCXm99RCmhtGp2uj5aUoxYpOOt0VMv0IVGylW+VVgxKFDglm3qMpDM9gFkJ1XADzDMM4O4jEr5sXkddEECk6aXUvJ2NWXZEaWykGlRqrgygor3IcJ6HmAZXCsRU3zc3Nza+ASAkpCKKMzqiGYZwtiDIaWYPNzc2vhGhJ0I0ane5qm+M0pYqtlBMRM79LROWFdb4ygVsgKeVOUU4HHNXW2jrfD6hp0d3dLdOGsZqJ1pdV1Qqi/7RMc9en'+
	'C1BpmKs9EwBJuTrMA2VZVhOYj9LpXokOpZOcsrXyb/NNgG5R0h2zZnZ0dFQcvn7ilvJLcyy2pBIdAPiXBzYEVM8DUSeIOhFgTAAbfB6VIaVOl1/5ugfCsqwToZtDNUdSxaBz5sx5G6XrfhNQLBZ1R9LxYDArRvHj5mFgEF0BZsV5EU7Jr4LoCkSJuRMpBqXSD1mRVnfEBFCsra19p7xQMah/EVWZ04h5UUVlAVAsputlC9va2k4No3Uc5xMIcR6Ce6oOGyDEeY7jfBLW0LKsOpQSIiaANJ1A00b37QO6S7v6fSiRsloy8+IwwU1NTa8BeL+cm+d5uvxLBY7jfOLkchcSc6duoRqn3yAxdzq53IVRjAkAfg5oefbL/8w//fSfh5GSJhykDasgwKAk5Qsarl9uaWlJVBLc3d0tiVlJgCBgqWEY8yvRjlc167pPNzc3nw'+
	'ais8G8ioG1DKwF8yoQnd3c3Hxa1nWfRsTUmrbW1iYASlCOpFwTtpC1tLQkGFB6qARUGyEgplRk3hIjkpho8FQsFmuBJo4yHjWp1H2F4eGrAIyPK5EA7rVt+7yocSX/Q1/2/02A4zhRWAAAbNuOFfL5H2iqfl2TSt0XRl8Ti7Wymq0t4/H4Fl17bQ/t7e39GMxby8tjRJeGKZDJZPIgWqlUEJ0zMjxcMSB2MFDI5+/UhiuYV0ZJzGX9N2/p6en5P1374LO8EI8pzAHTPv/80E1+c3PzkwB2aOhvME1zWRj9dCFtGJeB6FsaPbY3n366ErQrh/+tyi6FmBXbjCHQoIlE4lkA5V6mmkIi8Y0wRbq7uyUJcQU0Z2QC1qYN47IwHlPFuFSccuwTQnwtShh6uKbmSqipPPtrUqnAnUHl7DvDeAREf11WvCeRTJ4cZbikDcNk'+
	'oqxODgH31CST36kmVh8F/px5p65nopQ6aeVyudA4l23bqcLw8HsAPl9W9YiTy5Xnjn6Kyu47Ie5C6fL+eMwuFApfD1MIALKum2NAm63GwA2FfP75Klb/ULS1tjYV8vnnA4wJEH07ijEBYHh4eDlUY8qY5+mzCcdEhDG2TPNJlG05GPgoHo/XR7y/GZZwCwBP+ddyqr5oBfib9tI+MzhfiWiN4zjXIMJWyzCME4hooPyyLQNP5nK5igm3oRnMJMStLGUnxhmfgOM9z7sdQJSUcM7mcldblvUOmO+G/kdcCuZOyzRfBXMvhOj1A2qBKeGWZTX5Z3MDzGcG8AVKR+IbnFzu3gr8JjInul1zc1kKIcpTG1XaKAIsw/gR1BQbFsx/Uc3lWNM0DSqlxER52uIAgCEwD30atmCu9f2ZtQAUr5EG+xhYGnWYA4BlWeeA+T/Kyw'+
	'n4UTaX+7sw+kghkEQqdRPU+BBJ4MmWlpbyeSYQuVzOJSEWQbOl0uAoAKeAaBFKMfsO//+nIIIxGdhOQiyqxpjt7e2zIeVPNVVDNcnkqig8Ihk0k8n8DkTXKxVEJ86YMeMJ27YjXyDLZrO/aF6w4AwQLQPw31HpqsCvwXzpggULzqzmjpJt2zHP8x7XXfsm5uuiPvoS2RADAwO/bGhsrIPqk6yTxeIJA4ODkV9D2Lp1Kw8MDOyaN3/+A3J0dB+ITsPUb9O9T8y3J1KpZRt7enZUc4sOANXV1a0Bc6embp3jurdGZVRN1JMTicSVABRnLANXWZZ1UxW8AJSOqVnXvaN5wYKTSIgvgfkuaJzUFbCbgDsF88LmBQtOyrruHZN5giNtmqvAfKWmqj+RTH4TVdxhnez17p9BM48R0JXN5W6pRgGdTofyenfaNFcF3EQ+4Em5'+
	'sLe3942qGE5GC//RFge6KYP5nxOp1DXTfQKabti2HSsUCvcH9Myif6Kq+lGXSb3oMDA4+Kv6hob/IqBdqSQ6w/O8hXPnzv33/v7+0IyTw4H29vbZo6OjzwTMmQDR5blcrprIwaeY9Jsjg4ODuxoaG38LoFVTXceed+lp9fXb+wcH352sjIOBNsNYLEuJvfqMu9ItwbWT5T9dzwz9C/SnLgbRWinlStd1/3eqsqYC/zh5u+ZS7BgO/zNDYzBNs4WAZxCw4T7cD2H5jo5/+Ew8hDWGqE+1MXBfcmTkgUPxVNtwTc2VBFwH1Ws0Hv2elHa1q3kQpv0xwUKh8ACYK3pkULru5xLzuhHP2zSdjwnWxGKtftjCwGf5McHxPNOGcRET/RARn7skYBszb2GibUTU7+e0hz53aVnWiczcSMyLqHRZbRGiPHfJ/CEB1//eP3c5Hr'+
	'ZtHzsyPHwLA1dPQk7pQVYpP2aifWPJrgzMJOaZEOK4ST7IKglYU5NMrvosPcg6Ael0eq6U8nsEdOIwPhnMwHohxG2f2SeDy9He2lrvX97vxKF81BpYH/O8u/5gHrUuh23bM0fy+Q7/ivRiHIxn14EtxPxYTSq14Q/22XUd2traPlcsFhcL4Fw/GaEBk/vDAAP++yUvxOPxwCSEQ4HDatByrFixYsbQ0NApzNzoX6qaRcyzxm5bELDXT8Pe6ycG99fW1r7z+/SnK47gCI7gCI5g8vh/pcmBZHTCjHwAAAAASUVORK5CYII=');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'node_hs_vr_icon_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._node_hs_vr_icon;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5 );
		geometry.name = 'node_hs_vr_icon_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="node_hs_vr_icon";
		me._node_hs_vr_icon.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs_vr_icon.userData.ggUpdatePosition=function (useTransition) {
		}
		me._node_hs_vr_icon_bg.add(me._node_hs_vr_icon);
		me._node_hs.add(me._node_hs_vr_icon_bg);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: new THREE.Color(1, 1, 1).convertSRGBToLinear(), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'node_hs_bg_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 99;
		el.userData.height = 99;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'node_hs_bg';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.120);
		el.userData.z = 0.120;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 4;
		el.userData.renderOrder = 4;
		el.userData.isVisible = function() {
			let vis = me._node_hs_bg.visible
			let parentEl = me._node_hs_bg.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._node_hs_bg.userData.opacity = v;
			v = v * me._node_hs_bg.userData.parentOpacity;
			if (me._node_hs_bg.userData.setOpacityInternal) me._node_hs_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_bg.children.length; i++) {
				let child = me._node_hs_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._node_hs_bg.userData.parentOpacity = v;
			v = v * me._node_hs_bg.userData.opacity
			if (me._node_hs_bg.userData.setOpacityInternal) me._node_hs_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_bg.children.length; i++) {
				let child = me._node_hs_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.visible = false;
		el.userData.opacity = 0.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._node_hs_bg = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._node_hs_bg;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._node_hs_bg);
			if (skin.rectHasRoundedCorners(me._node_hs_bg)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = el.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = el.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = el.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = el.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'node_hs_bg_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'node_hs_bg_geometry';
			}
			el.geometry = geometry;
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._node_hs_bg.material.opacity = v * me._node_hs_bg.userData.backgroundColorAlpha;
			if (me._node_hs_bg.userData.ggSubElement) {
				me._node_hs_bg.userData.ggSubElement.material.opacity = v
				me._node_hs_bg.userData.ggSubElement.visible = (v>0 && me._node_hs_bg.userData.visible);
			}
			me._node_hs_bg.visible = (v>0 && me._node_hs_bg.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._node_hs_bg.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._node_hs_bg.userData.backgroundColorAlpha = v;
			me._node_hs_bg.userData.setOpacity(me._node_hs_bg.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.ggId="node_hs_bg";
		me._node_hs_bg.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_3d_node_hotspots') == false)) || 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_hs_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_hs_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._node_hs_bg.ggCurrentLogicStateVisible == 0) {
			me._node_hs_bg.visible=((!me._node_hs_bg.material && Number(me._node_hs_bg.userData.opacity>0)) || (me._node_hs_bg.material && Number(me._node_hs_bg.material.opacity)>0))?true:false;
			player.repaint();
			me._node_hs_bg.userData.visible=true;
				}
				else {
			me._node_hs_bg.visible=false;
			player.repaint();
			me._node_hs_bg.userData.visible=false;
				}
			}
		}
		me._node_hs_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['node_hs'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.hotspot.closestToCenter == true)) && 
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getVariableValue('player_mouse_down') == true)) && 
				((player.is3dModel() == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_hs_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_hs_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._node_hs_bg.ggCurrentLogicStateAlpha == 0) {
					me._node_hs_bg.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._node_hs_bg.userData.transitions.length; i++) {
						if (me._node_hs_bg.userData.transitions[i].property == 'alpha') {
							clearInterval(me._node_hs_bg.userData.transitions[i].interval);
							me._node_hs_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._node_hs_bg.material ? me._node_hs_bg.material.opacity : me._node_hs_bg.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 500;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._node_hs_bg.userData.setOpacity(transition_alpha.startAlpha + (me._node_hs_bg.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._node_hs_bg.userData.transitions.splice(me._node_hs_bg.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._node_hs_bg.userData.transitions.push(transition_alpha);
					}
				}
				else if (me._node_hs_bg.ggCurrentLogicStateAlpha == 1) {
					me._node_hs_bg.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._node_hs_bg.userData.transitions.length; i++) {
						if (me._node_hs_bg.userData.transitions[i].property == 'alpha') {
							clearInterval(me._node_hs_bg.userData.transitions[i].interval);
							me._node_hs_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._node_hs_bg.material ? me._node_hs_bg.material.opacity : me._node_hs_bg.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 500;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._node_hs_bg.userData.setOpacity(transition_alpha.startAlpha + (me._node_hs_bg.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._node_hs_bg.userData.transitions.splice(me._node_hs_bg.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._node_hs_bg.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._node_hs_bg.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._node_hs_bg.userData.transitions.length; i++) {
						if (me._node_hs_bg.userData.transitions[i].property == 'alpha') {
							clearInterval(me._node_hs_bg.userData.transitions[i].interval);
							me._node_hs_bg.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._node_hs_bg.material ? me._node_hs_bg.material.opacity : me._node_hs_bg.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 500;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._node_hs_bg.userData.setOpacity(transition_alpha.startAlpha + (me._node_hs_bg.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._node_hs_bg.userData.transitions.splice(me._node_hs_bg.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._node_hs_bg.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._node_hs_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._node_hs_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._node_hs_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				if (me._node_hs_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._node_hs_bg.userData.setBackgroundColor(new THREE.Color('#4d4d4d'));
					me._node_hs_bg.userData.setBackgroundColorAlpha(1);
				}
				else {
					me._node_hs_bg.userData.setBackgroundColor(new THREE.Color('#ffffff'));
					me._node_hs_bg.userData.setBackgroundColorAlpha(1);
				}
			}
		}
		me._node_hs_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._node_hs_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._node_hs_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				if (me._node_hs_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._node_hs_bg.userData.createGeometry(me._node_hs_bg.userData.borderWidth.top, me._node_hs_bg.userData.borderWidth.right, me._node_hs_bg.userData.borderWidth.bottom, me._node_hs_bg.userData.borderWidth.left, 10, 10, 10, 10);
				}
				else if (me._node_hs_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._node_hs_bg.userData.createGeometry(me._node_hs_bg.userData.borderWidth.top, me._node_hs_bg.userData.borderWidth.right, me._node_hs_bg.userData.borderWidth.bottom, me._node_hs_bg.userData.borderWidth.left, 50, 50, 50, 50);
				}
				else {
					me._node_hs_bg.userData.createGeometry(me._node_hs_bg.userData.borderWidth.top, me._node_hs_bg.userData.borderWidth.right, me._node_hs_bg.userData.borderWidth.bottom, me._node_hs_bg.userData.borderWidth.left, 0, 0, 0, 0);
				}
			}
		}
		me._node_hs_bg.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['node_hs'] == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._node_hs_bg.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._node_hs_bg.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				if (me._node_hs_bg.ggCurrentLogicStateZIndex == 0) {
			me._node_hs_bg.traverse((obj)=>{
				let level = skin.getDepthFrom(me._node_hs_bg, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (1 > 0) {
					if (obj == me._node_hs_bg) {
						obj.renderOrder = 10000 + 1000*1
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._node_hs_bg.userData.renderOrder + level;
				}
				if (obj.material) {
					if (player.get3dModelType() != 2) {
						obj.material.depthTest = false;
						obj.material.depthWrite = false;
					} else {
						obj.material.transparent = true;
					}
				}
			});
			player.repaint();
				}
				else {
			me._node_hs_bg.traverse((obj)=>{
				let level = skin.getDepthFrom(me._node_hs_bg, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (-10000 > 0) {
					if (obj == me._node_hs_bg) {
						obj.renderOrder = 10000 + 1000*-10000
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._node_hs_bg.userData.renderOrder + level;
				}
				if (obj.material) {
					if (player.get3dModelType() != 2) {
						obj.material.depthTest = true;
						obj.material.depthWrite = true;
					} else {
						obj.material.transparent = obj.userData.hasOwnProperty('transparentIn3d') ? obj.userData.transparentIn3d : false;
					}
				}
			});
			player.repaint();
				}
			}
		}
		me._node_hs_bg.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._node_hs_bg.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['node_hs_bg']=true;
		}
		me._node_hs_bg.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['node_hs_bg']=false;
		}
		me._node_hs_bg.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'node_hs_tooltip_material';
			el.material = material;
		el.translateX(0.005);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 100;
		el.userData.height = 40;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'node_hs_tooltip';
		el.userData.x = 0.005;
		el.userData.y = 0;
		el.translateZ(0.150);
		el.userData.z = 0.150;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 1;
		el.renderOrder = 5;
		el.userData.renderOrder = 5;
		el.userData.isVisible = function() {
			let vis = me._node_hs_tooltip.visible
			let parentEl = me._node_hs_tooltip.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._node_hs_tooltip.userData.opacity = v;
			v = v * me._node_hs_tooltip.userData.parentOpacity;
			if (me._node_hs_tooltip.userData.setOpacityInternal) me._node_hs_tooltip.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_tooltip.children.length; i++) {
				let child = me._node_hs_tooltip.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._node_hs_tooltip.userData.parentOpacity = v;
			v = v * me._node_hs_tooltip.userData.opacity
			if (me._node_hs_tooltip.userData.setOpacityInternal) me._node_hs_tooltip.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_tooltip.children.length; i++) {
				let child = me._node_hs_tooltip.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._node_hs_tooltip = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._node_hs_tooltip;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._node_hs_tooltip);
			if (skin.rectHasRoundedCorners(me._node_hs_tooltip)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = el.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = el.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = el.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = el.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'node_hs_tooltip_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'node_hs_tooltip_geometry';
			}
			el.geometry = geometry;
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._node_hs_tooltip.material.opacity = v;
			if (me._node_hs_tooltip.userData.hasScrollbar) {
				me._node_hs_tooltip.userData.scrollbar.material.opacity = v;
				me._node_hs_tooltip.userData.scrollbarBg.material.opacity = v;
			}
			if (me._node_hs_tooltip.userData.ggSubElement) {
				me._node_hs_tooltip.userData.ggSubElement.material.opacity = v
				me._node_hs_tooltip.userData.ggSubElement.visible = (v>0 && me._node_hs_tooltip.userData.visible);
			}
			me._node_hs_tooltip.visible = (v>0 && me._node_hs_tooltip.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._node_hs_tooltip.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._node_hs_tooltip.userData.backgroundColorAlpha = v;
			me._node_hs_tooltip.userData.setOpacity(me._node_hs_tooltip.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.backgroundColor = new THREE.Color(1, 1, 1).convertSRGBToLinear();
		el.userData.textColor = '#4d4d4d';
		el.userData.textColorAlpha = 1;
		var canvas = document.createElement('canvas');
		canvas.width = 200;
		canvas.height = 80;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._node_hs_tooltip;
			var canv = me._node_hs_tooltip.userData.textCanvas;
			var ctx = me._node_hs_tooltip.userData.textCanvasContext;
			var tmpCanv = me._node_hs_tooltip.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			ctx.fillStyle = 'rgba(' + me._node_hs_tooltip.userData.backgroundColor.r * 255 + ', ' + me._node_hs_tooltip.userData.backgroundColor.g * 255 + ', ' + me._node_hs_tooltip.userData.backgroundColor.b * 255 + ', ' + me._node_hs_tooltip.userData.backgroundColorAlpha + ')';
			ctx.fillRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._node_hs_tooltip.userData.scrollPosPercent ? tmpCanv.height * me._node_hs_tooltip.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._node_hs_tooltip.userData.boxWidthCanv / 100.0;
		height = me._node_hs_tooltip.userData.boxHeightCanv / 100.0;
		me._node_hs_tooltip.userData.width = me._node_hs_tooltip.userData.boxWidthCanv;
		me._node_hs_tooltip.userData.height = me._node_hs_tooltip.userData.boxHeightCanv;
		me._node_hs_tooltip.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._node_hs_tooltip, 0, 0);
		me._node_hs_tooltip.position.x = newPos.x;
		me._node_hs_tooltip.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'node_hs_tooltip_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._node_hs_tooltip.material.map) {
				me._node_hs_tooltip.material.map.dispose();
			}
			me._node_hs_tooltip.material.map = textTexture;
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._node_hs_tooltip, 'scrollbar');
			skin.paintTextDivToCanvas(me._node_hs_tooltip, 'box-sizing: border-box; width: auto; height: auto; font-size: 16px; font-weight: 400; color: rgba(77,77,77,1); text-align: left; white-space: pre; padding: 38px 15px 38px 105px; overflow: hidden;' + '; color: ' + me._node_hs_tooltip.userData.textColor + ' !important;', false, true, false);
			me._node_hs_tooltip.userData.hasScrollbar = false;
		}
		el.userData.ggUpdateText=function(force) {
			var params = [];
			params.push(player._(String(player._(me.hotspot.title))));
			var hs = player._("%1", params);
			if (hs!=this.ggText || force) {
				this.ggText=hs;
				this.ggRenderText();
			}
		}
		el.userData.setBackgroundColor = function(v) {
			me._node_hs_tooltip.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._node_hs_tooltip.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._node_hs_tooltip.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._node_hs_tooltip.userData.textColorAlpha = v;
		}
		el.userData.ggId="node_hs_tooltip";
		me._node_hs_tooltip.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_hs_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_hs_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._node_hs_tooltip.ggCurrentLogicStateVisible == 0) {
			me._node_hs_tooltip.visible=false;
			player.repaint();
			me._node_hs_tooltip.userData.visible=false;
				}
				else {
			me._node_hs_tooltip.visible=((!me._node_hs_tooltip.material && Number(me._node_hs_tooltip.userData.opacity>0)) || (me._node_hs_tooltip.material && Number(me._node_hs_tooltip.material.opacity)>0))?true:false;
			player.repaint();
			me._node_hs_tooltip.userData.visible=true;
				}
			}
		}
		me._node_hs_tooltip.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._node_hs_tooltip.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._node_hs_tooltip.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				if (me._node_hs_tooltip.ggCurrentLogicStateBackgroundColor == 0) {
					me._node_hs_tooltip.userData.setBackgroundColor(new THREE.Color('#4d4d4d'));
					me._node_hs_tooltip.userData.setBackgroundColorAlpha(1);
					me._node_hs_tooltip.userData.ggUpdateText(true);
				}
				else {
					me._node_hs_tooltip.userData.setBackgroundColor(new THREE.Color('#ffffff'));
					me._node_hs_tooltip.userData.setBackgroundColorAlpha(1);
					me._node_hs_tooltip.userData.ggUpdateText(true);
				}
			}
		}
		me._node_hs_tooltip.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._node_hs_tooltip.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._node_hs_tooltip.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				if (me._node_hs_tooltip.ggCurrentLogicStateBorderRadius == 0) {
					me._node_hs_tooltip.userData.createGeometry(me._node_hs_tooltip.userData.borderWidth.top, me._node_hs_tooltip.userData.borderWidth.right, me._node_hs_tooltip.userData.borderWidth.bottom, me._node_hs_tooltip.userData.borderWidth.left, 10, 10, 10, 10);
				}
				else if (me._node_hs_tooltip.ggCurrentLogicStateBorderRadius == 1) {
					me._node_hs_tooltip.userData.createGeometry(me._node_hs_tooltip.userData.borderWidth.top, me._node_hs_tooltip.userData.borderWidth.right, me._node_hs_tooltip.userData.borderWidth.bottom, me._node_hs_tooltip.userData.borderWidth.left, 50, 50, 50, 50);
				}
				else {
					me._node_hs_tooltip.userData.createGeometry(me._node_hs_tooltip.userData.borderWidth.top, me._node_hs_tooltip.userData.borderWidth.right, me._node_hs_tooltip.userData.borderWidth.bottom, me._node_hs_tooltip.userData.borderWidth.left, 0, 0, 0, 0);
				}
			}
		}
		me._node_hs_tooltip.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._node_hs_tooltip.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._node_hs_tooltip.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				if (me._node_hs_tooltip.ggCurrentLogicStateTextColor == 0) {
					me._node_hs_tooltip.userData.setTextColor(new THREE.Color('#ffffff'));
					me._node_hs_tooltip.userData.setTextColorAlpha(1);
					me._node_hs_tooltip.userData.ggUpdateText(true);
				}
				else {
					me._node_hs_tooltip.userData.setTextColor(new THREE.Color('#4d4d4d'));
					me._node_hs_tooltip.userData.setTextColorAlpha(1);
					me._node_hs_tooltip.userData.ggUpdateText(true);
				}
			}
		}
		me._node_hs_tooltip.userData.ggUpdatePosition=function (useTransition) {
				me._node_hs_tooltip.userData.ggUpdateText(true);
		}
		me._node_hs_bg.add(me._node_hs_tooltip);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 85;
		el.userData.height = 85;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'node_hs_image';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.180);
		el.userData.z = 0.180;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 6;
		el.userData.renderOrder = 6;
		el.userData.setOpacityInternal = function(v) {
			if (me._node_hs_image.material) me._node_hs_image.material.opacity = v;
			me._node_hs_image.visible = (v>0 && me._node_hs_image.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._node_hs_image.visible
			let parentEl = me._node_hs_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._node_hs_image.userData.opacity = v;
			v = v * me._node_hs_image.userData.parentOpacity;
			if (me._node_hs_image.userData.setOpacityInternal) me._node_hs_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_image.children.length; i++) {
				let child = me._node_hs_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._node_hs_image.userData.parentOpacity = v;
			v = v * me._node_hs_image.userData.opacity
			if (me._node_hs_image.userData.setOpacityInternal) me._node_hs_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._node_hs_image.children.length; i++) {
				let child = me._node_hs_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._node_hs_image = el;
		loader = new THREE.TextureLoader();
		el.userData.ggNodeId=nodeId;
		texture = loader.load(basePath + 'images/node_hs_image_' + nodeId + '.png');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'node_hs_image_material';
		el.material = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._node_hs_image;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		let width = el.userData.width / 100.0;
		let height = el.userData.height / 100.0;
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = el.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = el.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = el.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = el.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'node_hs_image_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
		el.geometry = geometry;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="node_hs_image";
		me._node_hs_image.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.userData.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			return this.userData.ggNodeId;
		}
		me._node_hs_image.logicBlock_imageborderradius = function() {
			var newLogicStateImageBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateImageBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateImageBorderRadius = 1;
			}
			else {
				newLogicStateImageBorderRadius = -1;
			}
			if (me._node_hs_image.ggCurrentLogicStateImageBorderRadius != newLogicStateImageBorderRadius) {
				me._node_hs_image.ggCurrentLogicStateImageBorderRadius = newLogicStateImageBorderRadius;
				if (me._node_hs_image.ggCurrentLogicStateImageBorderRadius == 0) {
					me._node_hs_image.userData.createGeometry(4, 4, 4, 4);
				}
				else if (me._node_hs_image.ggCurrentLogicStateImageBorderRadius == 1) {
					me._node_hs_image.userData.createGeometry(50, 50, 50, 50);
				}
				else {
					me._node_hs_image.userData.createGeometry(0, 0, 0, 0);
				}
			}
		}
		me._node_hs_image.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['node_hs_image']=true;
		}
		me._node_hs_image.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['node_hs_image']=false;
		}
		me._node_hs_image.userData.ggUpdatePosition=function (useTransition) {
		}
		me._node_hs_bg.add(me._node_hs_image);
		me._node_hs.add(me._node_hs_bg);
		me._ht_node.add(me._node_hs);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(1);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 100;
		el.userData.height = 100;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'chevron_white';
		el.userData.x = 0;
		el.userData.y = 1;
		el.translateZ(0.060);
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 0;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.isVisible = function() {
			let vis = me._chevron_white.visible
			let parentEl = me._chevron_white.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._chevron_white.userData.opacity = v;
			v = v * me._chevron_white.userData.parentOpacity;
			if (me._chevron_white.userData.setOpacityInternal) me._chevron_white.userData.setOpacityInternal(v);
			for (let i = 0; i < me._chevron_white.children.length; i++) {
				let child = me._chevron_white.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._chevron_white.userData.parentOpacity = v;
			v = v * me._chevron_white.userData.opacity
			if (me._chevron_white.userData.setOpacityInternal) me._chevron_white.userData.setOpacityInternal(v);
			for (let i = 0; i < me._chevron_white.children.length; i++) {
				let child = me._chevron_white.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 0.80;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._chevron_white = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._chevron_white.userData.materialNormal) me._chevron_white.userData.materialNormal.opacity = v;
			if (me._chevron_white.userData.materialOver) me._chevron_white.userData.materialOver.opacity = v;
			if (me._chevron_white.userData.materialActive) me._chevron_white.userData.materialActive.opacity = v;
			me._chevron_white.visible = (v>0 && me._chevron_white.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAALLklEQVR4nO3c6ZMcdR3H8c+vZ4YUAZGqMNnpnt2EhQQtxeIB5a1hFwJ4FIKQcDzgiXKIeCNa/AGWJ16IKIcPqEKt8gA5AkFhF7SQ00epEl1lk0y6e3bDbhA2myw73V8fZNpM4u5mfj19THd/Xg8n/Z39Vk2969czNRmAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIlqDSXoAOaTab7xKRs0XEK3ves2uHhibS3okYSOpc163C92+HUls7H1fAnZVVq25es2bN62ntRgwkVVNTU6f7njcGYGi5a8qtVr26bp2T4FrUgYGkpB3HOIDBY11rlEq1gYGBqfi3oqMZaS9QRDpxAIDveWPT09'+
	'O1eLeipfAESZhuHB3+XiqXz127dm0zhrVoGQwkQT3EEXi5VC6PMpLkMJCERBBHgJEkiO9BEhBhHADwdq/VGtu7d68ZwXPRMfAEiVnEcXR6uVypnFutVt2In5c6MJAYxRhH4B/lSmWUkcSHgcQkgTgCjCRGDCQGCcYRYCQx4Zv0iPUQxz4BzlaGcR6AA5qzb2stLo7zjXv0GEiEphuNDT3EsdmyrL/VarUnodTHoR/JGa3FxfG9u3dbmnO0At5iRWS60djglUpj6CGOzgdd1x2FyCMAjtd8vn+WW61RfsExGgwkAlHHEXBddwQi28BIUsNbrB7FFQcAmKY5DqU+BmBe87nPaJXLY7zd6h1PkB7EGUen9knyCIDVOn9EgIlKqzXCkyQ8BhJSUnEEXNc9p327pR2J53mjQ0NDttaWBICBhJJ0HAFGkjwGoimtOAKMJFkM'+
	'REPacQTCRgKl/tVqtUYYSfcYSJf6JY6A4zibFPAoQkTied7o4ODgnij3ySt+zNuFfosDACzLelqAjwLYrzUosqFUKo3t2bMnqe+JZRpPkGPoxzg6tU+SbQBO0Bz9t+f7IzxJVsZAVtDvcQQcx/lw+3aLkUSMgSxjutHY4JdK4wLUNUcTjSPQSyS+yGi9Xm/EsVfWMZAlZC2OACOJHt+kHyWrcQCAZVl/9kU+At037sDphlLjtm0v+xOoRcVAOmQ5jkC9Xv9LO5I5zdHTGMn/4y1WWx7i6GTb9ocMpR4FcKLm6Cu+yAhvtw5hIMhfHAHbtj9oKPUYwkUyWq/Xd8exV5YUPpC8xhFgJL0pdCB5jyPQQyST7dutwkZS2ECKEkdgyrY/4Cu1HYxESyEDKVocgV4iEWDUsqxdcezVzwr3MW9R4wCAgXr9GUPkQgBvaI4OK2'+
	'DMcZz1cezVzwp1ghQ5jk7tk+QxAG/RHN0pwEiRTpLCnCCM47CBev0Zw/fDnCSnKmC8SCdJIQKZbjQ2Mo4jDQwO/rWXSFzXPTWGtfpO7m+x2nGMMY6lTe3Z837fMLYjxO0WlBo1TXNnDGv1jVwHwji602w23ye+/zj0I9kFpUbyHElub7EYR/dqtdqzyjAuAPC65uh6iOT6diuXJwjjCKd9kmwHcJLmaG5PktwFwjh602w239u+3WIkyFkgjCMajOSw3LwHYRzRqdVqz/XwnuSpZrM5HMdeachFIIwjerVa7TkodT70I1knvj+el0gyH0he4hARw3XdU23bHhKRvrj1NU3zeSh1PkT+ozkaRHJaLIslKNOB5CGOdhg3Nl13CiKThlK7p1y30bTtq/ohFNM0n4dhXBAykrGsR5L6CxBWHuKwbXu1odRvcegnRJdUM82K'+
	'UqqV4FpLcl33PfD9x6HUWzVHG8owRmq12iuxLBazTJ4guYnDMB7ECnEAQNN194lIOaG1ltU+ScLcbg1l+XYrc4HYtr0uN3GInNfF5Sc2Hee+PonkhV4iyeIPZmcqEBFRSql7ChTHIUpd3nScX2Y9kpJh3N0P76t0ZCqQKce5SAGbNceyHUdAqa3tSCoxrKbFNM0XRKnNISK5cMpxLoplqZhkKhBR6hzNkXzEETgUyX39EIllWS+KUpsV8JrOXIjXMFWZCgQiqzSuzlccAaW2Nl23L04Sy7Je9IHztSLRew1Tl6lARKkdXV6azzgO29JnkXR9kmi8hn0hU4FUKpX7ABzr95nyHkdgS9N1f9UnkbzUZSS72q9hZmQqkGq1+oby/U8BOLjMJVMFiSNwWb9FAmBqmUsOKt//dLVa1f0/8KnKVCAAUBscfMLz/bMg8mTHwy'+
	'0A97Y87x0FiiPQV5F4vv9OAPcC8P73DyJPer5/Vm1w8InUlgspU59JH21ycvLkE8rlUxYNw6nX6/Np7wP0FIcokWsEqEKpb4X407+rmeZVSqnFELORs217dcX3rQO+P7N+/fp9ae8TVqYD6Te9xlGr138BAK5tfz1kJL+vmeaV/RJJHjCQiNi2vdoAHoJS52qOHhFHwLXtr0Gpb4dYhZFEiIFEIOo4AmEjUcD9A6Z5BSPpHQPpUVxxBFzXvRki39HdSwH3vzo7e+WZZ575pu4sHcZAehB3HAFGkh4GElJScQR6iOSBV2dnr2Ak4TCQEJKOI+C67lch8l3dOUYSHgPRlFYcgbCRCPCH2dnZyxmJHgaiIe04Aq7r3gSR7+nOMRJ9DKRL/RJHgJEkI3PfxUpDv8UBAKZp3irATbpzCrh4zZo1v9mxY8dxUe+URzxBjqEf'+
	'4+jkOM5XFHCr9qBSD87MzGzlSbIyBrKCfo8j4DjOlxXwfe1BpR6amZnZwkiWx0CWkZU4AowkHgxkCVmLI9BLJHNzc1s3bty4EMNamcZAjtKO42EoNao5mmocAcdxvqSAH2gPMpIlMZAOWY8jEDoSkYfn5ue3MJLDGEhbXuIINB3niwL8UHuQkRyBgSB/cQRCRwI8Mrd//2WMhIHkNo4AI+lNoQPJexyBpuN8QYAfhRgtfCSFDaQocQR6iGTb3P79lxY1kkIGUrQ4Ak3b/rwo9eMQo9sOLixcNjw8vNwP9uVW4QIpahwBRqKnUIEUPY6Aa9ufg1K3hRh99ODCwqVFiqQwgTCOIzGS7hQikGazeYJ43kOM40iu694IkZ+EGH3s4MLCJ4sQSe4DYRwrYyQry3UgjKM7jGR5uQ2EcehxXfezELk9xGiuI8llIIwjnB4i2X'+
	'5wYeGSPEaSu0AYR29c170BIj8NMZrLSHIVCOOIBiM5LDeBMI5ohY1EAY8vet4lQ0NDB+LYK2m5+F0sxhE90zTvEOAG3TkBLqiUSg80Go3j49graZk/QRhHvBzH+YwC7tCdE+CPnuddnPWTJNOBMI5kOI5zvQJ+pjuXh0gyGwjjSFZRI8lkIIwjHY7jXKeAn+vOCfAnz/M+kcVIMhcIv5WbrqJFkrlPsZRS32Qc6bEs604BrtedU8DmSqn0jTh2ilOmThDHcc5WwAvQ25txxMBxnGsVcKfmmAjwbsuyXoplqRhk6gQxgEvAOPqCZVl3CXCd5phqv4aZkalAAFQ1rmUcMbMs6y4FXKszI8Apce0Th2wFIrKz2ysZRzJqlnW3TiRKZFec+0QtU4GIYfwawPyxLmMcyapZ1t1K5JouLp1vv4aZkalATNPcqYBbVriEcaSk'+
	'Vq/f045ElrtGAbeYprkzua16l6lAAGDANG8T4GoA+zofF2DCF9nEONJTq9fv8UU2CTBx1D/tE+DqAdMM8ysqqcrUx7ydJicnTz7+uOPOgVJVJbLr9fn5p4v685j9ZmJiYtVJq1dvEqXWQ2TvgTfffGp4ePi1tPciIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiisV/ASpG+XWnnXyaAAAAAElFTkSuQmCC');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'chevron_white_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._chevron_white;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5 );
		geometry.name = 'chevron_white_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="chevron_white";
		me._chevron_white.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != "")) || 
				((player.getVariableValue('opt_3d_node_hotspots') == false)) || 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
			me._chevron_white.visible=false;
			player.repaint();
			me._chevron_white.userData.visible=false;
				}
				else {
			me._chevron_white.visible=((!me._chevron_white.material && Number(me._chevron_white.userData.opacity>0)) || (me._chevron_white.material && Number(me._chevron_white.material.opacity)>0))?true:false;
			player.repaint();
			me._chevron_white.userData.visible=true;
				}
			}
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('player_mouse_down') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.elementMouseOver['chevron_white'] == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.userData.transitionValue_alpha = 0.2;
					for (var i = 0; i < me._chevron_white.userData.transitions.length; i++) {
						if (me._chevron_white.userData.transitions[i].property == 'alpha') {
							clearInterval(me._chevron_white.userData.transitions[i].interval);
							me._chevron_white.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._chevron_white.material ? me._chevron_white.material.opacity : me._chevron_white.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._chevron_white.userData.setOpacity(transition_alpha.startAlpha + (me._chevron_white.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._chevron_white.userData.transitions.splice(me._chevron_white.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._chevron_white.userData.transitions.push(transition_alpha);
					}
				}
				else if (me._chevron_white.ggCurrentLogicStateAlpha == 1) {
					me._chevron_white.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._chevron_white.userData.transitions.length; i++) {
						if (me._chevron_white.userData.transitions[i].property == 'alpha') {
							clearInterval(me._chevron_white.userData.transitions[i].interval);
							me._chevron_white.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._chevron_white.material ? me._chevron_white.material.opacity : me._chevron_white.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._chevron_white.userData.setOpacity(transition_alpha.startAlpha + (me._chevron_white.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._chevron_white.userData.transitions.splice(me._chevron_white.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._chevron_white.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._chevron_white.userData.transitionValue_alpha = 0.80002;
					for (var i = 0; i < me._chevron_white.userData.transitions.length; i++) {
						if (me._chevron_white.userData.transitions[i].property == 'alpha') {
							clearInterval(me._chevron_white.userData.transitions[i].interval);
							me._chevron_white.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._chevron_white.material ? me._chevron_white.material.opacity : me._chevron_white.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._chevron_white.userData.setOpacity(transition_alpha.startAlpha + (me._chevron_white.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._chevron_white.userData.transitions.splice(me._chevron_white.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._chevron_white.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._chevron_white.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._chevron_white.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['chevron_white']=true;
			me._chevron_white.logicBlock_alpha();
		}
		me._chevron_white.userData.ontouchend=function (e) {
			me._chevron_white.logicBlock_alpha();
		}
		me._chevron_white.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['chevron_white']=false;
			me._chevron_white.logicBlock_alpha();
		}
		me._chevron_white.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.add(me._chevron_white);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: new THREE.Color(0.905882, 0.901961, 0.901961).convertSRGBToLinear(), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'center_circle_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 90;
		el.userData.height = 90;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'center_circle';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.090);
		el.userData.z = 0.090;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'sticky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 0;
		el.renderOrder = 3;
		el.userData.renderOrder = 3;
		el.userData.isVisible = function() {
			let vis = me._center_circle.visible
			let parentEl = me._center_circle.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._center_circle.userData.opacity = v;
			v = v * me._center_circle.userData.parentOpacity;
			if (me._center_circle.userData.setOpacityInternal) me._center_circle.userData.setOpacityInternal(v);
			for (let i = 0; i < me._center_circle.children.length; i++) {
				let child = me._center_circle.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._center_circle.userData.parentOpacity = v;
			v = v * me._center_circle.userData.opacity
			if (me._center_circle.userData.setOpacityInternal) me._center_circle.userData.setOpacityInternal(v);
			for (let i = 0; i < me._center_circle.children.length; i++) {
				let child = me._center_circle.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._center_circle = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 45;
		el.userData.borderRadius.default.topRight = 45;
		el.userData.borderRadius.default.bottomRight = 45;
		el.userData.borderRadius.default.bottomLeft = 45;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._center_circle;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._center_circle);
			if (skin.rectHasRoundedCorners(me._center_circle)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = el.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = el.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = el.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = el.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'center_circle_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'center_circle_geometry';
			}
			el.geometry = geometry;
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._center_circle.material.opacity = v * me._center_circle.userData.backgroundColorAlpha;
			if (me._center_circle.userData.ggSubElement) {
				me._center_circle.userData.ggSubElement.material.opacity = v
				me._center_circle.userData.ggSubElement.visible = (v>0 && me._center_circle.userData.visible);
			}
			me._center_circle.visible = (v>0 && me._center_circle.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._center_circle.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._center_circle.userData.backgroundColorAlpha = v;
			me._center_circle.userData.setOpacity(me._center_circle.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 45, 45, 45, 45);
		el.userData.ggId="center_circle";
		me._center_circle.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._center_circle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != "")) || 
				((player.getVariableValue('opt_3d_node_hotspots') == false)) || 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._center_circle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._center_circle.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._center_circle.ggCurrentLogicStateVisible == 0) {
			me._center_circle.visible=false;
			player.repaint();
			me._center_circle.userData.visible=false;
				}
				else {
			me._center_circle.visible=((!me._center_circle.material && Number(me._center_circle.userData.opacity>0)) || (me._center_circle.material && Number(me._center_circle.material.opacity)>0))?true:false;
			player.repaint();
			me._center_circle.userData.visible=true;
				}
			}
		}
		me._center_circle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('player_mouse_down') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._center_circle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._center_circle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._center_circle.ggCurrentLogicStateAlpha == 0) {
					me._center_circle.userData.transitionValue_alpha = 0.2;
					for (var i = 0; i < me._center_circle.userData.transitions.length; i++) {
						if (me._center_circle.userData.transitions[i].property == 'alpha') {
							clearInterval(me._center_circle.userData.transitions[i].interval);
							me._center_circle.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._center_circle.material ? me._center_circle.material.opacity : me._center_circle.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._center_circle.userData.setOpacity(transition_alpha.startAlpha + (me._center_circle.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._center_circle.userData.transitions.splice(me._center_circle.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._center_circle.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._center_circle.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._center_circle.userData.transitions.length; i++) {
						if (me._center_circle.userData.transitions[i].property == 'alpha') {
							clearInterval(me._center_circle.userData.transitions[i].interval);
							me._center_circle.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._center_circle.material ? me._center_circle.material.opacity : me._center_circle.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._center_circle.userData.setOpacity(transition_alpha.startAlpha + (me._center_circle.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._center_circle.userData.transitions.splice(me._center_circle.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._center_circle.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._center_circle.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.add(me._center_circle);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(1.75);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 140;
		el.userData.height = 90;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'hs_preview_image';
		el.userData.x = 0;
		el.userData.y = 1.75;
		el.translateZ(0.120);
		el.userData.z = 0.120;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'sticky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 0;
		el.renderOrder = 4;
		el.userData.renderOrder = 4;
		el.userData.setOpacityInternal = function(v) {
			if (me._hs_preview_image.material) me._hs_preview_image.material.opacity = v;
			me._hs_preview_image.visible = (v>0 && me._hs_preview_image.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._hs_preview_image.visible
			let parentEl = me._hs_preview_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._hs_preview_image.userData.opacity = v;
			v = v * me._hs_preview_image.userData.parentOpacity;
			if (me._hs_preview_image.userData.setOpacityInternal) me._hs_preview_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._hs_preview_image.children.length; i++) {
				let child = me._hs_preview_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._hs_preview_image.userData.parentOpacity = v;
			v = v * me._hs_preview_image.userData.opacity
			if (me._hs_preview_image.userData.setOpacityInternal) me._hs_preview_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._hs_preview_image.children.length; i++) {
				let child = me._hs_preview_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 0.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._hs_preview_image = el;
		loader = new THREE.TextureLoader();
		el.userData.ggNodeId=nodeId;
		texture = loader.load(basePath + 'images/hs_preview_image_' + nodeId + '.jpg');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'hs_preview_image_material';
		el.material = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._hs_preview_image;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5 );
		geometry.name = 'hs_preview_image_geometry';
		el.geometry = geometry;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="hs_preview_image";
		me._hs_preview_image.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.userData.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			return this.userData.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_3d_node_hotspots') == true)) && 
				((player.is3dModel() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._hs_preview_image.userData.transitions.length; i++) {
						if (me._hs_preview_image.userData.transitions[i].property == 'alpha') {
							clearInterval(me._hs_preview_image.userData.transitions[i].interval);
							me._hs_preview_image.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._hs_preview_image.material ? me._hs_preview_image.material.opacity : me._hs_preview_image.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._hs_preview_image.userData.setOpacity(transition_alpha.startAlpha + (me._hs_preview_image.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._hs_preview_image.userData.transitions.splice(me._hs_preview_image.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._hs_preview_image.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._hs_preview_image.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._hs_preview_image.userData.transitions.length; i++) {
						if (me._hs_preview_image.userData.transitions[i].property == 'alpha') {
							clearInterval(me._hs_preview_image.userData.transitions[i].interval);
							me._hs_preview_image.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._hs_preview_image.material ? me._hs_preview_image.material.opacity : me._hs_preview_image.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._hs_preview_image.userData.setOpacity(transition_alpha.startAlpha + (me._hs_preview_image.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._hs_preview_image.userData.transitions.splice(me._hs_preview_image.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._hs_preview_image.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._hs_preview_image.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'hs_tt_material';
			el.material = material;
		el.translateX(0);
		el.translateY(-0.35);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 140;
		el.userData.height = 20;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'hs_tt';
		el.userData.x = 0;
		el.userData.y = -0.35;
		el.translateZ(0.150);
		el.userData.z = 0.150;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'sticky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 2;
		el.renderOrder = 5;
		el.userData.renderOrder = 5;
		el.userData.isVisible = function() {
			let vis = me._hs_tt.visible
			let parentEl = me._hs_tt.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._hs_tt.userData.opacity = v;
			v = v * me._hs_tt.userData.parentOpacity;
			if (me._hs_tt.userData.setOpacityInternal) me._hs_tt.userData.setOpacityInternal(v);
			for (let i = 0; i < me._hs_tt.children.length; i++) {
				let child = me._hs_tt.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._hs_tt.userData.parentOpacity = v;
			v = v * me._hs_tt.userData.opacity
			if (me._hs_tt.userData.setOpacityInternal) me._hs_tt.userData.setOpacityInternal(v);
			for (let i = 0; i < me._hs_tt.children.length; i++) {
				let child = me._hs_tt.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._hs_tt = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._hs_tt;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._hs_tt);
			if (skin.rectHasRoundedCorners(me._hs_tt)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = el.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = el.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = el.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = el.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'hs_tt_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'hs_tt_geometry';
			}
			el.geometry = geometry;
		}
		el.userData.backgroundColorAlpha = 0.196078;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._hs_tt.material.opacity = v;
			if (me._hs_tt.userData.hasScrollbar) {
				me._hs_tt.userData.scrollbar.material.opacity = v;
				me._hs_tt.userData.scrollbarBg.material.opacity = v;
			}
			if (me._hs_tt.userData.ggSubElement) {
				me._hs_tt.userData.ggSubElement.material.opacity = v
				me._hs_tt.userData.ggSubElement.visible = (v>0 && me._hs_tt.userData.visible);
			}
			me._hs_tt.visible = (v>0 && me._hs_tt.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._hs_tt.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._hs_tt.userData.backgroundColorAlpha = v;
			me._hs_tt.userData.setOpacity(me._hs_tt.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.backgroundColor = new THREE.Color(0, 0, 0).convertSRGBToLinear();
		el.userData.textColor = '#ffffff';
		el.userData.textColorAlpha = 1;
		var canvas = document.createElement('canvas');
		canvas.width = 280;
		canvas.height = 40;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._hs_tt;
			var canv = me._hs_tt.userData.textCanvas;
			var ctx = me._hs_tt.userData.textCanvasContext;
			var tmpCanv = me._hs_tt.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			ctx.fillStyle = 'rgba(' + me._hs_tt.userData.backgroundColor.r * 255 + ', ' + me._hs_tt.userData.backgroundColor.g * 255 + ', ' + me._hs_tt.userData.backgroundColor.b * 255 + ', ' + me._hs_tt.userData.backgroundColorAlpha + ')';
			ctx.fillRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._hs_tt.userData.scrollPosPercent ? tmpCanv.height * me._hs_tt.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._hs_tt.userData.boxWidthCanv / 100.0;
		height = me._hs_tt.userData.boxHeightCanv / 100.0;
		me._hs_tt.userData.width = me._hs_tt.userData.boxWidthCanv;
		me._hs_tt.userData.height = me._hs_tt.userData.boxHeightCanv;
		me._hs_tt.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._hs_tt, 0, 0);
		me._hs_tt.position.x = newPos.x;
		me._hs_tt.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'hs_tt_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._hs_tt.material.map) {
				me._hs_tt.material.map.dispose();
			}
			me._hs_tt.material.map = textTexture;
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._hs_tt, 'scrollbar');
			skin.paintTextDivToCanvas(me._hs_tt, 'box-sizing: border-box; width: 140px; height: auto; font-size: 12px; font-weight: inherit; color: rgba(255,255,255,1); text-align: center; white-space: pre-line; padding: 0px 1px 0px 1px; overflow: hidden;' + '; color: ' + me._hs_tt.userData.textColor + ' !important;', false, true, false);
			me._hs_tt.userData.hasScrollbar = false;
		}
		el.userData.ggUpdateText=function(force) {
			var params = [];
			params.push(player._(String(player._(me.hotspot.title))));
			var hs = player._("%1", params);
			if (hs!=this.ggText || force) {
				this.ggText=hs;
				this.ggRenderText();
			}
		}
		el.userData.setBackgroundColor = function(v) {
			me._hs_tt.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._hs_tt.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._hs_tt.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._hs_tt.userData.textColorAlpha = v;
		}
		el.userData.ggId="hs_tt";
		me._hs_tt.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me._hs_preview_image.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
			me._hs_tt.visible=false;
			player.repaint();
			me._hs_tt.userData.visible=false;
				}
				else {
			me._hs_tt.visible=((!me._hs_tt.material && Number(me._hs_tt.userData.opacity>0)) || (me._hs_tt.material && Number(me._hs_tt.material.opacity)>0))?true:false;
			player.repaint();
			me._hs_tt.userData.visible=true;
				}
			}
		}
		me._hs_tt.userData.ggUpdatePosition=function (useTransition) {
				me._hs_tt.userData.ggUpdateText(true);
		}
		me._hs_preview_image.add(me._hs_tt);
		me._ht_node.add(me._hs_preview_image);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || false) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'tt_ht_3d_material';
			el.material = material;
		el.translateX(0);
		el.translateY(1.59);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 140;
		el.userData.height = 20;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'tt_ht_3d';
		el.userData.x = 0;
		el.userData.y = 1.59;
		el.translateZ(2.150);
		el.userData.z = 0.150;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'sticky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 0;
		el.renderOrder = 5;
		el.userData.renderOrder = 5;
		el.userData.isVisible = function() {
			let vis = me._tt_ht_3d.visible
			let parentEl = me._tt_ht_3d.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._tt_ht_3d.userData.opacity = v;
			v = v * me._tt_ht_3d.userData.parentOpacity;
			if (me._tt_ht_3d.userData.setOpacityInternal) me._tt_ht_3d.userData.setOpacityInternal(v);
			for (let i = 0; i < me._tt_ht_3d.children.length; i++) {
				let child = me._tt_ht_3d.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._tt_ht_3d.userData.parentOpacity = v;
			v = v * me._tt_ht_3d.userData.opacity
			if (me._tt_ht_3d.userData.setOpacityInternal) me._tt_ht_3d.userData.setOpacityInternal(v);
			for (let i = 0; i < me._tt_ht_3d.children.length; i++) {
				let child = me._tt_ht_3d.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._tt_ht_3d = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 1;
		el.userData.borderWidth.default.right = 1;
		el.userData.borderWidth.default.bottom = 1;
		el.userData.borderWidth.default.left = 1;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._tt_ht_3d;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._tt_ht_3d);
			if (skin.rectHasRoundedCorners(me._tt_ht_3d)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = el.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = el.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = el.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = el.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'tt_ht_3d_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'tt_ht_3d_geometry';
			}
			el.geometry = geometry;
			el.userData.borderRadiusInnerShape = {};
		let bWidthLeft = el.userData.borderWidth.left / 100.0;
		let bWidthTop = el.userData.borderWidth.top / 100.0;
		let bWidthRight = el.userData.borderWidth.right / 100.0;
		let bWidthBottom = el.userData.borderWidth.bottom / 100.0;
		let maxRad = skin.rectMaxRadius(me._tt_ht_3d);
		let bRadiusTL = Math.min(el.userData.borderRadius.topLeft / 100.0, maxRad / 100.0);
		let bRadiusTR = Math.min(el.userData.borderRadius.topRight / 100.0, maxRad / 100.0);
		let bRadiusBR = Math.min(el.userData.borderRadius.bottomRight / 100.0, maxRad / 100.0);
		let bRadiusBL = Math.min(el.userData.borderRadius.bottomLeft / 100.0, maxRad / 100.0);
		borderShape = new THREE.Shape();
		borderShape.moveTo((-width / 2.0) - bWidthLeft + bRadiusTL, (height / 2.0) + bWidthTop);
		borderShape.lineTo((width / 2.0) + bWidthRight - bRadiusTR, (height / 2.0) + bWidthTop);
		if (bRadiusTR > 0) {
			borderShape.arc(0, -bRadiusTR, bRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		borderShape.lineTo((width / 2.0) + bWidthRight, (-height / 2.0) - bWidthBottom + bRadiusBR);
		if (bRadiusBR > 0) {
			borderShape.arc(-bRadiusBR, 0, bRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		borderShape.lineTo((-width / 2.0) - bWidthLeft + bRadiusBL, (-height / 2.0) - bWidthBottom);
		if (bRadiusBL > 0) {
			borderShape.arc(0, bRadiusBL, bRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		borderShape.lineTo((-width / 2.0) - bWidthLeft, (height / 2.0) + bWidthTop - bRadiusTL);
		if (bRadiusTL > 0) {
			borderShape.arc(bRadiusTL, 0, bRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		innerShape = new THREE.Path();
		if (skin.rectHasRoundedCorners(me._tt_ht_3d)) {
			let borderRadiusTL = bRadiusTL - ((bWidthTop + bWidthLeft) / 2.0);
			let borderRadiusTR = bRadiusTR - ((bWidthTop + bWidthRight) / 2.0);
			let borderRadiusBR = bRadiusBR - ((bWidthBottom + bWidthRight) / 2.0);
			let borderRadiusBL = bRadiusBL - ((bWidthBottom + bWidthLeft) / 2.0);
		innerShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		innerShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		innerShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		innerShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		innerShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		innerShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		innerShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		innerShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		innerShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		} else {
			innerShape.moveTo((-width / 2.0), (height / 2.0));
			innerShape.lineTo((width / 2.0), (height / 2.0));
			innerShape.lineTo((width / 2.0), (-height / 2.0));
			innerShape.lineTo((-width / 2.0), (-height / 2.0));
		}
		borderShape.holes.push(innerShape);
		borderGeometry = new THREE.ShapeGeometry(borderShape);
		borderGeometry.name = 'tt_ht_3d_subElement_borderGeometry';
		borderMaterial = new THREE.MeshBasicMaterial( {color: new THREE.Color(0, 0, 0).convertSRGBToLinear(), side: THREE.DoubleSide, transparent: (player.get3dModelType() != 2 || false) } );
		borderMaterial.name = 'tt_ht_3d_subElement_borderMaterial';
		el.userData.border = new THREE.Mesh( borderGeometry, borderMaterial );
		el.userData.border.name = 'tt_ht_3d_subElement_borderMesh';
		el.add(el.userData.border);
		}
		el.userData.backgroundColorAlpha = 0.666667;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._tt_ht_3d.material.opacity = v;
			if (me._tt_ht_3d.userData.hasScrollbar) {
				me._tt_ht_3d.userData.scrollbar.material.opacity = v;
				me._tt_ht_3d.userData.scrollbarBg.material.opacity = v;
			}
			me._tt_ht_3d.userData.border.material.opacity = v * me._tt_ht_3d.userData.borderColorAlpha;
			if (me._tt_ht_3d.userData.ggSubElement) {
				me._tt_ht_3d.userData.ggSubElement.material.opacity = v
				me._tt_ht_3d.userData.ggSubElement.visible = (v>0 && me._tt_ht_3d.userData.visible);
			}
			me._tt_ht_3d.visible = (v>0 && me._tt_ht_3d.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._tt_ht_3d.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._tt_ht_3d.userData.backgroundColorAlpha = v;
			me._tt_ht_3d.userData.setOpacity(me._tt_ht_3d.userData.opacity);
		}
		el.userData.setBorderColor = function(v) {
			me._tt_ht_3d.userData.border.material.color = v;
		}
		el.userData.setBorderColorAlpha = function(v) {
			me._tt_ht_3d.userData.borderColorAlpha = v;
			me._tt_ht_3d.userData.setOpacity(me._tt_ht_3d.userData.opacity);
		}
		el.userData.createGeometry(1, 1, 1, 1, 0, 0, 0, 0);
		el.userData.backgroundColor = new THREE.Color(0, 0, 0).convertSRGBToLinear();
		el.userData.textColor = '#ffffff';
		el.userData.textColorAlpha = 1;
		var canvas = document.createElement('canvas');
		canvas.width = 280;
		canvas.height = 40;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._tt_ht_3d;
			var canv = me._tt_ht_3d.userData.textCanvas;
			var ctx = me._tt_ht_3d.userData.textCanvasContext;
			var tmpCanv = me._tt_ht_3d.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			ctx.fillStyle = 'rgba(' + me._tt_ht_3d.userData.backgroundColor.r * 255 + ', ' + me._tt_ht_3d.userData.backgroundColor.g * 255 + ', ' + me._tt_ht_3d.userData.backgroundColor.b * 255 + ', ' + me._tt_ht_3d.userData.backgroundColorAlpha + ')';
			ctx.fillRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._tt_ht_3d.userData.scrollPosPercent ? tmpCanv.height * me._tt_ht_3d.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._tt_ht_3d.userData.boxWidthCanv / 100.0;
		height = me._tt_ht_3d.userData.boxHeightCanv / 100.0;
		me._tt_ht_3d.userData.width = me._tt_ht_3d.userData.boxWidthCanv;
		me._tt_ht_3d.userData.height = me._tt_ht_3d.userData.boxHeightCanv;
		me._tt_ht_3d.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._tt_ht_3d, 0, -170);
		me._tt_ht_3d.position.x = newPos.x;
		me._tt_ht_3d.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'tt_ht_3d_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._tt_ht_3d.material.map) {
				me._tt_ht_3d.material.map.dispose();
			}
			me._tt_ht_3d.material.map = textTexture;
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._tt_ht_3d, 'scrollbar');
			skin.paintTextDivToCanvas(me._tt_ht_3d, 'box-sizing: border-box; width: auto; height: auto; font-size: 16px; font-weight: inherit; color: rgba(255,255,255,1); text-align: center; white-space: pre; padding: 0px 1px 0px 1px; overflow: hidden;transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;' + '; color: ' + me._tt_ht_3d.userData.textColor + ' !important;', false, true, false);
			me._tt_ht_3d.userData.hasScrollbar = false;
		}
		el.userData.ggUpdateText=function(force) {
			var params = [];
			params.push(player._(String(player._(me.hotspot.title))));
			var hs = player._("%1", params);
			if (hs!=this.ggText || force) {
				this.ggText=hs;
				this.ggRenderText();
			}
		}
		el.userData.setBackgroundColor = function(v) {
			me._tt_ht_3d.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._tt_ht_3d.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._tt_ht_3d.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._tt_ht_3d.userData.textColorAlpha = v;
		}
		el.userData.ggId="tt_ht_3d";
		me._tt_ht_3d.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.is3dModel() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
			me._tt_ht_3d.visible=((!me._tt_ht_3d.material && Number(me._tt_ht_3d.userData.opacity>0)) || (me._tt_ht_3d.material && Number(me._tt_ht_3d.material.opacity)>0))?true:false;
			player.repaint();
			me._tt_ht_3d.userData.visible=true;
				}
				else {
			me._tt_ht_3d.visible=false;
			player.repaint();
			me._tt_ht_3d.userData.visible=false;
				}
			}
		}
		me._tt_ht_3d.userData.ggUpdatePosition=function (useTransition) {
				me._tt_ht_3d.userData.ggUpdateText(true);
		}
		me._ht_node.add(me._tt_ht_3d);
		el = new THREE.Group();
		el.translateX(0);
		el.translateY(1.15);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 50;
		el.userData.height = 50;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_CustomImage';
		el.userData.x = 0;
		el.userData.y = 1.15;
		el.translateZ(0.180);
		el.userData.z = 0.180;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'sticky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 0;
		el.renderOrder = 6;
		el.userData.renderOrder = 6;
		el.userData.isVisible = function() {
			let vis = me._ht_node_customimage.visible
			let parentEl = me._ht_node_customimage.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_customimage.userData.opacity = v;
			v = v * me._ht_node_customimage.userData.parentOpacity;
			if (me._ht_node_customimage.userData.setOpacityInternal) me._ht_node_customimage.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_customimage.children.length; i++) {
				let child = me._ht_node_customimage.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_customimage.userData.parentOpacity = v;
			v = v * me._ht_node_customimage.userData.opacity
			if (me._ht_node_customimage.userData.setOpacityInternal) me._ht_node_customimage.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_customimage.children.length; i++) {
				let child = me._ht_node_customimage.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_customimage = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_customimage;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_customimage);
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_customimage.userData.ggSubElement) {
				me._ht_node_customimage.userData.ggSubElement.material.opacity = v
				me._ht_node_customimage.userData.ggSubElement.visible = (v>0 && me._ht_node_customimage.userData.visible);
			}
			me._ht_node_customimage.visible = (v>0 && me._ht_node_customimage.userData.visible);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		currentWidth = 50;
		currentHeight = 50;
		var img = {};
		img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
		img.geometry.name = 'ht_node_CustomImage_imgGeometry';
		loader = new THREE.TextureLoader();
		el.userData.ggSetUrl = function(extUrl) {
			loader.load(extUrl,
				function (texture) {
				texture.colorSpace = player.getVRTextureColorSpace();
				let tmpDepthTest = true;
				if (me._ht_node_customimage.userData.ggSubElement.material) {
					tmpDepthTest = me._ht_node_customimage.userData.ggSubElement.material.depthTest;
				}
				var loadedMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, depthTest: tmpDepthTest, depthWrite: tmpDepthTest });
				loadedMaterial.name = 'ht_node_CustomImage_subElementMaterial';
				me._ht_node_customimage.userData.ggSubElement.material = loadedMaterial;
				me._ht_node_customimage.userData.ggUpdatePosition();
				me._ht_node_customimage.userData.ggText = extUrl;
				me._ht_node_customimage.userData.setOpacity(me._ht_node_customimage.userData.opacity);
			});
		};
		if ((hotspot) && (hotspot.customimage)) {
			var extUrl=hotspot.customimage;
		}
		el.userData.ggSetUrl(extUrl);
		material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true } );
		material.name = 'ht_node_CustomImage_subElementMaterial';
		el.userData.ggSubElement = new THREE.Mesh( img.geometry, material );
		el.userData.ggSubElement.name = 'ht_node_CustomImage_subElement';
		el.userData.ggSubElement.position.z = el.position.z + 0.005;
		el.add(el.userData.ggSubElement);
		el.userData.clientWidth = 50;
		el.userData.clientHeight = 50;
		el.userData.ggId="ht_node_CustomImage";
		me._ht_node_customimage.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
			me._ht_node_customimage.visible=false;
			player.repaint();
			me._ht_node_customimage.userData.visible=false;
				}
				else {
			me._ht_node_customimage.visible=((!me._ht_node_customimage.material && Number(me._ht_node_customimage.userData.opacity>0)) || (me._ht_node_customimage.material && Number(me._ht_node_customimage.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_customimage.userData.visible=true;
				}
			}
		}
		me._ht_node_customimage.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_customimage']=true;
		}
		me._ht_node_customimage.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_customimage']=false;
		}
		me._ht_node_customimage.userData.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.userData.clientWidth;
			var parentHeight = me._ht_node_customimage.userData.clientHeight;
			var img = me._ht_node_customimage.userData.ggSubElement;
			if (!img.material || !img.material.map) return;
			var imgWidth = img.material.map.image.naturalWidth;
			var imgHeight = img.material.map.image.naturalHeight;
			var aspectRatioDiv = parentWidth / parentHeight;
			var aspectRatioImg = imgWidth / imgHeight;
			if (imgWidth < parentWidth) parentWidth = imgWidth;
			if (imgHeight < parentHeight) parentHeight = imgHeight;
			var currentWidth, currentHeight;
			img.geometry.dispose();
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
			img.geometry.name = 'ht_node_CustomImage_imgGeometry';
			}
		}
		me._ht_node.add(me._ht_node_customimage);
		el = new THREE.Group();
		el.translateX(0.33);
		el.translateY(0.205);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 66;
		el.userData.height = 37;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = '_3d_code';
		el.userData.x = 0.33;
		el.userData.y = 0.205;
		el.translateZ(0.210);
		el.userData.z = 0.210;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'sticky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 7;
		el.userData.renderOrder = 7;
		el.userData.setOpacityInternal = function(v) {
			if (me.__3d_code.material) me.__3d_code.material.opacity = v;
			me.__3d_code.visible = (v>0 && me.__3d_code.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me.__3d_code.visible
			let parentEl = me.__3d_code.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me.__3d_code.userData.opacity = v;
			v = v * me.__3d_code.userData.parentOpacity;
			if (me.__3d_code.userData.setOpacityInternal) me.__3d_code.userData.setOpacityInternal(v);
			for (let i = 0; i < me.__3d_code.children.length; i++) {
				let child = me.__3d_code.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me.__3d_code.userData.parentOpacity = v;
			v = v * me.__3d_code.userData.opacity
			if (me.__3d_code.userData.setOpacityInternal) me.__3d_code.userData.setOpacityInternal(v);
			for (let i = 0; i < me.__3d_code.children.length; i++) {
				let child = me.__3d_code.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me.__3d_code = el;
		el.userData.ggId="_3d_code";
		me.__3d_code.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__3d_code.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.add(me.__3d_code);
		me._ht_node.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node']=false;
		me._ht_node.logicBlock_visible();
		me._node_hs.userData.setOpacity(1.00);
		me.elementMouseOver['node_hs']=false;
		me.elementMouseOver['node_hs_anim']=false;
		me._node_hs_anim.logicBlock_visible();
		me._node_hs_vr_icon_bg.userData.setOpacity(1.00);
		me._node_hs_vr_icon_bg.logicBlock_scaling();
		me._node_hs_vr_icon_bg.logicBlock_visible();
		me._node_hs_vr_icon_bg.logicBlock_alpha();
		me._node_hs_vr_icon_bg.logicBlock_backgroundcolor();
		me._node_hs_vr_icon_bg.logicBlock_zindex();
		me._node_hs_vr_icon.userData.setOpacity(1.00);
		me._node_hs_bg.userData.setOpacity(0.00);
		me.elementMouseOver['node_hs_bg']=false;
		me._node_hs_bg.logicBlock_visible();
		me._node_hs_bg.logicBlock_alpha();
		me._node_hs_bg.logicBlock_backgroundcolor();
		me._node_hs_bg.logicBlock_borderradius();
		me._node_hs_bg.logicBlock_zindex();
		me._node_hs_tooltip.userData.setOpacity(1.00);
			me._node_hs_tooltip.userData.ggUpdateText(true);
		me._node_hs_tooltip.logicBlock_visible();
		me._node_hs_tooltip.logicBlock_backgroundcolor();
		me._node_hs_tooltip.logicBlock_borderradius();
		me._node_hs_tooltip.logicBlock_textcolor();
		me._node_hs_image.userData.setOpacity(1.00);
		me.elementMouseOver['node_hs_image']=false;
		me._node_hs_image.logicBlock_imageborderradius();
		me._chevron_white.userData.setOpacity(0.80);
		me.elementMouseOver['chevron_white']=false;
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha();
		me._center_circle.userData.setOpacity(1.00);
		me._center_circle.logicBlock_visible();
		me._center_circle.logicBlock_alpha();
		me._hs_preview_image.userData.setOpacity(0.00);
		me._hs_preview_image.logicBlock_alpha();
		me._hs_tt.userData.setOpacity(1.00);
			me._hs_tt.userData.ggUpdateText(true);
		me._hs_tt.logicBlock_visible();
		me._tt_ht_3d.traverse((obj)=>{
			let level = skin.getDepthFrom(me._tt_ht_3d, obj);
			let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
			if (100 > 0) {
				if (obj == me._tt_ht_3d) {
					obj.renderOrder = 10000 + 1000*100
				} else {
					let parentOrder = obj.parent.renderOrder;
					let isSkinElement = obj.userData.hasOwnProperty('ggId');
					obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
				}
			} else {
				obj.renderOrder = me._tt_ht_3d.userData.renderOrder + level;
			}
			if (obj.material) {
				if (player.get3dModelType() != 2) {
					obj.material.depthTest = false;
					obj.material.depthWrite = false;
				} else {
					obj.material.transparent = true;
				}
			}
		});
		player.repaint();
		me._tt_ht_3d.userData.setOpacity(1.00);
			me._tt_ht_3d.userData.ggUpdateText(true);
		me._tt_ht_3d.logicBlock_visible();
		me._ht_node_customimage.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_customimage']=false;
		me._ht_node_customimage.logicBlock_visible();
		el = me.__3d_code;
		javascript:"";
if (player.getVariableValue('opt_3d_node_hotspots') && !player.is3dModel()) {
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var factor = player.getVariableValue('vis_thumbnails_desktop') ? 1/7 : 1/6;
var y=vs.height * (factor*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
};
		me.__3d_code.userData.setOpacity(1.00);
			me.ggEvent_activehotspotchanged=function() {
				me._node_hs_tooltip.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._center_circle.logicBlock_visible();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._node_hs_anim.logicBlock_visible();
				me._node_hs_vr_icon_bg.logicBlock_scaling();
				me._node_hs_vr_icon_bg.logicBlock_visible();
				me._node_hs_vr_icon_bg.logicBlock_alpha();
				me._node_hs_vr_icon_bg.logicBlock_backgroundcolor();
				me._node_hs_bg.logicBlock_visible();
				me._node_hs_bg.logicBlock_alpha();
				me._node_hs_bg.logicBlock_backgroundcolor();
				me._node_hs_bg.logicBlock_borderradius();
					me._node_hs_tooltip.userData.ggUpdateText();
				me._node_hs_tooltip.logicBlock_visible();
				me._node_hs_tooltip.logicBlock_backgroundcolor();
				me._node_hs_tooltip.logicBlock_borderradius();
				me._node_hs_tooltip.logicBlock_textcolor();
				me._node_hs_image.logicBlock_imageborderradius();
				me._chevron_white.logicBlock_visible();
				me._chevron_white.logicBlock_alpha();
				me._center_circle.logicBlock_visible();
				me._center_circle.logicBlock_alpha();
				me._hs_preview_image.logicBlock_alpha();
					me._hs_tt.userData.ggUpdateText();
				me._hs_tt.logicBlock_visible();
					me._tt_ht_3d.userData.ggUpdateText();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._node_hs_anim.logicBlock_visible();
				me._node_hs_vr_icon_bg.logicBlock_scaling();
				me._node_hs_vr_icon_bg.logicBlock_alpha();
				me._node_hs_vr_icon_bg.logicBlock_backgroundcolor();
				me._node_hs_bg.logicBlock_visible();
				me._node_hs_bg.logicBlock_alpha();
				me._node_hs_bg.logicBlock_backgroundcolor();
				me._node_hs_bg.logicBlock_borderradius();
				me._node_hs_tooltip.logicBlock_visible();
				me._node_hs_tooltip.logicBlock_backgroundcolor();
				me._node_hs_tooltip.logicBlock_borderradius();
				me._node_hs_tooltip.logicBlock_textcolor();
				me._node_hs_image.logicBlock_imageborderradius();
				me._chevron_white.logicBlock_visible();
				me._chevron_white.logicBlock_alpha();
				me._center_circle.logicBlock_visible();
				me._center_circle.logicBlock_alpha();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._node_hs_bg.logicBlock_alpha();
			};
			me.ggEvent_varchanged_opt_3d_node_hotspots=function() {
				me._node_hs_anim.logicBlock_visible();
				me._node_hs_bg.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._center_circle.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
			};
			me.ggEvent_varchanged_opt_3d_preview=function() {
				me._hs_preview_image.logicBlock_alpha();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_dark=function() {
				me._node_hs_vr_icon_bg.logicBlock_backgroundcolor();
				me._node_hs_bg.logicBlock_backgroundcolor();
				me._node_hs_tooltip.logicBlock_backgroundcolor();
				me._node_hs_tooltip.logicBlock_textcolor();
			};
			me.ggEvent_varchanged_opt_icon_shape=function() {
				me._node_hs_bg.logicBlock_borderradius();
				me._node_hs_tooltip.logicBlock_borderradius();
				me._node_hs_image.logicBlock_imageborderradius();
			};
			me.ggEvent_varchanged_player_mouse_down=function() {
				me._node_hs_vr_icon_bg.logicBlock_scaling();
				me._node_hs_vr_icon_bg.logicBlock_alpha();
				me._node_hs_bg.logicBlock_alpha();
				me._chevron_white.logicBlock_alpha();
				me._center_circle.logicBlock_alpha();
			};
			me.ggEvent_varchanged_resp_phone=function() {
				me._node_hs_bg.logicBlock_alpha();
			};
			me.ggEvent_varchanged_right_open=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__obj = me._ht_node;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		el.userData=el;
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == false)) || 
				((player.getVariableValue('right_open') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
				else {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_hs=document.createElement('div');
		el.ggId="node_hs";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 70px;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_hs.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			}
		}
		me._node_hs.onmouseenter=function (e) {
			me.elementMouseOver['node_hs']=true;
			me._node_hs_vr_icon_bg.logicBlock_zindex();
			me._node_hs_bg.logicBlock_zindex();
			me._node_hs_bg.logicBlock_alpha();
		}
		me._node_hs.onmouseleave=function (e) {
			me.elementMouseOver['node_hs']=false;
			me._node_hs_vr_icon_bg.logicBlock_zindex();
			me._node_hs_bg.logicBlock_zindex();
			me._node_hs_bg.logicBlock_alpha();
		}
		me._node_hs.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_hs_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/node_hs_anim.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="node_hs_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_hs_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs_anim.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_3d_node_hotspots') == false)) && 
				((player.is3dModel() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_hs_anim.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_hs_anim.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_hs_anim.style.transition='';
				if (me._node_hs_anim.ggCurrentLogicStateVisible == 0) {
					me._node_hs_anim.style.visibility=(Number(me._node_hs_anim.style.opacity)>0||!me._node_hs_anim.style.opacity)?'inherit':'hidden';
					me._node_hs_anim.ggVisible=true;
				}
				else {
					me._node_hs_anim.style.visibility="hidden";
					me._node_hs_anim.ggVisible=false;
				}
			}
		}
		me._node_hs_anim.ggUpdatePosition=function (useTransition) {
		}
		me._node_hs.appendChild(me._node_hs_anim);
		el=me._node_hs_vr_icon_bg=document.createElement('div');
		el.ggId="node_hs_vr_icon_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_hs_vr_icon_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs_vr_icon_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('player_mouse_down') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node_hs_vr_icon_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node_hs_vr_icon_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node_hs_vr_icon_bg.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._node_hs_vr_icon_bg.ggCurrentLogicStateScaling == 0) {
					me._node_hs_vr_icon_bg.ggParameter.sx = 0.6;
					me._node_hs_vr_icon_bg.ggParameter.sy = 0.6;
					me._node_hs_vr_icon_bg.style.transform=parameterToTransform(me._node_hs_vr_icon_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._node_hs_vr_icon_bg);}, 250);
				}
				else {
					me._node_hs_vr_icon_bg.ggParameter.sx = 1;
					me._node_hs_vr_icon_bg.ggParameter.sy = 1;
					me._node_hs_vr_icon_bg.style.transform=parameterToTransform(me._node_hs_vr_icon_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._node_hs_vr_icon_bg);}, 250);
				}
			}
		}
		me._node_hs_vr_icon_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_hs_vr_icon_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_hs_vr_icon_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_hs_vr_icon_bg.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._node_hs_vr_icon_bg.ggCurrentLogicStateVisible == 0) {
					me._node_hs_vr_icon_bg.style.visibility=(Number(me._node_hs_vr_icon_bg.style.opacity)>0||!me._node_hs_vr_icon_bg.style.opacity)?'inherit':'hidden';
					me._node_hs_vr_icon_bg.ggVisible=true;
				}
				else {
					me._node_hs_vr_icon_bg.style.visibility="hidden";
					me._node_hs_vr_icon_bg.ggVisible=false;
				}
			}
		}
		me._node_hs_vr_icon_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('player_mouse_down') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_hs_vr_icon_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_hs_vr_icon_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_hs_vr_icon_bg.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._node_hs_vr_icon_bg.ggCurrentLogicStateAlpha == 0) {
					me._node_hs_vr_icon_bg.style.visibility=me._node_hs_vr_icon_bg.ggVisible?'inherit':'hidden';
					me._node_hs_vr_icon_bg.style.opacity=0.2;
				}
				else {
					me._node_hs_vr_icon_bg.style.visibility=me._node_hs_vr_icon_bg.ggVisible?'inherit':'hidden';
					me._node_hs_vr_icon_bg.style.opacity=1;
				}
			}
		}
		me._node_hs_vr_icon_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._node_hs_vr_icon_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._node_hs_vr_icon_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._node_hs_vr_icon_bg.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._node_hs_vr_icon_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._node_hs_vr_icon_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._node_hs_vr_icon_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._node_hs_vr_icon_bg.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['node_hs'] == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._node_hs_vr_icon_bg.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._node_hs_vr_icon_bg.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				me._node_hs_vr_icon_bg.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms, background-color 0s';
				if (me._node_hs_vr_icon_bg.ggCurrentLogicStateZIndex == 0) {
					me._node_hs_vr_icon_bg.style.zIndex = 1;
				}
				else {
					me._node_hs_vr_icon_bg.style.zIndex = 'auto';
				}
			}
		}
		me._node_hs_vr_icon_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_hs_vr_icon=document.createElement('div');
		els=me._node_hs_vr_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXRhcmdldCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSIjNGU0ZDRkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuNSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPgogPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNiIvPgogPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMiIvPgo8L3N2Zz4K';
		me._node_hs_vr_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_hs_vr_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_hs_vr_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs_vr_icon.ggUpdatePosition=function (useTransition) {
		}
		me._node_hs_vr_icon_bg.appendChild(me._node_hs_vr_icon);
		me._node_hs.appendChild(me._node_hs_vr_icon_bg);
		el=me._node_hs_bg=document.createElement('div');
		el.ggId="node_hs_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 99px;';
		hs+='left : calc(50% - ((99px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((99px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_hs_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_3d_node_hotspots') == false)) || 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_hs_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_hs_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_hs_bg.style.transition='opacity 500ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._node_hs_bg.ggCurrentLogicStateVisible == 0) {
					me._node_hs_bg.style.visibility=(Number(me._node_hs_bg.style.opacity)>0||!me._node_hs_bg.style.opacity)?'inherit':'hidden';
					me._node_hs_bg.ggVisible=true;
				}
				else {
					me._node_hs_bg.style.visibility="hidden";
					me._node_hs_bg.ggVisible=false;
				}
			}
		}
		me._node_hs_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['node_hs'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.hotspot.closestToCenter == true)) && 
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getVariableValue('player_mouse_down') == true)) && 
				((player.is3dModel() == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_hs_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_hs_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_hs_bg.style.transition='opacity 500ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._node_hs_bg.ggCurrentLogicStateAlpha == 0) {
					me._node_hs_bg.style.visibility=me._node_hs_bg.ggVisible?'inherit':'hidden';
					me._node_hs_bg.style.opacity=1;
				}
				else if (me._node_hs_bg.ggCurrentLogicStateAlpha == 1) {
					me._node_hs_bg.style.visibility=me._node_hs_bg.ggVisible?'inherit':'hidden';
					me._node_hs_bg.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._node_hs_bg.style.opacity == 0.0) { me._node_hs_bg.style.visibility="hidden"; } }, 505);
					me._node_hs_bg.style.opacity=0;
				}
			}
		}
		me._node_hs_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._node_hs_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._node_hs_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._node_hs_bg.style.transition='opacity 500ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._node_hs_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._node_hs_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._node_hs_bg.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._node_hs_bg.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._node_hs_bg.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._node_hs_bg.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._node_hs_bg.style.transition='opacity 500ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._node_hs_bg.ggCurrentLogicStateBorderRadius == 0) {
					me._node_hs_bg.style.borderRadius="10px";
				}
				else if (me._node_hs_bg.ggCurrentLogicStateBorderRadius == 1) {
					me._node_hs_bg.style.borderRadius="50px";
				}
				else {
					me._node_hs_bg.style.borderRadius="0px";
				}
			}
		}
		me._node_hs_bg.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['node_hs'] == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._node_hs_bg.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._node_hs_bg.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				me._node_hs_bg.style.transition='opacity 500ms ease 0ms, background-color 0s, border-radius 0s';
				if (me._node_hs_bg.ggCurrentLogicStateZIndex == 0) {
					me._node_hs_bg.style.zIndex = 1;
				}
				else {
					me._node_hs_bg.style.zIndex = 'auto';
				}
			}
		}
		me._node_hs_bg.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._node_hs_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_hs_tooltip=document.createElement('div');
		els=me._node_hs_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_hs_tooltip";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='color : rgba(77,77,77,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 38px 15px 38px 105px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._node_hs_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_hs_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_hs_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._node_hs_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_hs_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_hs_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_hs_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_hs_tooltip.style.transition='background-color 0s, border-radius 0s, color 0s';
				if (me._node_hs_tooltip.ggCurrentLogicStateVisible == 0) {
					me._node_hs_tooltip.style.visibility="hidden";
					me._node_hs_tooltip.ggVisible=false;
				}
				else {
					me._node_hs_tooltip.style.visibility=(Number(me._node_hs_tooltip.style.opacity)>0||!me._node_hs_tooltip.style.opacity)?'inherit':'hidden';
					me._node_hs_tooltip.ggVisible=true;
				}
			}
		}
		me._node_hs_tooltip.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._node_hs_tooltip.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._node_hs_tooltip.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._node_hs_tooltip__text.style.transition='background-color 0s, border-radius 0s, color 0s';
				if (me._node_hs_tooltip.ggCurrentLogicStateBackgroundColor == 0) {
					me._node_hs_tooltip__text.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._node_hs_tooltip__text.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._node_hs_tooltip.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateBorderRadius = 1;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me._node_hs_tooltip.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me._node_hs_tooltip.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me._node_hs_tooltip.style.transition='background-color 0s, border-radius 0s, color 0s';
				if (me._node_hs_tooltip.ggCurrentLogicStateBorderRadius == 0) {
					me._node_hs_tooltip__text.style.borderRadius="10px";
				}
				else if (me._node_hs_tooltip.ggCurrentLogicStateBorderRadius == 1) {
					me._node_hs_tooltip__text.style.borderRadius="50px";
				}
				else {
					me._node_hs_tooltip__text.style.borderRadius="0px";
				}
			}
		}
		me._node_hs_tooltip.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('opt_dark') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._node_hs_tooltip.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._node_hs_tooltip.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._node_hs_tooltip__text.style.transition='background-color 0s, border-radius 0s, color 0s';
				if (me._node_hs_tooltip.ggCurrentLogicStateTextColor == 0) {
					me._node_hs_tooltip.style.color="rgba(255,255,255,1)";
				}
				else {
					me._node_hs_tooltip.style.color="rgba(77,77,77,1)";
				}
			}
		}
		me._node_hs_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._node_hs_bg.appendChild(me._node_hs_tooltip);
		el=me._node_hs_image=document.createElement('div');
		els=me._node_hs_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/node_hs_image_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_hs_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 85px;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_hs_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_hs_image.logicBlock_imageborderradius = function() {
			var newLogicStateImageBorderRadius;
			if (
				((player.getVariableValue('opt_icon_shape') == Number("1")))
			)
			{
				newLogicStateImageBorderRadius = 0;
			}
			else if (
				((player.getVariableValue('opt_icon_shape') == Number("2")))
			)
			{
				newLogicStateImageBorderRadius = 1;
			}
			else {
				newLogicStateImageBorderRadius = -1;
			}
			if (me._node_hs_image.ggCurrentLogicStateImageBorderRadius != newLogicStateImageBorderRadius) {
				me._node_hs_image.ggCurrentLogicStateImageBorderRadius = newLogicStateImageBorderRadius;
				me._node_hs_image.ggSubElement.style.transition='border-radius 0s';
				if (me._node_hs_image.ggCurrentLogicStateImageBorderRadius == 0) {
					me._node_hs_image.ggSubElement.style.borderRadius="4px";
				}
				else if (me._node_hs_image.ggCurrentLogicStateImageBorderRadius == 1) {
					me._node_hs_image.ggSubElement.style.borderRadius="50px";
				}
				else {
					me._node_hs_image.ggSubElement.style.borderRadius="0px";
				}
			}
		}
		me._node_hs_image.ggUpdatePosition=function (useTransition) {
		}
		me._node_hs_bg.appendChild(me._node_hs_image);
		me._node_hs.appendChild(me._node_hs_bg);
		me._ht_node.appendChild(me._node_hs);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9Imljb25lIGNoaWFyZSIgaWQ9Imljb25lX2NoaWFyZSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgODAgODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlN2U2ZTY7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7CiAgICAgIH0KICAgID'+
			'wvc3R5bGU+CiA8L2RlZnM+CiA8cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjYwLjY0IDU4LjE2IDM5Ljk4IDM3LjU0IDM5Ljk4IDM3LjU0IDE5LjM2IDU4LjE2Ii8+CiA8cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjYwLjY0IDM4LjQ2IDM5Ljk4IDE3Ljg0IDM5Ljk4IDE3Ljg0IDE5LjM2IDM4LjQ2Ii8+Cjwvc3ZnPgo=';
		me._chevron_white__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='opacity : 0.80002;';
		hs+='position : absolute;';
		hs+='top : -150px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != "")) || 
				((player.getVariableValue('opt_3d_node_hotspots') == false)) || 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style.transition='opacity 200ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('player_mouse_down') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.elementMouseOver['chevron_white'] == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style.transition='opacity 200ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.2;
				}
				else if (me._chevron_white.ggCurrentLogicStateAlpha == 1) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.80002;
				}
			}
		}
		me._chevron_white.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
		}
		me._chevron_white.onmouseenter=function (e) {
			me.elementMouseOver['chevron_white']=true;
			me._chevron_white.logicBlock_alpha();
		}
		me._chevron_white.onmouseleave=function (e) {
			me.elementMouseOver['chevron_white']=false;
			me._chevron_white.logicBlock_alpha();
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._center_circle=document.createElement('div');
		el.ggId="center_circle";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #e7e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 45px;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((90px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -45px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._center_circle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._center_circle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != "")) || 
				((player.getVariableValue('opt_3d_node_hotspots') == false)) || 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._center_circle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._center_circle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._center_circle.style.transition='opacity 200ms ease 0ms';
				if (me._center_circle.ggCurrentLogicStateVisible == 0) {
					me._center_circle.style.visibility="hidden";
					me._center_circle.ggVisible=false;
				}
				else {
					me._center_circle.style.visibility=(Number(me._center_circle.style.opacity)>0||!me._center_circle.style.opacity)?'inherit':'hidden';
					me._center_circle.ggVisible=true;
				}
			}
		}
		me._center_circle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('player_mouse_down') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._center_circle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._center_circle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._center_circle.style.transition='opacity 200ms ease 0ms';
				if (me._center_circle.ggCurrentLogicStateAlpha == 0) {
					me._center_circle.style.visibility=me._center_circle.ggVisible?'inherit':'hidden';
					me._center_circle.style.opacity=0.2;
				}
				else {
					me._center_circle.style.visibility=me._center_circle.ggVisible?'inherit':'hidden';
					me._center_circle.style.opacity=1;
				}
			}
		}
		me._center_circle.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._center_circle);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_3d_node_hotspots') == true)) && 
				((player.is3dModel() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style.transition='opacity 200ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 205);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs='';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hs_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me._hs_preview_image.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style.transition='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs='';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.is3dModel() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style.transition='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		el=me.__3d_code=document.createElement('div');
		el.ggId="_3d_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		el.userData=el;
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3d_code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__3d_code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__3d_code);
		me.elementMouseOver['ht_node']=false;
		me._ht_node.logicBlock_visible();
		me.elementMouseOver['node_hs']=false;
		me._node_hs_anim.logicBlock_visible();
		me._node_hs_vr_icon_bg.logicBlock_scaling();
		me._node_hs_vr_icon_bg.logicBlock_visible();
		me._node_hs_vr_icon_bg.logicBlock_alpha();
		me._node_hs_vr_icon_bg.logicBlock_backgroundcolor();
		me._node_hs_vr_icon_bg.logicBlock_zindex();
		me._node_hs_bg.logicBlock_visible();
		me._node_hs_bg.logicBlock_alpha();
		me._node_hs_bg.logicBlock_backgroundcolor();
		me._node_hs_bg.logicBlock_borderradius();
		me._node_hs_bg.logicBlock_zindex();
		me._node_hs_tooltip.logicBlock_visible();
		me._node_hs_tooltip.logicBlock_backgroundcolor();
		me._node_hs_tooltip.logicBlock_borderradius();
		me._node_hs_tooltip.logicBlock_textcolor();
		me._node_hs_image.logicBlock_imageborderradius();
		me.elementMouseOver['chevron_white']=false;
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha();
		me._center_circle.logicBlock_visible();
		me._center_circle.logicBlock_alpha();
		me._hs_preview_image.logicBlock_alpha();
		me._hs_tt.logicBlock_visible();
		me._tt_ht_3d.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
		el = me.__3d_code;
		javascript:"";
if (player.getVariableValue('opt_3d_node_hotspots') && !player.is3dModel()) {
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var factor = player.getVariableValue('vis_thumbnails_desktop') ? 1/7 : 1/6;
var y=vs.height * (factor*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
};
			me.ggEvent_activehotspotchanged=function() {
				me._node_hs_tooltip.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._center_circle.logicBlock_visible();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._node_hs_anim.logicBlock_visible();
				me._node_hs_vr_icon_bg.logicBlock_scaling();
				me._node_hs_vr_icon_bg.logicBlock_visible();
				me._node_hs_vr_icon_bg.logicBlock_alpha();
				me._node_hs_vr_icon_bg.logicBlock_backgroundcolor();
				me._node_hs_bg.logicBlock_visible();
				me._node_hs_bg.logicBlock_alpha();
				me._node_hs_bg.logicBlock_backgroundcolor();
				me._node_hs_bg.logicBlock_borderradius();
				me._node_hs_tooltip.logicBlock_visible();
				me._node_hs_tooltip.logicBlock_backgroundcolor();
				me._node_hs_tooltip.logicBlock_borderradius();
				me._node_hs_tooltip.logicBlock_textcolor();
				me._node_hs_image.logicBlock_imageborderradius();
				me._chevron_white.logicBlock_visible();
				me._chevron_white.logicBlock_alpha();
				me._center_circle.logicBlock_visible();
				me._center_circle.logicBlock_alpha();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._node_hs_anim.logicBlock_visible();
				me._node_hs_vr_icon_bg.logicBlock_scaling();
				me._node_hs_vr_icon_bg.logicBlock_alpha();
				me._node_hs_vr_icon_bg.logicBlock_backgroundcolor();
				me._node_hs_bg.logicBlock_visible();
				me._node_hs_bg.logicBlock_alpha();
				me._node_hs_bg.logicBlock_backgroundcolor();
				me._node_hs_bg.logicBlock_borderradius();
				me._node_hs_tooltip.logicBlock_visible();
				me._node_hs_tooltip.logicBlock_backgroundcolor();
				me._node_hs_tooltip.logicBlock_borderradius();
				me._node_hs_tooltip.logicBlock_textcolor();
				me._node_hs_image.logicBlock_imageborderradius();
				me._chevron_white.logicBlock_visible();
				me._chevron_white.logicBlock_alpha();
				me._center_circle.logicBlock_visible();
				me._center_circle.logicBlock_alpha();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_hotspotsupdated=function() {
				me._node_hs_bg.logicBlock_alpha();
			};
			me.ggEvent_varchanged_opt_3d_node_hotspots=function() {
				me._node_hs_anim.logicBlock_visible();
				me._node_hs_bg.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._center_circle.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
			};
			me.ggEvent_varchanged_opt_3d_preview=function() {
				me._hs_preview_image.logicBlock_alpha();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_dark=function() {
				me._node_hs_vr_icon_bg.logicBlock_backgroundcolor();
				me._node_hs_bg.logicBlock_backgroundcolor();
				me._node_hs_tooltip.logicBlock_backgroundcolor();
				me._node_hs_tooltip.logicBlock_textcolor();
			};
			me.ggEvent_varchanged_opt_icon_shape=function() {
				me._node_hs_bg.logicBlock_borderradius();
				me._node_hs_tooltip.logicBlock_borderradius();
				me._node_hs_image.logicBlock_imageborderradius();
			};
			me.ggEvent_varchanged_player_mouse_down=function() {
				me._node_hs_vr_icon_bg.logicBlock_scaling();
				me._node_hs_vr_icon_bg.logicBlock_alpha();
				me._node_hs_bg.logicBlock_alpha();
				me._chevron_white.logicBlock_alpha();
				me._center_circle.logicBlock_alpha();
			};
			me.ggEvent_varchanged_resp_phone=function() {
				me._node_hs_bg.logicBlock_alpha();
			};
			me.ggEvent_varchanged_right_open=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				hotspotTemplates['SkinHotspotClass_ht_node'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_node'].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	me.addSkinHotspot3d=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node__3d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				hotspotTemplates['SkinHotspotClass_ht_node__3d'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_node__3d'].push(hsinst);
		}
		return (hsinst ? hsinst.__obj : null);
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: SourceSans3, Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal } .blur { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); } .info_headline { font-size: 36px; font-weight: 600; text-align: center; margin: 0px; } .info_body { font-size: 18px; font-weight: regular; text-align: left; margin: 0px; } .info_headline_mobile { font-size: 28px; font-weight: 600; text-align: center; margin: 0px; } .info_body_mobile { font-size: 16px; font-weight: regular; text-align: left; margin: 0px; } .popup_headline { font-size: 24px; font-weight: 600; } .popup_body { font-size: 18px; font-weight: regular; } .popup_headline_mobile { font-size: 24px; font-weight: 600; } .popup_body_mobile { font-size: 16px; font-weight: regular; } .text_shadow { -webkit-filter: drop-shadow( 2px 2px 3px rgba(0, 0, 0, 0.6)); filter: drop-shadow( 2px 2px 3px rgba(0, 0, 0, 0.6)); } .text_glow { -webkit-filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 1.0)); filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 1.0)); }@font-face { font-display: auto; font-family: "SourceSans3"; font-style: normal; font-weight: 400; src: url("$(skinbase)fonts/source-sans-3-latin-regular.woff2") format("woff2"); } @font-face { font-display: auto; font-family: "SourceSans3"; font-style: normal; font-weight: 600; src: url("$(skinbase)fonts/source-sans-3-latin-600.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		if (me.fontsLoaded < 3) {
			me.updateSize(me.divSkin);
			me.fontsLoaded++;
		}
	}
};