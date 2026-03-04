// Garden Gnome Software - Skin
// Pano2VR 8.0 beta 2/22072
// Filename: Tours 1.ggsk
// Generated 2026-03-04T04:37:52Z

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hotspots', 2, true, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('open_info_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_image_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_youtube_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_vimeo_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_file_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_url_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('hide_lottie_index', 1, 0, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_menu', 2, true, { ignoreInState: 1  });
	player.addVariable('pos_menu_button', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_menu_button_vert', 1, 0, { ignoreInState: 0  });
	player.addVariable('num_button_rows', 1, 1.00, { ignoreInState: 0  });
	player.addVariable('has_categories', 2, false, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone_landscape', 2, false, { ignoreInState: 1  });
	player.addVariable('model_loading', 2, false, { ignoreInState: 0  });
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
		styleTag.appendChild(document.createTextNode("@font-face { font-family: 'Montserrat'; font-style: normal; font-weight: 400; src: local(''), url('fonts/montserrat-latin-regular.woff2') format('woff2'); } @font-face { font-family: 'Montserrat'; font-style: normal; font-weight: 600; src: local(''), url('fonts/montserrat-latin-600.woff2') format('woff2'); }"));
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
				((player.getVariableValue('vis_pdf_popup') == false)) && 
				((player.getVariableValue('vis_url_popup') == false)) && 
				((player.getVariableValue('vis_video_popup_file') == false)) && 
				((player.getVariableValue('vis_video_popup_url') == false)) && 
				((player.getVariableValue('vis_video_popup_youtube') == false)) && 
				((player.getVariableValue('vis_video_popup_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
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
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
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
		me._variable_resp_phone_landscape = {};
		me._variable_resp_phone_landscape.ggCurrentLogicState = -1;
		me._variable_resp_phone_landscape.logicBlock = function() {
			var newLogicState_resp_phone_landscape;
			if (
				((player.getViewerSize(true).height < 800)) && 
				((player.getViewerSize(true).width / player.getViewerSize(true).height > 1)) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicState_resp_phone_landscape = 0;
			}
			else {
				newLogicState_resp_phone_landscape = -1;
			}
			if (me._variable_resp_phone_landscape.ggCurrentLogicState != newLogicState_resp_phone_landscape) {
				me._variable_resp_phone_landscape.ggCurrentLogicState = newLogicState_resp_phone_landscape;
				if (me._variable_resp_phone_landscape.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_landscape', true);
				}
				else {
					player.setVariableValue('resp_phone_landscape', false);
				}
			}
		}
		el=me._menu=document.createElement('div');
		el.ggId="menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._menu.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateSize == 0) {
					me._menu.style.width='100%';
					me._menu.style.height='100%';
					skin.updateSize(me._menu);
				}
				else {
					me._menu.style.width='240px';
					me._menu.style.height='100%';
					skin.updateSize(me._menu);
				}
			}
		}
		me._menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateVisible == 0) {
					me._menu.style.visibility=(Number(me._menu.style.opacity)>0||!me._menu.style.opacity)?'inherit':'hidden';
					me._menu.ggVisible=true;
				}
				else {
					me._menu.style.visibility="hidden";
					me._menu.ggVisible=false;
				}
			}
		}
		me._menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateAlpha == 0) {
					me._menu.style.visibility=me._menu.ggVisible?'inherit':'hidden';
					me._menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu.style.opacity == 0.0) { me._menu.style.visibility="hidden"; } }, 505);
					me._menu.style.opacity=0;
				}
			}
		}
		me._menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_bg=document.createElement('div');
		el.ggId="menu_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
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
		me._menu_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_bg.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._menu_bg);
		el=me._button_container=document.createElement('div');
		el.ggId="button_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_toggle=document.createElement('div');
		el.ggId="gyro_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getGyroAvailable() == true)) && 
				((player.getVariableValue('opt_gyro') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_toggle.style.transition='';
				if (me._gyro_toggle.ggCurrentLogicStateVisible == 0) {
					me._gyro_toggle.style.visibility=(Number(me._gyro_toggle.style.opacity)>0||!me._gyro_toggle.style.opacity)?'inherit':'hidden';
					me._gyro_toggle.ggVisible=true;
				}
				else {
					me._gyro_toggle.style.visibility="hidden";
					me._gyro_toggle.ggVisible=false;
				}
			}
		}
		me._gyro_toggle.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xX2NvcHkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluay'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjMsMTJjMC01LjQtNC4yLTkuOS05LjYtMTAuM1YxLjFjMC0wLjQtMC4zLTAuNy0wLjctMC43cy0wLjcsMC4zLTAuNywwLjd2MC42QzUuNiwyLjEsMS4zLDcsMS42LDEyLjYmI3hkOyYjeGE7JiN4OTtjMC4zLDUuMiw0LjUsOS4zLDkuNiw5LjZ2MC42YzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdsMCwwdi0wLjZDMTguMSwyMS45LDIyLjMsMTcuNCwyMi4zLDEyeiBNMTkuMyw4JiN4ZDsmI3hhOyYj'+
			'eDk7Yy0yLjEtMS00LjMtMS42LTYuNi0xLjZWMy43QzE1LjUsNCwxOCw1LjYsMTkuMyw4TDE5LjMsOHogTTExLjMsMy43djIuN0M5LDYuNCw2LjgsNyw0LjcsOEM2LDUuNiw4LjUsNCwxMS4zLDMuN0wxMS4zLDMuN3omI3hkOyYjeGE7JiN4OTsgTTEyLDIwLjNjLTMsMC01LjgtMS43LTcuMy00LjNjMS4xLDAuNiwyLjIsMSwzLjQsMS4yYzEsMC4yLDIuMSwwLjMsMy4xLDAuNHYxLjdjMCwwLjMsMC4yLDAuNSwwLjUsMC41YzAuMSwwLDAuMy0wLjEsMC40LTAuMiYjeGQ7JiN4YTsmI3g5O2wyLjgtMi44YzAuMi0wLjIsMC4yLTAuNSwwLTAuN2MwLDAsMCwwLDAsMGwtMi44LTIuOGMtMC4yLTAuMi0wLj'+
			'UtMC4yLTAuNywwYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuNHYxLjljLTAuOSwwLTEuOC0wLjEtMi43LTAuMyYjeGQ7JiN4YTsmI3g5O2MtMi45LTAuNi00LjktMS45LTQuOS0zLjNjMC0xLjYsMy4xLTMuNCw3LjYtMy42VjEyYzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdWOC40YzQuNSwwLjIsNy42LDIsNy42LDMuNiYjeGQ7JiN4YTsmI3g5O2MwLDEuMS0xLjQsMi4yLTMuNiwyLjlsLTAuNiwwLjJjLTAuNSwwLjEtMC45LDAuNy0wLjcsMS4yYzAsMCwwLDAsMCwwYzAuMSwwLjUsMC43LDAuOSwxLjIsMC43YzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7YzAuMi0wLjEsMC41'+
			'LTAuMSwwLjctMC4yYzAuNy0wLjIsMS40LTAuNSwyLTAuOEMxNy44LDE4LjcsMTUsMjAuMywxMiwyMC4zeiIvPgo8L3N2Zz4K';
		me._gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xX2NvcHkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluay'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjMsMTJjMC01LjQtNC4yLTkuOS05LjYtMTAuM1YxLjFjMC0wLjQtMC4zLTAuNy0wLjctMC43cy0wLjcsMC4zLTAuNywwLjd2MC42QzUuNiwyLjEsMS4zLDcsMS42LDEyLjYmI3hkOyYjeGE7JiN4OTtjMC4zLDUuMiw0LjUsOS4zLDkuNiw5LjZ2MC42YzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdsMCwwdi0wLjZDMTguMSwyMS45LDIyLjMsMTcuNCwyMi4zLDEyeiBNMTkuMyw4JiN4ZDsmI3hhOyYj'+
			'eDk7Yy0yLjEtMS00LjMtMS42LTYuNi0xLjZWMy43QzE1LjUsNCwxOCw1LjYsMTkuMyw4TDE5LjMsOHogTTExLjMsMy43djIuN0M5LDYuNCw2LjgsNyw0LjcsOEM2LDUuNiw4LjUsNCwxMS4zLDMuN0wxMS4zLDMuN3omI3hkOyYjeGE7JiN4OTsgTTEyLDIwLjNjLTMsMC01LjgtMS43LTcuMy00LjNjMS4xLDAuNiwyLjIsMSwzLjQsMS4yYzEsMC4yLDIuMSwwLjMsMy4xLDAuNHYxLjdjMCwwLjMsMC4yLDAuNSwwLjUsMC41YzAuMSwwLDAuMy0wLjEsMC40LTAuMiYjeGQ7JiN4YTsmI3g5O2wyLjgtMi44YzAuMi0wLjIsMC4yLTAuNSwwLTAuN2MwLDAsMCwwLDAsMGwtMi44LTIuOGMtMC4yLTAuMi0wLj'+
			'UtMC4yLTAuNywwYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuNHYxLjljLTAuOSwwLTEuOC0wLjEtMi43LTAuMyYjeGQ7JiN4YTsmI3g5O2MtMi45LTAuNi00LjktMS45LTQuOS0zLjNjMC0xLjYsMy4xLTMuNCw3LjYtMy42VjEyYzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdWOC40YzQuNSwwLjIsNy42LDIsNy42LDMuNiYjeGQ7JiN4YTsmI3g5O2MwLDEuMS0xLjQsMi4yLTMuNiwyLjlsLTAuNiwwLjJjLTAuNSwwLjEtMC45LDAuNy0wLjcsMS4yYzAsMCwwLDAsMCwwYzAuMSwwLjUsMC43LDAuOSwxLjIsMC43YzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7YzAuMi0wLjEsMC41'+
			'LTAuMSwwLjctMC4yYzAuNy0wLjIsMS40LTAuNSwyLTAuOEMxNy44LDE4LjcsMTUsMjAuMywxMiwyMC4zeiIvPgo8L3N2Zz4K';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
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
		me._gyro_on.onmouseenter=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_on']=true;
		}
		me._gyro_on.onmouseleave=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_on']=false;
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro_toggle.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8zIj4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMTkuM0wxOS4zLDE5LjNsLTEuNC0xLjRsMCwwTDE2LjksMTdsMCwwbC0xLjQtMS40bDAsMEwxMywxM0wzLjUsMy41Yy0wLjQtMC40LTEtMC40LTEuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40LDAuNC0wLjQsMSwwLDEuNGwxLjMsMS4zQzIuMyw3LjksMS43LDEwLDEuNywxMmMwLDUuNCw0LjIsOS45LDkuNiwxMC4zdjAuNmMwLDAuNCwwLjMsMC43LDAuNywwLjdz'+
			'MC43LTAuMywwLjctMC43bDAsMHYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgtMC4xLDMuNS0wLjcsNS0xLjdsMS4zLDEuM2MwLjQsMC40LDEuMSwwLjMsMS40LTAuMWMwLjMtMC40LDAuMy0wLjksMC0xLjNMMTkuMywxOS4zeiBNNC45LDcuN0w1LDcuOEw0LjcsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNC44LDcuOSw0LjgsNy44LDQuOSw3Ljd6IE0zLjcsMTJjMC0wLjksMS4xLTIsMi44LTIuN2w0LjgsNC44djEuNWMtMC45LDAtMS44LTAuMS0yLjctMC4zQzUuNywxNC43LDMuNywxMy4zLDMuNywxMnogTTEyLDIwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLDAtNS'+
			'44LTEuNy03LjMtNC4zYzEuMSwwLjYsMi4yLDEsMy40LDEuMmMxLDAuMiwyLjEsMC4zLDMuMSwwLjR2MS43YzAsMC4zLDAuMiwwLjUsMC41LDAuNWMwLjEsMCwwLjMtMC4xLDAuNC0wLjJsMi4zLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOEMxNSwxOS45LDEzLjUsMjAuMywxMiwyMC4zeiIvPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy44LDQuOGMxLjEtMC42LDIuMy0xLDMuNS0xLjF2Mi43Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJsMy4yLDMuMlY4LjRjNC41LDAuMiw3LjYsMiw3LjYsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuOS0xLjEsMS45LTIuOCwy'+
			'LjZsMS41LDEuNWwwLjItMC4xYzAsMC4xLTAuMSwwLjEtMC4xLDAuMmwxLjUsMS41YzMuMi00LjcsMS45LTExLjEtMi44LTE0LjNjLTEuNS0xLTMuMi0xLjYtNS4xLTEuN1YxLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjctMC43LTAuN3MtMC43LDAuMy0wLjcsMC43djAuNmMtMS44LDAuMS0zLjUsMC43LTUsMS43TDcuOCw0Ljh6IE0xMi43LDMuN0MxNS41LDQsMTgsNS42LDE5LjMsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTItMS00LjMtMS42LTYuNi0xLjZWMy43eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8zIj4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMTkuM0wxOS4zLDE5LjNsLTEuNC0xLjRsMCwwTDE2LjksMTdsMCwwbC0xLjQtMS40bDAsMEwxMywxM0wzLjUsMy41Yy0wLjQtMC40LTEtMC40LTEuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40LDAuNC0wLjQsMSwwLDEuNGwxLjMsMS4zQzIuMyw3LjksMS43LDEwLDEuNywxMmMwLDUuNCw0LjIsOS45LDkuNiwxMC4zdjAuNmMwLDAuNCwwLjMsMC43LDAuNywwLjdz'+
			'MC43LTAuMywwLjctMC43bDAsMHYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgtMC4xLDMuNS0wLjcsNS0xLjdsMS4zLDEuM2MwLjQsMC40LDEuMSwwLjMsMS40LTAuMWMwLjMtMC40LDAuMy0wLjksMC0xLjNMMTkuMywxOS4zeiBNNC45LDcuN0w1LDcuOEw0LjcsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNC44LDcuOSw0LjgsNy44LDQuOSw3Ljd6IE0zLjcsMTJjMC0wLjksMS4xLTIsMi44LTIuN2w0LjgsNC44djEuNWMtMC45LDAtMS44LTAuMS0yLjctMC4zQzUuNywxNC43LDMuNywxMy4zLDMuNywxMnogTTEyLDIwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLDAtNS'+
			'44LTEuNy03LjMtNC4zYzEuMSwwLjYsMi4yLDEsMy40LDEuMmMxLDAuMiwyLjEsMC4zLDMuMSwwLjR2MS43YzAsMC4zLDAuMiwwLjUsMC41LDAuNWMwLjEsMCwwLjMtMC4xLDAuNC0wLjJsMi4zLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOEMxNSwxOS45LDEzLjUsMjAuMywxMiwyMC4zeiIvPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy44LDQuOGMxLjEtMC42LDIuMy0xLDMuNS0xLjF2Mi43Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJsMy4yLDMuMlY4LjRjNC41LDAuMiw3LjYsMiw3LjYsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuOS0xLjEsMS45LTIuOCwy'+
			'LjZsMS41LDEuNWwwLjItMC4xYzAsMC4xLTAuMSwwLjEtMC4xLDAuMmwxLjUsMS41YzMuMi00LjcsMS45LTExLjEtMi44LTE0LjNjLTEuNS0xLTMuMi0xLjYtNS4xLTEuN1YxLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjctMC43LTAuN3MtMC43LDAuMy0wLjcsMC43djAuNmMtMS44LDAuMS0zLjUsMC43LTUsMS43TDcuOCw0Ljh6IE0xMi43LDMuN0MxNS41LDQsMTgsNS42LDE5LjMsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTItMS00LjMtMS42LTYuNi0xLjZWMy43eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
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
		me._gyro_off.onmouseenter=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_off']=true;
		}
		me._gyro_off.onmouseleave=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_off']=false;
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro_toggle.appendChild(me._gyro_off);
		me._button_container.appendChild(me._gyro_toggle);
		el=me._btn_vr=document.createElement('div');
		els=me._btn_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi4yLDcuNmMtMC4yLTAuOS0xLjEtMS41LTItMS41SDE4Yy0xLjUtMS41LTMuNi0yLjUtNi0yLjVzLTQuNSwxLTYsMi41SDMuOGMtMC45LDAtMS44LDAuNi0yLDEuNSYjeGQ7JiN4YTsmI3g5O2MtMC4zLDAuOS0wLjQsMi4xLTAuNCwzLjZjMCwxLjQsMC4xLDIuNiwwLjQsMy42YzAuMiwwLjksMS4xLDEuNSwyLDEuNWgwLjljMS41LDIuNSw0LjIsNC4yLDcuMyw0LjJzNS44LTEuNyw3LjMtNC4yaDAuOSYjeGQ7JiN4YTsmI3g5O2Mw'+
			'LjksMCwxLjgtMC42LDItMS41YzAuMy0wLjksMC40LTIuMSwwLjQtMy42QzIyLjYsOS43LDIyLjUsOC41LDIyLjIsNy42eiBNMTEuMSwxMi43TDExLjEsMTIuN0wxMS4xLDEyLjdMMTEuMSwxMi43eiBNMjAuMywxNC4yJiN4ZDsmI3hhOyYjeDk7TDIwLjMsMTQuMmgtNS4xbC0xLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuNi0wLjhsMCwwYy0wLjYsMC0xLjIsMC4zLTEuNiwwLjhsLTEuOCwyLjJIMy44YzAsMC0wLjEsMC0wLjEtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0wLjEtMC41LTAuMy0xLjUtMC4zLTNzMC4yLTIuNSwwLjMtM2wwLjEtMC4xaDE2LjRjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLDAuNSwwLj'+
			'MsMS41LDAuMywzQzIwLjYsMTIuNywyMC40LDEzLjcsMjAuMywxNC4yeiIvPgo8L3N2Zz4K';
		me._btn_vr__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi4yLDcuNmMtMC4yLTAuOS0xLjEtMS41LTItMS41SDE4Yy0xLjUtMS41LTMuNi0yLjUtNi0yLjVzLTQuNSwxLTYsMi41SDMuOGMtMC45LDAtMS44LDAuNi0yLDEuNSYjeGQ7JiN4YTsmI3g5O2MtMC4zLDAuOS0wLjQsMi4xLTAuNCwzLjZjMCwxLjQsMC4xLDIuNiwwLjQsMy42YzAuMiwwLjksMS4xLDEuNSwyLDEuNWgwLjljMS41LDIuNSw0LjIsNC4yLDcuMyw0LjJzNS44LTEuNyw3LjMtNC4yaDAuOSYjeGQ7JiN4YTsmI3g5O2Mw'+
			'LjksMCwxLjgtMC42LDItMS41YzAuMy0wLjksMC40LTIuMSwwLjQtMy42QzIyLjYsOS43LDIyLjUsOC41LDIyLjIsNy42eiBNMTEuMSwxMi43TDExLjEsMTIuN0wxMS4xLDEyLjdMMTEuMSwxMi43eiBNMjAuMywxNC4yJiN4ZDsmI3hhOyYjeDk7TDIwLjMsMTQuMmgtNS4xbC0xLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuNi0wLjhsMCwwYy0wLjYsMC0xLjIsMC4zLTEuNiwwLjhsLTEuOCwyLjJIMy44YzAsMC0wLjEsMC0wLjEtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0wLjEtMC41LTAuMy0xLjUtMC4zLTNzMC4yLTIuNSwwLjMtM2wwLjEtMC4xaDE2LjRjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLDAuNSwwLj'+
			'MsMS41LDAuMywzQzIwLjYsMTIuNywyMC40LDEzLjcsMjAuMywxNC4yeiIvPgo8L3N2Zz4K';
		me._btn_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_vr.style.transition='';
				if (me._btn_vr.ggCurrentLogicStateVisible == 0) {
					me._btn_vr.style.visibility=(Number(me._btn_vr.style.opacity)>0||!me._btn_vr.style.opacity)?'inherit':'hidden';
					me._btn_vr.ggVisible=true;
				}
				else {
					me._btn_vr.style.visibility="hidden";
					me._btn_vr.ggVisible=false;
				}
			}
		}
		me._btn_vr.onclick=function (e) {
			player.enterVR();
		}
		me._btn_vr.onmouseenter=function (e) {
			me._btn_vr__img.style.visibility='hidden';
			me._btn_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_vr']=true;
		}
		me._btn_vr.onmouseleave=function (e) {
			me._btn_vr__img.style.visibility='inherit';
			me._btn_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_vr']=false;
		}
		me._btn_vr.ggUpdatePosition=function (useTransition) {
		}
		me._button_container.appendChild(me._btn_vr);
		el=me._btn_languages=document.createElement('div');
		els=me._btn_languages__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40'+
			'LTAuNi0wLjhsLTEuNC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS'+
			'0xLjJjMC4zLTAuMywwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4y'+
			'LTAuOCwwLjUtMS4xbDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiLz4KPC9zdmc+Cg==';
		me._btn_languages__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_languages__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40'+
			'LTAuNi0wLjhsLTEuNC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS'+
			'0xLjJjMC4zLTAuMywwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4y'+
			'LTAuOCwwLjUtMS4xbDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiLz4KPC9zdmc+Cg==';
		me._btn_languages__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_languages";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_languages.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_languages.logicBlock_visible = function() {
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
			if (me._btn_languages.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_languages.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_languages.style.transition='';
				if (me._btn_languages.ggCurrentLogicStateVisible == 0) {
					me._btn_languages.style.visibility=(Number(me._btn_languages.style.opacity)>0||!me._btn_languages.style.opacity)?'inherit':'hidden';
					me._btn_languages.ggVisible=true;
				}
				else {
					me._btn_languages.style.visibility="hidden";
					me._btn_languages.ggVisible=false;
				}
			}
		}
		me._btn_languages.onclick=function (e) {
			player.setVariableValue('vis_languages', !player.getVariableValue('vis_languages'));
		}
		me._btn_languages.onmouseenter=function (e) {
			me._btn_languages__img.style.visibility='hidden';
			me._btn_languages__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_languages']=true;
		}
		me._btn_languages.onmouseleave=function (e) {
			me._btn_languages__img.style.visibility='inherit';
			me._btn_languages__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_languages']=false;
		}
		me._btn_languages.ggUpdatePosition=function (useTransition) {
		}
		me._button_container.appendChild(me._btn_languages);
		el=me._hotspots_toggle=document.createElement('div');
		el.ggId="hotspots_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots_toggle.onclick=function (e) {
			if (
				(
					((player.getPointHotspotIds().length > 0))
				)
			) {
				player.setVariableValue('vis_hotspots', !player.getVariableValue('vis_hotspots'));
			}
		}
		me._hotspots_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspots_on=document.createElement('div');
		el.ggId="hotspots_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots_on.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspots_on_disabled=document.createElement('div');
		els=me._hotspots_on_disabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjYjNiM2IzIiBmaWxsLW9wYWNpdHk9IjEiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogPHBhdGggZD0iTTEyIDRDNyA0IDIuNzMgNy4xMSAxIDExLjUgMi43MyAxNS44OSA3IDE5IDEyIDE5czkuMjctMy4xMSAxMS03LjVDMjEuMjcgNy4xMSAxNyA0IDEyIDR6bTAgMTIuNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6bTAtOGMtMS42NiAwLTMgMS4zNC'+
			'0zIDNzMS4zNCAzIDMgMyAzLTEuMzQgMy0zLTEuMzQtMy0zLTN6Ii8+Cjwvc3ZnPgo=';
		me._hotspots_on_disabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hotspots_on_disabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_on_disabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots_on_disabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false)) && 
				((player.getPointHotspotIds().length == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_on_disabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_on_disabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_on_disabled.style.transition='';
				if (me._hotspots_on_disabled.ggCurrentLogicStateVisible == 0) {
					me._hotspots_on_disabled.style.visibility=(Number(me._hotspots_on_disabled.style.opacity)>0||!me._hotspots_on_disabled.style.opacity)?'inherit':'hidden';
					me._hotspots_on_disabled.ggVisible=true;
				}
				else {
					me._hotspots_on_disabled.style.visibility="hidden";
					me._hotspots_on_disabled.ggVisible=false;
				}
			}
		}
		me._hotspots_on_disabled.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_on.appendChild(me._hotspots_on_disabled);
		el=me._hotspots_on_enabled=document.createElement('div');
		els=me._hotspots_on_enabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDxwYXRoIGQ9Ik0xMiA0QzcgNCAyLjczIDcuMTEgMSAxMS41IDIuNzMgMTUuODkgNyAxOSAxMiAxOXM5LjI3LTMuMTEgMTEtNy41QzIxLjI3IDcuMTEgMTcgNCAxMiA0em0wIDEyLjVjLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNS0yLjI0IDUtNSA1em0wLThjLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDMgMy'+
			'0xLjM0IDMtMy0xLjM0LTMtMy0zeiIvPgo8L3N2Zz4K';
		me._hotspots_on_enabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hotspots_on_enabled__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSwzQzUuMiwzLDIsNS4zLDAuOCw4LjZDMiwxMS45LDUuMiwxNC4yLDksMTQuMnM3LTIuMyw4LjItNS42QzE2LDUuMywxMi44LDMsOSwzeiBNOSwxMi40JiN4ZDsmI3hhOyYjeDk7Yy0yLjEsMC0zLjgtMS43LTMuOC0zLjhTNi45LDQuOSw5LDQuOXMzLjgsMS43LDMuOCwzLjhTMTEuMSwxMi40LDksMTIuNHogTTksNi40'+
			'Yy0xLjIsMC0yLjIsMS0yLjIsMi4yczEsMi4yLDIuMiwyLjJzMi4yLTEsMi4yLTIuMiYjeGQ7JiN4YTsmI3g5O1MxMC4yLDYuNCw5LDYuNHoiLz4KPC9zdmc+Cg==';
		me._hotspots_on_enabled__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hotspots_on_enabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_on_enabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots_on_enabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false)) && 
				((player.getPointHotspotIds().length > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_on_enabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_on_enabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_on_enabled.style.transition='';
				if (me._hotspots_on_enabled.ggCurrentLogicStateVisible == 0) {
					me._hotspots_on_enabled.style.visibility=(Number(me._hotspots_on_enabled.style.opacity)>0||!me._hotspots_on_enabled.style.opacity)?'inherit':'hidden';
					me._hotspots_on_enabled.ggVisible=true;
				}
				else {
					me._hotspots_on_enabled.style.visibility="hidden";
					me._hotspots_on_enabled.ggVisible=false;
				}
			}
		}
		me._hotspots_on_enabled.onmouseenter=function (e) {
			me._hotspots_on_enabled__img.style.visibility='hidden';
			me._hotspots_on_enabled__imgo.style.visibility='inherit';
			me.elementMouseOver['hotspots_on_enabled']=true;
		}
		me._hotspots_on_enabled.onmouseleave=function (e) {
			me._hotspots_on_enabled__img.style.visibility='inherit';
			me._hotspots_on_enabled__imgo.style.visibility='hidden';
			me.elementMouseOver['hotspots_on_enabled']=false;
		}
		me._hotspots_on_enabled.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_on.appendChild(me._hotspots_on_enabled);
		me._hotspots_toggle.appendChild(me._hotspots_on);
		el=me._hotspots_off=document.createElement('div');
		el.ggId="hotspots_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots_off.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspots_off_disabled=document.createElement('div');
		els=me._hotspots_off_disabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjYjNiM2IzIiBmaWxsLW9wYWNpdHk9IjEiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYwem0wIDBoMjR2MjRIMFYwem0wIDBoMjR2MjRIMFYwem0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogPHBhdGggZD0iTTEyIDYuNWMyLjc2IDAgNSAyLjI0IDUgNSAwIC41MS0uMSAxLS4yNCAxLjQ2bDMuMDYgMy4wNmMxLjM5LTEuMjMgMi40OS0yLjc3IDMuMTgtNC41M0MyMS4yNyA3LjExIDE3IDQgMTIgNGMtMS4yNyAwLTIuNDkuMi'+
			'0zLjY0LjU3bDIuMTcgMi4xN2MuNDctLjE0Ljk2LS4yNCAxLjQ3LS4yNHpNMi43MSAzLjE2Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxbDEuOTcgMS45N0MzLjA2IDcuODMgMS43NyA5LjUzIDEgMTEuNSAyLjczIDE1Ljg5IDcgMTkgMTIgMTljMS41MiAwIDIuOTctLjMgNC4zMS0uODJsMi43MiAyLjcyYy4zOS4zOSAxLjAyLjM5IDEuNDEgMCAuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDQuMTMgMy4xNmMtLjM5LS4zOS0xLjAzLS4zOS0xLjQyIDB6TTEyIDE2LjVjLTIuNzYgMC01LTIuMjQtNS01IDAtLjc3LjE4LTEuNS40OS0yLjE0bDEuNTcgMS41N2MtLjAzLjE4LS4wNi4zNy0uMDYuNTcgMCAxLjY2'+
			'IDEuMzQgMyAzIDMgLjIgMCAuMzgtLjAzLjU3LS4wN0wxNC4xNCAxNmMtLjY1LjMyLTEuMzcuNS0yLjE0LjV6bTIuOTctNS4zM2MtLjE1LTEuNC0xLjI1LTIuNDktMi42NC0yLjY0bDIuNjQgMi42NHoiLz4KPC9zdmc+Cg==';
		me._hotspots_off_disabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hotspots_off_disabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_off_disabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots_off_disabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getPointHotspotIds().length == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_off_disabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_off_disabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_off_disabled.style.transition='';
				if (me._hotspots_off_disabled.ggCurrentLogicStateVisible == 0) {
					me._hotspots_off_disabled.style.visibility=(Number(me._hotspots_off_disabled.style.opacity)>0||!me._hotspots_off_disabled.style.opacity)?'inherit':'hidden';
					me._hotspots_off_disabled.ggVisible=true;
				}
				else {
					me._hotspots_off_disabled.style.visibility="hidden";
					me._hotspots_off_disabled.ggVisible=false;
				}
			}
		}
		me._hotspots_off_disabled.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_off.appendChild(me._hotspots_off_disabled);
		el=me._hotspots_off_enabled=document.createElement('div');
		els=me._hotspots_off_enabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDxwYXRoIGQ9Ik0xMiA2LjVjMi43NiAwIDUgMi4yNCA1IDUgMCAuNTEtLjEgMS0uMjQgMS40NmwzLjA2IDMuMDZjMS4zOS0xLjIzIDIuNDktMi43NyAzLjE4LTQuNTNDMjEuMjcgNy4xMSAxNyA0IDEyIDRjLTEuMjcgMC0yLjQ5LjItMy42NC41N2wyLjE3IDIuMT'+
			'djLjQ3LS4xNC45Ni0uMjQgMS40Ny0uMjR6TTIuNzEgMy4xNmMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWwxLjk3IDEuOTdDMy4wNiA3LjgzIDEuNzcgOS41MyAxIDExLjUgMi43MyAxNS44OSA3IDE5IDEyIDE5YzEuNTIgMCAyLjk3LS4zIDQuMzEtLjgybDIuNzIgMi43MmMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUw0LjEzIDMuMTZjLS4zOS0uMzktMS4wMy0uMzktMS40MiAwek0xMiAxNi41Yy0yLjc2IDAtNS0yLjI0LTUtNSAwLS43Ny4xOC0xLjUuNDktMi4xNGwxLjU3IDEuNTdjLS4wMy4xOC0uMDYuMzctLjA2LjU3IDAgMS42NiAxLjM0IDMgMyAzIC4yIDAg'+
			'LjM4LS4wMy41Ny0uMDdMMTQuMTQgMTZjLS42NS4zMi0xLjM3LjUtMi4xNC41em0yLjk3LTUuMzNjLS4xNS0xLjQtMS4yNS0yLjQ5LTIuNjQtMi42NGwyLjY0IDIuNjR6Ii8+Cjwvc3ZnPgo=';
		me._hotspots_off_enabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hotspots_off_enabled__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6IE0wLDBoMTh2MThIMFYweiBNMCwwaDE4djE4SDBWMHogTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw0LjljMi4xLDAsMy44LDEuNywzLjgsMy44YzAsMC40LTAuMSwwLjgtMC4yLDEuMWwyLjMsMi4zYzEtMC45LDEuOS0yLjEsMi40LTMuNEMxNiw1LjMsMTIuOCwzLDksMyYjeGQ7JiN4YTsmI3g5O0M4LDMsNy4xLDMuMSw2LjMsMy40'+
			'bDEuNiwxLjZDOC4yLDUsOC42LDQuOSw5LDQuOXogTTIsMi40QzEuNywyLjcsMS43LDMuMSwyLDMuNGwxLjUsMS41Yy0xLjIsMS0yLjIsMi4yLTIuOCwzLjcmI3hkOyYjeGE7JiN4OTtDMiwxMS45LDUuMiwxNC4yLDksMTQuMmMxLjEsMCwyLjItMC4yLDMuMi0wLjZsMiwyYzAuMywwLjMsMC44LDAuMywxLjEsMHMwLjMtMC44LDAtMS4xTDMuMSwyLjRDMi44LDIuMSwyLjMsMi4xLDIsMi40eiBNOSwxMi40JiN4ZDsmI3hhOyYjeDk7Yy0yLjEsMC0zLjgtMS43LTMuOC0zLjhDNS4yLDgsNS40LDcuNSw1LjYsN2wxLjIsMS4yYzAsMC4xLDAsMC4zLDAsMC40YzAsMS4yLDEsMi4yLDIuMiwyLjJjMC4yLD'+
			'AsMC4zLDAsMC40LTAuMWwxLjIsMS4yJiN4ZDsmI3hhOyYjeDk7QzEwLjEsMTIuMiw5LjYsMTIuNCw5LDEyLjR6IE0xMS4yLDguNGMtMC4xLTEuMS0wLjktMS45LTItMkwxMS4yLDguNHoiLz4KPC9zdmc+Cg==';
		me._hotspots_off_enabled__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hotspots_off_enabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_off_enabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots_off_enabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getPointHotspotIds().length == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_off_enabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_off_enabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_off_enabled.style.transition='';
				if (me._hotspots_off_enabled.ggCurrentLogicStateVisible == 0) {
					me._hotspots_off_enabled.style.visibility="hidden";
					me._hotspots_off_enabled.ggVisible=false;
				}
				else {
					me._hotspots_off_enabled.style.visibility=(Number(me._hotspots_off_enabled.style.opacity)>0||!me._hotspots_off_enabled.style.opacity)?'inherit':'hidden';
					me._hotspots_off_enabled.ggVisible=true;
				}
			}
		}
		me._hotspots_off_enabled.onmouseenter=function (e) {
			me._hotspots_off_enabled__img.style.visibility='hidden';
			me._hotspots_off_enabled__imgo.style.visibility='inherit';
			me.elementMouseOver['hotspots_off_enabled']=true;
		}
		me._hotspots_off_enabled.onmouseleave=function (e) {
			me._hotspots_off_enabled__img.style.visibility='inherit';
			me._hotspots_off_enabled__imgo.style.visibility='hidden';
			me.elementMouseOver['hotspots_off_enabled']=false;
		}
		me._hotspots_off_enabled.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_off.appendChild(me._hotspots_off_enabled);
		me._hotspots_toggle.appendChild(me._hotspots_off);
		me._button_container.appendChild(me._hotspots_toggle);
		el=me._audio_toggle=document.createElement('div');
		el.ggId="audio_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._audio_toggle.logicBlock_visible = function() {
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
			if (me._audio_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_toggle.style.transition='';
				if (me._audio_toggle.ggCurrentLogicStateVisible == 0) {
					me._audio_toggle.style.visibility=(Number(me._audio_toggle.style.opacity)>0||!me._audio_toggle.style.opacity)?'inherit':'hidden';
					me._audio_toggle.ggVisible=true;
				}
				else {
					me._audio_toggle.style.visibility="hidden";
					me._audio_toggle.ggVisible=false;
				}
			}
		}
		me._audio_toggle.onclick=function (e) {
			player.toggleMuted("_all");
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
		}
		me._audio_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._audio_on=document.createElement('div');
		els=me._audio_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLDEwdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjljMC42MywwLjYzLDEuNzEsMC4xOCwxLjcxLTAuNzFWNi40MWMwLTAuODktMS4wOC0xLjM0LTEuNzEtMC43MUw3LDlINCBDMy40NSw5LDMsOS40NSwzLD'+
			'EweiBNMTYuNSwxMmMwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjguMDVDMTUuNDgsMTUuMjksMTYuNSwxMy43NywxNi41LDEyeiBNMTQsNC40NXYwLjIgYzAsMC4zOCwwLjI1LDAuNzEsMC42LDAuODVDMTcuMTgsNi41MywxOSw5LjA2LDE5LDEycy0xLjgyLDUuNDctNC40LDYuNWMtMC4zNiwwLjE0LTAuNiwwLjQ3LTAuNiwwLjg1djAuMiBjMCwwLjYzLDAuNjMsMS4wNywxLjIxLDAuODVDMTguNiwxOS4xMSwyMSwxNS44NCwyMSwxMnMtMi40LTcuMTEtNS43OS04LjRDMTQuNjMsMy4zNywxNCwzLjgyLDE0LDQuNDV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._audio_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._audio_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIuMiw3LjV2M2MwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4ybDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMlY0LjhjMC0wLjctMC44LTEtMS4zLTAuNUw1LjIsNi44SDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzIuNiw2LjgsMi4yLDcuMSwyLjIsNy41eiBN'+
			'MTIuNCw5YzAtMS4zLTAuOC0yLjUtMS45LTN2NkMxMS42LDExLjUsMTIuNCwxMC4zLDEyLjQsOXogTTEwLjUsMy4zdjAuMWMwLDAuMywwLjIsMC41LDAuNSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuOSwwLjgsMy4zLDIuNywzLjMsNC45cy0xLjQsNC4xLTMuMyw0LjljLTAuMywwLjEtMC41LDAuNC0wLjUsMC42djAuMWMwLDAuNSwwLjUsMC44LDAuOSwwLjZjMi41LTEsNC4zLTMuNCw0LjMtNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MxNCwzLjcsMTEuNCwyLjdDMTEsMi41LDEwLjUsMi45LDEwLjUsMy4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._audio_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="audio_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._audio_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_on.style.transition='';
				if (me._audio_on.ggCurrentLogicStateVisible == 0) {
					me._audio_on.style.visibility=(Number(me._audio_on.style.opacity)>0||!me._audio_on.style.opacity)?'inherit':'hidden';
					me._audio_on.ggVisible=true;
				}
				else {
					me._audio_on.style.visibility="hidden";
					me._audio_on.ggVisible=false;
				}
			}
		}
		me._audio_on.onmouseenter=function (e) {
			me._audio_on__img.style.visibility='hidden';
			me._audio_on__imgo.style.visibility='inherit';
			me.elementMouseOver['audio_on']=true;
		}
		me._audio_on.onmouseleave=function (e) {
			me._audio_on__img.style.visibility='inherit';
			me._audio_on__imgo.style.visibility='hidden';
			me.elementMouseOver['audio_on']=false;
		}
		me._audio_on.ggUpdatePosition=function (useTransition) {
		}
		me._audio_toggle.appendChild(me._audio_on);
		el=me._audio_off=document.createElement('div');
		els=me._audio_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNi4yNSwxMy40MkMxNi40LDEyLjk3LDE2LjUsMTIuNSwxNi41LDEyYzAtMS43Ny0xLjAyLTMuMjktMi41LTQuMDN2My4yTDE2LjI1LDEzLjQyeiIvPgogICA8cGF0aCBkPSJNMTksMTJjMCwxLjIxLTAuMzEsMi4zNC'+
			'0wLjg1LDMuMzJsMS40NiwxLjQ2QzIwLjQ4LDE1LjM5LDIxLDEzLjc2LDIxLDEyYzAtMy44My0yLjQtNy4xMS01Ljc4LTguNCBDMTQuNjMsMy4zNywxNCwzLjgzLDE0LDQuNDZ2MC4xOWMwLDAuMzgsMC4yNSwwLjcxLDAuNjEsMC44NUMxNy4xOCw2LjU0LDE5LDkuMDYsMTksMTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0yLjEsMy41MUwyLjEsMy41MWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFMNi4xNyw5SDRjLTAuNTUsMC0xLDAuNDUtMSwxdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjkgYzAuNjMsMC42MywxLjcxLDAuMTgsMS43MS0wLjcxdi0yLjc2bDMuMzIsMy4zMmMtMC4yMywwLjEz'+
			'LTAuNDcsMC4yNC0wLjcxLDAuMzVjLTAuMzcsMC4xNi0wLjYsMC41Mi0wLjYsMC45MXYwIGMwLDAuNywwLjcsMS4yLDEuMzUsMC45NGMwLjUtMC4yLDAuOTktMC40NSwxLjQ0LTAuNzNsMi4yOCwyLjI4YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MSBMMy41MSwzLjUxQzMuMTIsMy4xMiwyLjQ5LDMuMTIsMi4xLDMuNTF6Ii8+CiAgIDxwYXRoIGQ9Ik0xMiw5LjE3VjYuNDFjMC0wLjg5LTEuMDgtMS4zNC0xLjcxLTAuNzFMOS40MSw2LjU5TDEyLDkuMTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._audio_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._audio_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyLjIsMTAuMWMwLjEtMC4zLDAuMi0wLjcsMC4yLTEuMWMwLTEuMy0wLjgtMi41LTEuOS0zdjIuNEwxMi4yLDEwLjF6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNC4yLDljMCwwLjktMC4yLDEuOC0wLjYsMi41bDEuMSwxLjFjMC43LTEsMS0yLjMsMS0zLjZj'+
			'MC0yLjktMS44LTUuMy00LjMtNi4zYy0wLjQtMC4yLTAuOSwwLjItMC45LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt2MC4xYzAsMC4zLDAuMiwwLjUsMC41LDAuNkMxMi45LDQuOSwxNC4yLDYuOCwxNC4yLDl6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xLjYsMi42TDEuNiwyLjZjLTAuMywwLjMtMC4zLDAuOCwwLDEuMWwzLjEsMy4xSDNjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYzYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMnYtMi4xbDIuNSwyLjVjLTAuMiwwLjEtMC40LDAuMi'+
			'0wLjUsMC4zYy0wLjMsMC4xLTAuNCwwLjQtMC40LDAuN2wwLDBjMCwwLjUsMC41LDAuOSwxLDAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LTAuMSwwLjctMC4zLDEuMS0wLjVsMS43LDEuN2MwLjMsMC4zLDAuOCwwLjMsMS4xLDBsMCwwYzAuMy0wLjMsMC4zLTAuOCwwLTEuMUwyLjYsMi42QzIuMywyLjMsMS45LDIuMywxLjYsMi42eiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw2LjlWNC44YzAtMC43LTAuOC0xLTEuMy0wLjVMNy4xLDQuOUw5LDYuOXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._audio_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="audio_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._audio_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_off.style.transition='';
				if (me._audio_off.ggCurrentLogicStateVisible == 0) {
					me._audio_off.style.visibility="hidden";
					me._audio_off.ggVisible=false;
				}
				else {
					me._audio_off.style.visibility=(Number(me._audio_off.style.opacity)>0||!me._audio_off.style.opacity)?'inherit':'hidden';
					me._audio_off.ggVisible=true;
				}
			}
		}
		me._audio_off.onmouseenter=function (e) {
			me._audio_off__img.style.visibility='hidden';
			me._audio_off__imgo.style.visibility='inherit';
			me.elementMouseOver['audio_off']=true;
		}
		me._audio_off.onmouseleave=function (e) {
			me._audio_off__img.style.visibility='inherit';
			me._audio_off__imgo.style.visibility='hidden';
			me.elementMouseOver['audio_off']=false;
		}
		me._audio_off.ggUpdatePosition=function (useTransition) {
		}
		me._audio_toggle.appendChild(me._audio_off);
		me._button_container.appendChild(me._audio_toggle);
		el=me._fullscreen_toggle=document.createElement('div');
		el.ggId="fullscreen_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen_toggle.logicBlock_visible = function() {
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
			if (me._fullscreen_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_toggle.style.transition='';
				if (me._fullscreen_toggle.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_toggle.style.visibility=(Number(me._fullscreen_toggle.style.opacity)>0||!me._fullscreen_toggle.style.opacity)?'inherit':'hidden';
					me._fullscreen_toggle.ggVisible=true;
				}
				else {
					me._fullscreen_toggle.style.visibility="hidden";
					me._fullscreen_toggle.ggVisible=false;
				}
			}
		}
		me._fullscreen_toggle.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_exit=document.createElement('div');
		els=me._fullscreen_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIGQ9Ik0wLDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTYsMTZoMnYyYzAsMC41NSwwLjQ1LDEsMSwxbDAsMGMwLjU1LDAsMS0wLjQ1LDEtMXYtM2MwLTAuNTUtMC40NS0xLTEtMUg2Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDNSwxNS41NSw1LjQ1LDE2LDYsMTYgei'+
			'BNOCw4SDZDNS40NSw4LDUsOC40NSw1LDlsMCwwYzAsMC41NSwwLjQ1LDEsMSwxaDNjMC41NSwwLDEtMC40NSwxLTFWNmMwLTAuNTUtMC40NS0xLTEtMWwwLDBDOC40NSw1LDgsNS40NSw4LDZWOHogTTE1LDE5IEwxNSwxOWMwLjU1LDAsMS0wLjQ1LDEtMXYtMmgyYzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMWgtM2MtMC41NSwwLTEsMC40NS0xLDF2M0MxNCwxOC41NSwxNC40NSwxOSwxNSwxOXogTTE2LDggVjZjMC0wLjU1LTAuNDUtMS0xLTFsMCwwYy0wLjU1LDAtMSwwLjQ1LTEsMXYzYzAsMC41NSwwLjQ1LDEsMSwxaDNjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41'+
			'NS0wLjQ1LTEtMS0xSDE2eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_exit__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNC41LDEySDZ2MS41YzAsMC40LDAuMywwLjgsMC44LDAuOGwwLDBjMC40LDAsMC44LTAuMywwLjgtMC44di0yLjJjMC0wLjQtMC4zLTAuOC0wLjgtMC44SDQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40LDAtMC44LDAuMy0wLjgsMC44bDAs'+
			'MEMzLjgsMTEuNyw0LjEsMTIsNC41LDEyeiBNNiw2SDQuNUM0LjEsNiwzLjgsNi4zLDMuOCw2LjhsMCwwYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMywwLjgtMC44VjQuNWMwLTAuNC0wLjMtMC44LTAuOC0wLjhsMCwwQzYuMywzLjgsNiw0LjEsNiw0LjVWNnogTTExLjIsMTQuMkwxMS4yLDE0LjJjMC40LDAsMC44LTAuMywwLjgtMC44VjEyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aDEuNWMwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOGgtMi4yYy0wLjQsMC0wLjgsMC'+
			'4zLTAuOCwwLjh2Mi4yQzEwLjUsMTMuOSwxMC44LDE0LjIsMTEuMiwxNC4yeiBNMTIsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1Y0LjVjMC0wLjQtMC4zLTAuOC0wLjgtMC44bDAsMGMtMC40LDAtMC44LDAuMy0wLjgsMC44djIuMmMwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4yYzAuNCwwLDAuOC0wLjMsMC44LTAuOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjQtMC4zLTAuOC0wLjgtMC44SDEyeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_exit__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
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
		me._fullscreen_exit.onmouseenter=function (e) {
			me._fullscreen_exit__img.style.visibility='hidden';
			me._fullscreen_exit__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_exit']=true;
		}
		me._fullscreen_exit.onmouseleave=function (e) {
			me._fullscreen_exit__img.style.visibility='inherit';
			me._fullscreen_exit__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_exit']=false;
		}
		me._fullscreen_exit.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_toggle.appendChild(me._fullscreen_exit);
		el=me._fullscreen_enter=document.createElement('div');
		els=me._fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIGQ9Ik0wLDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTYsMTRMNiwxNGMtMC41NSwwLTEsMC40NS0xLDF2M2MwLDAuNTUsMC40NSwxLDEsMWgzYzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg3di0yIEM3LDE0LjQ1LDYuNTUsMTQsNiwxNH'+
			'ogTTYsMTBMNiwxMGMwLjU1LDAsMS0wLjQ1LDEtMVY3aDJjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41NS0wLjQ1LTEtMS0xSDZDNS40NSw1LDUsNS40NSw1LDZ2MyBDNSw5LjU1LDUuNDUsMTAsNiwxMHogTTE3LDE3aC0yYy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBjMCwwLjU1LDAuNDUsMSwxLDFoM2MwLjU1LDAsMS0wLjQ1LDEtMXYtM2MwLTAuNTUtMC40NS0xLTEtMWwwLDAgYy0wLjU1LDAtMSwwLjQ1LTEsMVYxN3ogTTE0LDZMMTQsNmMwLDAuNTUsMC40NSwxLDEsMWgydjJjMCwwLjU1LDAuNDUsMSwxLDFsMCwwYzAuNTUsMCwxLTAuNDUsMS0xVjZjMC0wLjU1LTAuNDUtMS0xLTFoLTMgQzE0'+
			'LjQ1LDUsMTQsNS40NSwxNCw2eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_enter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_enter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNC41LDEwLjVMNC41LDEwLjVjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYyLjJjMCwwLjQsMC4zLDAuOCwwLjgsMC44aDIuMmMwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjgtMC44LTAu'+
			'OEg1LjJ2LTEuNUM1LjIsMTAuOCw0LjksMTAuNSw0LjUsMTAuNXogTTQuNSw3LjVMNC41LDcuNWMwLjQsMCwwLjgtMC4zLDAuOC0wLjhWNS4yaDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOEg0LjVjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYyLjJDMy44LDcuMiw0LjEsNy41LDQuNSw3LjV6IE0xMi44LDEyLjhoLTEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40LDAtMC44LDAuMy0wLjgsMC44bDAsMGMwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4yYzAuNCwwLDAuOC0wLjMsMC44LT'+
			'AuOHYtMi4yYzAtMC40LTAuMy0wLjgtMC44LTAuOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNCwwLTAuOCwwLjMtMC44LDAuOFYxMi44eiBNMTAuNSw0LjVMMTAuNSw0LjVjMCwwLjQsMC4zLDAuOCwwLjgsMC44aDEuNXYxLjVjMCwwLjQsMC4zLDAuOCwwLjgsMC44bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjgtMC4zLDAuOC0wLjhWNC41YzAtMC40LTAuMy0wLjgtMC44LTAuOGgtMi4yQzEwLjgsMy44LDEwLjUsNC4xLDEwLjUsNC41eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_enter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
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
		me._fullscreen_enter.onmouseenter=function (e) {
			me._fullscreen_enter__img.style.visibility='hidden';
			me._fullscreen_enter__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_enter']=true;
		}
		me._fullscreen_enter.onmouseleave=function (e) {
			me._fullscreen_enter__img.style.visibility='inherit';
			me._fullscreen_enter__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_enter']=false;
		}
		me._fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_toggle.appendChild(me._fullscreen_enter);
		me._button_container.appendChild(me._fullscreen_toggle);
		me._menu.appendChild(me._button_container);
		el=me._languages_scroller=document.createElement('div');
		els=me._languages_scroller__content=document.createElement('div');
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
		hs+='bottom : 0px;';
		hs+='height : 47px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._languages_scroller.ggScrollByX = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosX = (me._languages_scroller__horScrollFg.offsetLeft + diffX);
			me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
			me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
		}
		me._languages_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._languages_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._languages_scroller.ggScrollPosX >= me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth)) {
					me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._languages_scroller.ggScrollPosX <= 0)) {
					me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._languages_scroller.ggScrollByY = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosY = (me._languages_scroller__vertScrollFg.offsetTop + diffY);
			me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
			me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
		}
		me._languages_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._languages_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._languages_scroller.ggScrollPosY >= me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight)) {
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._languages_scroller.ggScrollPosY <= 0)) {
					me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._languages_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._languages_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 6 : 0))) * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._languages_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 6 : 0))) * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._languages_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._languages_scroller.ggDragInertiaX *= 0.96;
				me._languages_scroller.ggDragInertiaY *= 0.96;
				me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
				me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
				if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._languages_scroller.ggInInteraction = false;
			setTimeout(function() { me._languages_scroller.ggIsDragging = false; }, 100);
		}
		me._languages_scroller__content.mousetouchmove = e => {
			if (!me._languages_scroller.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._languages_scroller__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._languages_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._languages_scroller.ggDragStartY) > 10) me._languages_scroller.ggIsDragging = true;
			var diffX = (eventX - me._languages_scroller.ggDragLastX) * me._languages_scroller.ggHPercentVisible;
			var diffY = (eventY - me._languages_scroller.ggDragLastY) * me._languages_scroller.ggVPercentVisible;
			me._languages_scroller.ggDragInertiaX = -diffX;
			me._languages_scroller.ggDragInertiaY = -diffY;
			me._languages_scroller.ggDragLastX = eventX;
			me._languages_scroller.ggDragLastY = eventY;
			me._languages_scroller.ggScrollByX(-diffX);
			me._languages_scroller.ggScrollByY(-diffY);
		}
		me._languages_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._languages_scroller.ggDragLastX = me._languages_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._languages_scroller.ggDragLastY = me._languages_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._languages_scroller.ggInInteraction = true;
		}
		els.onmousedown = me._languages_scroller__content.mousetouchstart;
		els.ontouchstart = me._languages_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._languages_scroller__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._languages_scroller.contentMouseupListener = function() { me._languages_scroller__content.mousetouchend(); });
		document.addEventListener('touchend', me._languages_scroller.contentTouchendListener = function() { me._languages_scroller__content.mousetouchend(); });
		document.addEventListener('mousemove', me._languages_scroller.contentMousemoveListener = function() { me._languages_scroller__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._languages_scroller.contentTouchmoveListener = function() { me._languages_scroller__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._languages_scroller.pointerupListener = function() { me._languages_scroller__content.mousetouchend(); });
			document.addEventListener('pointermove', me._languages_scroller.pointermoveListener = function() { me._languages_scroller__content.mousetouchmove(); });
		}
		elVertScrollBg = me._languages_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 6px; height: 48px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._languages_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 6px; height: 48px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._languages_scroller.ggScrollPosY = 0;
		me._languages_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._languages_scroller.ggDragLastY = e.clientY;
			document.addEventListener('mouseup', me._languages_scroller.vertMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._languages_scroller.vertMouseupListener);
				document.removeEventListener('mousemove', me._languages_scroller.vertMousemoveListener);
			});
			document.addEventListener('mousemove', me._languages_scroller.vertMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			});
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._languages_scroller.vertTouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaY *= 0.96;
					me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
					if (Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._languages_scroller.vertTouchendListener);
				document.removeEventListener('touchmove', me._languages_scroller.vertTouchmoveListener);
				document.removeEventListener('pointerup', me._languages_scroller.vertPointerupListener);
				document.removeEventListener('pointermove', me._languages_scroller.vertPointermoveListener);
			}
			document.addEventListener('touchend', me._languages_scroller.vertTouchendListener = function() { me._languages_scroller.vertTouchend(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._languages_scroller.vertPointerupListener = function() { me._languages_scroller.vertTouchend(); });
			}
			me._languages_scroller.vertTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._languages_scroller.ggDragLastY;
				me._languages_scroller.ggDragInertiaY = diffY;
				me._languages_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._languages_scroller.ggScrollByY(diffY);
			}
			document.addEventListener('touchmove', me._languages_scroller.vertTouchmoveListener = function(e) { me._languages_scroller.vertTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._languages_scroller.vertPointermoveListener = function(e) { me._languages_scroller.vertTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._languages_scroller.ggScrollHeight;
			if (e.offsetY < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._languages_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._languages_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._languages_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._languages_scroller.ggScrollByYSmooth(30 * me._languages_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._languages_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="languages_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 65px;';
		hs+='height : calc(100% - 85px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 205px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_scroller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._languages_scroller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._languages_scroller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._languages_scroller.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._languages_scroller.ggCurrentLogicStatePosition == 0) {
					me._languages_scroller.style.left='20px';
					me._languages_scroller.style.bottom='105px';
				}
				else {
					me._languages_scroller.style.left='20px';
					me._languages_scroller.style.bottom='65px';
				}
			}
		}
		me._languages_scroller.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._languages_scroller.ggCurrentLogicStateSize != newLogicStateSize) {
				me._languages_scroller.ggCurrentLogicStateSize = newLogicStateSize;
				me._languages_scroller.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._languages_scroller.ggCurrentLogicStateSize == 0) {
					me._languages_scroller.style.width='200px';
					me._languages_scroller.style.height='calc(100% - 125px)';
					skin.updateSize(me._languages_scroller);
				}
				else {
					me._languages_scroller.style.width='205px';
					me._languages_scroller.style.height='calc(100% - 85px)';
					skin.updateSize(me._languages_scroller);
				}
			}
		}
		me._languages_scroller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_languages') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._languages_scroller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._languages_scroller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._languages_scroller.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._languages_scroller.ggCurrentLogicStateVisible == 0) {
					me._languages_scroller.style.visibility=(Number(me._languages_scroller.style.opacity)>0||!me._languages_scroller.style.opacity)?'inherit':'hidden';
					me._languages_scroller.ggVisible=true;
				}
				else {
					me._languages_scroller.style.visibility="hidden";
					me._languages_scroller.ggVisible=false;
				}
			}
		}
		me._languages_scroller.ggUpdatePosition=function (useTransition) {
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
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 6;
				if (contentHeight < containerHeight) {
					this.ggContent.style.bottom = (this.ggHorScrollVisible ? 6 : 0) + 'px';
					this.ggContent.style.top = '';
					this.ggContent.style.marginBottom = '0px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if ((me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 6) || (!me._languages_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._languages_scroller__vertScrollBg.style.visibility = 'inherit';
					me._languages_scroller__vertScrollFg.style.visibility = 'inherit';
					me._languages_scroller.ggVertScrollVisible = true;
				} else {
					me._languages_scroller__vertScrollBg.style.visibility = 'hidden';
					me._languages_scroller__vertScrollFg.style.visibility = 'hidden';
					me._languages_scroller.ggVertScrollVisible = false;
				}
				if(me._languages_scroller.ggVertScrollVisible) {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth - 6;
					if (me._languages_scroller.ggHorScrollVisible) {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight - 6;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height - me._languages_scroller__vertScrollBg.getBoundingClientRect().width;
						me._languages_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight;
						me._languages_scroller.ggAvailableHeightWithScale = me._languages_scroller.getBoundingClientRect().height;
						me._languages_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._languages_scroller__vertScrollBg.style.height = me._languages_scroller.ggAvailableHeight + 'px';
					me._languages_scroller.ggVPercentVisible = contentHeight != 0 ? me._languages_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._languages_scroller.ggVPercentVisible > 1.0) me._languages_scroller.ggVPercentVisible = 1.0;
					me._languages_scroller.ggScrollHeight =  Math.round(me._languages_scroller__vertScrollBg.offsetHeight * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller__vertScrollFg.style.height = me._languages_scroller.ggScrollHeight + 'px';
					me._languages_scroller.ggScrollPosY = me._languages_scroller.ggScrollPosYPercent * me._languages_scroller.ggAvailableHeight;
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
					if (me._languages_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
						me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth;
					me._languages_scroller.ggScrollPosY = 0;
					me._languages_scroller.ggScrollPosYPercent = 0.0;
					me._languages_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._languages_scroller.ggHorScrollVisible || vertScrollWasVisible != me._languages_scroller.ggVertScrollVisible) {
					skin.updateSize(me._languages_scroller);
					me._languages_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._languages_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._languages_cloner;
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
		el.ggWidth = 200;
		el.ggHeight = 24;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._languages_cloner.ggUpdating == true) return;
			me._languages_cloner.ggUpdating = true;
			var el=me._languages_cloner;
			var curNumCols = 0;
			curNumCols = me._languages_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && false) {
				me._languages_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._languages_cloner.ggCloneOffsetChanged = false;
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
			me._languages_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._languages_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (-row * me._languages_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._languages_cloner.ggWidth) + 'px';
				parameter.width=me._languages_cloner.ggWidth + 'px';
				parameter.height=me._languages_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_languages_cloner_Class(nodeId, me, el, parameter);
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
			me._languages_cloner.ggNodeCount = me._languages_cloner.ggNumFilterPassed;
			me._languages_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._languages_cloner.parentNode && me._languages_cloner.parentNode.classList.contains('ggskin_subelement') && me._languages_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._languages_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="languages_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._languages_cloner.childNodes.length; i++) {
				var child=me._languages_cloner.childNodes[i];
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
		me._languages_cloner.ggUpdatePosition=function (useTransition) {
			me._languages_cloner.ggUpdate();
		}
		me._languages_scroller__content.appendChild(me._languages_cloner);
		me._menu.appendChild(me._languages_scroller);
		el=me._nodes_menu_phone_landscape=document.createElement('div');
		el.ggId="nodes_menu_phone_landscape";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 70px;';
		hs+='height : 155px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_menu_phone_landscape.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nodes_menu_phone_landscape.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodes_menu_phone_landscape.style.transition='';
				if (me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible == 0) {
					me._nodes_menu_phone_landscape.style.visibility="hidden";
					me._nodes_menu_phone_landscape.ggVisible=false;
				}
				else if (me._nodes_menu_phone_landscape.ggCurrentLogicStateVisible == 1) {
					me._nodes_menu_phone_landscape.style.visibility=(Number(me._nodes_menu_phone_landscape.style.opacity)>0||!me._nodes_menu_phone_landscape.style.opacity)?'inherit':'hidden';
					me._nodes_menu_phone_landscape.ggVisible=true;
				}
				else {
					me._nodes_menu_phone_landscape.style.visibility="hidden";
					me._nodes_menu_phone_landscape.ggVisible=false;
				}
			}
		}
		me._nodes_menu_phone_landscape.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodes_scroller_pl=document.createElement('div');
		els=me._nodes_scroller_pl__content=document.createElement('div');
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
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 214px;';
		hs+="";
		els.setAttribute('style',hs);
		me._nodes_scroller_pl.ggScrollByX = function(diffX) {
			if(!me._nodes_scroller_pl.ggHorScrollVisible || diffX == 0 || me._nodes_scroller_pl.ggHPercentVisible >= 1.0) return;
			me._nodes_scroller_pl.ggScrollPosX = (me._nodes_scroller_pl__horScrollFg.offsetLeft + diffX);
			me._nodes_scroller_pl.ggScrollPosX = Math.max(me._nodes_scroller_pl.ggScrollPosX, 0);
			me._nodes_scroller_pl.ggScrollPosX = Math.min(me._nodes_scroller_pl.ggScrollPosX, me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
			me._nodes_scroller_pl__horScrollFg.style.left = me._nodes_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosX / (me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
			me._nodes_scroller_pl__content.style.left = -(Math.round((me._nodes_scroller_pl.ggContentWidth * (1.0 - me._nodes_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentLeftOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosXPercent = (me._nodes_scroller_pl__horScrollFg.offsetLeft / me._nodes_scroller_pl__horScrollBg.offsetWidth);
		}
		me._nodes_scroller_pl.ggScrollByXSmooth = function(diffX) {
			if(!me._nodes_scroller_pl.ggHorScrollVisible || diffX == 0 || me._nodes_scroller_pl.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._nodes_scroller_pl.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._nodes_scroller_pl.ggScrollPosX >= me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth)) {
					me._nodes_scroller_pl.ggScrollPosX = Math.min(me._nodes_scroller_pl.ggScrollPosX, me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._nodes_scroller_pl.ggScrollPosX <= 0)) {
					me._nodes_scroller_pl.ggScrollPosX = Math.max(me._nodes_scroller_pl.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._nodes_scroller_pl__horScrollFg.style.left = me._nodes_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosX / (me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
			me._nodes_scroller_pl__content.style.left = -(Math.round((me._nodes_scroller_pl.ggContentWidth * (1.0 - me._nodes_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentLeftOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosXPercent = (me._nodes_scroller_pl__horScrollFg.offsetLeft / me._nodes_scroller_pl__horScrollBg.offsetWidth);
			}, 10);
		}
		me._nodes_scroller_pl.ggScrollByY = function(diffY) {
			if(!me._nodes_scroller_pl.ggVertScrollVisible || diffY == 0 || me._nodes_scroller_pl.ggVPercentVisible >= 1.0) return;
			me._nodes_scroller_pl.ggScrollPosY = (me._nodes_scroller_pl__vertScrollFg.offsetTop + diffY);
			me._nodes_scroller_pl.ggScrollPosY = Math.max(me._nodes_scroller_pl.ggScrollPosY, 0);
			me._nodes_scroller_pl.ggScrollPosY = Math.min(me._nodes_scroller_pl.ggScrollPosY, me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
			me._nodes_scroller_pl__vertScrollFg.style.top = me._nodes_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosY / (me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
			me._nodes_scroller_pl__content.style.top = -(Math.round((me._nodes_scroller_pl.ggContentHeight * (1.0 - me._nodes_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentTopOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosYPercent = (me._nodes_scroller_pl__vertScrollFg.offsetTop / me._nodes_scroller_pl__vertScrollBg.offsetHeight);
		}
		me._nodes_scroller_pl.ggScrollByYSmooth = function(diffY) {
			if(!me._nodes_scroller_pl.ggVertScrollVisible || diffY == 0 || me._nodes_scroller_pl.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._nodes_scroller_pl.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._nodes_scroller_pl.ggScrollPosY >= me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight)) {
					me._nodes_scroller_pl.ggScrollPosY = Math.min(me._nodes_scroller_pl.ggScrollPosY, me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._nodes_scroller_pl.ggScrollPosY <= 0)) {
					me._nodes_scroller_pl.ggScrollPosY = Math.max(me._nodes_scroller_pl.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._nodes_scroller_pl__vertScrollFg.style.top = me._nodes_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller_pl.ggScrollPosY / (me._nodes_scroller_pl__vertScrollBg.offsetHeight - me._nodes_scroller_pl__vertScrollFg.offsetHeight);
			me._nodes_scroller_pl__content.style.top = -(Math.round((me._nodes_scroller_pl.ggContentHeight * (1.0 - me._nodes_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller_pl.ggContentTopOffset + 'px';
			me._nodes_scroller_pl.ggScrollPosYPercent = (me._nodes_scroller_pl__vertScrollFg.offsetTop / me._nodes_scroller_pl__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._nodes_scroller_pl.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._nodes_scroller_pl.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._nodes_scroller_pl.ggHPercentVisible);
					me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._nodes_scroller_pl.clientWidth - (me._nodes_scroller_pl.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._nodes_scroller_pl.clientWidth - (me._nodes_scroller_pl.ggVertScrollVisible ? 6 : 0))) * me._nodes_scroller_pl.ggHPercentVisible);
					me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
				}
			}
			if (me._nodes_scroller_pl.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._nodes_scroller_pl.ggVPercentVisible);
					me._nodes_scroller_pl.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._nodes_scroller_pl.clientHeight - (me._nodes_scroller_pl.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._nodes_scroller_pl.clientHeight - (me._nodes_scroller_pl.ggHorScrollVisible ? 6 : 0))) * me._nodes_scroller_pl.ggVPercentVisible);
					me._nodes_scroller_pl.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._nodes_scroller_pl__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._nodes_scroller_pl.ggDragInertiaX *= 0.96;
				me._nodes_scroller_pl.ggDragInertiaY *= 0.96;
				me._nodes_scroller_pl.ggScrollByX(me._nodes_scroller_pl.ggDragInertiaX);
				me._nodes_scroller_pl.ggScrollByY(me._nodes_scroller_pl.ggDragInertiaY);
				if (Math.abs(me._nodes_scroller_pl.ggDragInertiaX) < 1.0 && Math.abs(me._nodes_scroller_pl.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._nodes_scroller_pl.ggInInteraction = false;
			setTimeout(function() { me._nodes_scroller_pl.ggIsDragging = false; }, 100);
		}
		me._nodes_scroller_pl__content.mousetouchmove = e => {
			if (!me._nodes_scroller_pl.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._nodes_scroller_pl__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._nodes_scroller_pl.ggDragStartX) > 10 || Math.abs(eventY - me._nodes_scroller_pl.ggDragStartY) > 10) me._nodes_scroller_pl.ggIsDragging = true;
			var diffX = (eventX - me._nodes_scroller_pl.ggDragLastX) * me._nodes_scroller_pl.ggHPercentVisible;
			var diffY = (eventY - me._nodes_scroller_pl.ggDragLastY) * me._nodes_scroller_pl.ggVPercentVisible;
			me._nodes_scroller_pl.ggDragInertiaX = -diffX;
			me._nodes_scroller_pl.ggDragInertiaY = -diffY;
			me._nodes_scroller_pl.ggDragLastX = eventX;
			me._nodes_scroller_pl.ggDragLastY = eventY;
			me._nodes_scroller_pl.ggScrollByX(-diffX);
			me._nodes_scroller_pl.ggScrollByY(-diffY);
		}
		me._nodes_scroller_pl__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._nodes_scroller_pl.ggDragLastX = me._nodes_scroller_pl.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._nodes_scroller_pl.ggDragLastY = me._nodes_scroller_pl.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._nodes_scroller_pl.ggInInteraction = true;
		}
		els.onmousedown = me._nodes_scroller_pl__content.mousetouchstart;
		els.ontouchstart = me._nodes_scroller_pl__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._nodes_scroller_pl__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._nodes_scroller_pl.contentMouseupListener = function() { me._nodes_scroller_pl__content.mousetouchend(); });
		document.addEventListener('touchend', me._nodes_scroller_pl.contentTouchendListener = function() { me._nodes_scroller_pl__content.mousetouchend(); });
		document.addEventListener('mousemove', me._nodes_scroller_pl.contentMousemoveListener = function() { me._nodes_scroller_pl__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._nodes_scroller_pl.contentTouchmoveListener = function() { me._nodes_scroller_pl__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._nodes_scroller_pl.pointerupListener = function() { me._nodes_scroller_pl__content.mousetouchend(); });
			document.addEventListener('pointermove', me._nodes_scroller_pl.pointermoveListener = function() { me._nodes_scroller_pl__content.mousetouchmove(); });
		}
		elHorScrollBg = me._nodes_scroller_pl__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._nodes_scroller_pl__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._nodes_scroller_pl.ggScrollPosX = 0;
		me._nodes_scroller_pl.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._nodes_scroller_pl.ggDragLastX = e.clientX;
			document.addEventListener('mouseup', me._nodes_scroller_pl.horMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller_pl.ggDragInertiaX *= 0.96;
					me._nodes_scroller_pl.ggScrollByX(me._nodes_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._nodes_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._nodes_scroller_pl.horMouseupListener);
				document.removeEventListener('mousemove', me._nodes_scroller_pl.horMousemoveListener);
			});
			document.addEventListener('mousemove', me._nodes_scroller_pl.horMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._nodes_scroller_pl.ggDragLastX;
				me._nodes_scroller_pl.ggDragInertiaX = diffX;
				me._nodes_scroller_pl.ggDragLastX = e.clientX;
				me._nodes_scroller_pl.ggScrollByX(diffX);
			});
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._nodes_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._nodes_scroller_pl.horTouchEnd = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller_pl.ggDragInertiaX *= 0.96;
					me._nodes_scroller_pl.ggScrollByX(me._nodes_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._nodes_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._nodes_scroller_pl.horTouchendListener);
				document.removeEventListener('touchmove', me._nodes_scroller_pl.horTouchmoveListener);
				document.removeEventListener('pointerup', me._nodes_scroller_pl.horPointerupListener);
				document.removeEventListener('pointermove', me._nodes_scroller_pl.horPointermoveListener);
			}
			document.addEventListener('touchend', me._nodes_scroller_pl.horTouchendListener = function() { me._nodes_scroller_pl.horTouchEnd(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._nodes_scroller_pl.horPointerupListener = function() { me._nodes_scroller_pl.horTouchEnd(); });
			}
			me._nodes_scroller_pl.horTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._nodes_scroller_pl.ggDragLastX;
				me._nodes_scroller_pl.ggDragInertiaX = diffX;
				me._nodes_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._nodes_scroller_pl.ggScrollByX(diffX);
			}
			document.addEventListener('touchmove', me._nodes_scroller_pl.horTouchmoveListener = function(e) { me._nodes_scroller_pl.horTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._nodes_scroller_pl.horPointermoveListener = function(e) { me._nodes_scroller_pl.horTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._nodes_scroller_pl.ggScrollWidth;
			if (e.offsetX < me._nodes_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._nodes_scroller_pl__horScrollBg.getBoundingClientRect();
			var diffX = me._nodes_scroller_pl.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._nodes_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._nodes_scroller_pl.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._nodes_scroller_pl.ggScrollByXSmooth(30 * me._nodes_scroller_pl.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._nodes_scroller_pl__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="nodes_scroller_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_scroller_pl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nodes_scroller_pl.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me._nodes_scroller_pl.ggScrollPosX / me._nodes_scroller_pl.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._nodes_scroller_pl__horScrollBg.style.visibility = 'inherit';
					me._nodes_scroller_pl__horScrollFg.style.visibility = 'inherit';
					me._nodes_scroller_pl.ggHorScrollVisible = true;
				} else {
					me._nodes_scroller_pl__horScrollBg.style.visibility = 'hidden';
					me._nodes_scroller_pl__horScrollFg.style.visibility = 'hidden';
					me._nodes_scroller_pl.ggHorScrollVisible = false;
				}
				if(me._nodes_scroller_pl.ggHorScrollVisible) {
					me._nodes_scroller_pl.ggAvailableHeight = me._nodes_scroller_pl.clientHeight - 6;
					if (me._nodes_scroller_pl.ggVertScrollVisible) {
						me._nodes_scroller_pl.ggAvailableWidth = me._nodes_scroller_pl.clientWidth - 6;
						me._nodes_scroller_pl.ggAvailableWidthWithScale = me._nodes_scroller_pl.getBoundingClientRect().width - me._nodes_scroller_pl__horScrollBg.getBoundingClientRect().height;
					} else {
						me._nodes_scroller_pl.ggAvailableWidth = me._nodes_scroller_pl.clientWidth;
						me._nodes_scroller_pl.ggAvailableWidthWithScale = me._nodes_scroller_pl.getBoundingClientRect().width;
					}
					me._nodes_scroller_pl__horScrollBg.style.width = me._nodes_scroller_pl.ggAvailableWidth + 'px';
					me._nodes_scroller_pl.ggHPercentVisible = contentWidth != 0 ? me._nodes_scroller_pl.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._nodes_scroller_pl.ggHPercentVisible > 1.0) me._nodes_scroller_pl.ggHPercentVisible = 1.0;
					me._nodes_scroller_pl.ggScrollWidth = Math.round(me._nodes_scroller_pl__horScrollBg.offsetWidth * me._nodes_scroller_pl.ggHPercentVisible);
					me._nodes_scroller_pl__horScrollFg.style.width = me._nodes_scroller_pl.ggScrollWidth + 'px';
					me._nodes_scroller_pl.ggScrollPosX = me._nodes_scroller_pl.ggScrollPosXPercent * me._nodes_scroller_pl.ggAvailableWidth;
					me._nodes_scroller_pl.ggScrollPosX = Math.min(me._nodes_scroller_pl.ggScrollPosX, me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
					me._nodes_scroller_pl__horScrollFg.style.left = me._nodes_scroller_pl.ggScrollPosX + 'px';
					if (me._nodes_scroller_pl.ggHPercentVisible < 1.0) {
						let percentScrolled = me._nodes_scroller_pl.ggScrollPosX / (me._nodes_scroller_pl__horScrollBg.offsetWidth - me._nodes_scroller_pl__horScrollFg.offsetWidth);
						me._nodes_scroller_pl__content.style.left = -(Math.round((me._nodes_scroller_pl.ggContentWidth * (1.0 - me._nodes_scroller_pl.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._nodes_scroller_pl.ggAvailableHeight = me._nodes_scroller_pl.clientHeight;
					me._nodes_scroller_pl.ggScrollPosX = 0;
					me._nodes_scroller_pl.ggScrollPosXPercent = 0.0;
					me._nodes_scroller_pl__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._nodes_scroller_pl.ggHorScrollVisible || vertScrollWasVisible != me._nodes_scroller_pl.ggVertScrollVisible) {
					skin.updateSize(me._nodes_scroller_pl);
					me._nodes_scroller_pl.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_pl=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_pl;
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
		el.ggWidth = 215;
		el.ggHeight = 155;
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
			if(me._node_cloner_pl.ggUpdating == true) return;
			me._node_cloner_pl.ggUpdating = true;
			var el=me._node_cloner_pl;
			var curNumRows = 0;
			curNumRows = me._node_cloner_pl.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_pl.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_pl.ggCloneOffsetChanged = false;
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
				me._node_cloner_pl.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_pl.getFilteredNodes(tourNodes, filter);
			me._node_cloner_pl.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_pl.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_pl.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_pl.ggWidth) + 'px';
				parameter.width=me._node_cloner_pl.ggWidth + 'px';
				parameter.height=me._node_cloner_pl.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_pl_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._node_cloner_pl.ggNodeCount = me._node_cloner_pl.ggNumFilterPassed;
			me._node_cloner_pl.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_pl.parentNode && me._node_cloner_pl.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_pl.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_pl.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_pl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_cloner_pl.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_pl.childNodes.length; i++) {
				var child=me._node_cloner_pl.childNodes[i];
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
		me._node_cloner_pl.ggUpdatePosition=function (useTransition) {
			me._node_cloner_pl.ggUpdate();
		}
		me._nodes_scroller_pl__content.appendChild(me._node_cloner_pl);
		me._nodes_menu_phone_landscape.appendChild(me._nodes_scroller_pl);
		me._menu.appendChild(me._nodes_menu_phone_landscape);
		el=me._nodes_menu=document.createElement('div');
		el.ggId="nodes_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 205px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nodes_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodes_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodes_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodes_menu.style.transition='width 0s, height 0s';
				if (me._nodes_menu.ggCurrentLogicStateSize == 0) {
					me._nodes_menu.style.width='205px';
					me._nodes_menu.style.height='calc(100% - 197px)';
					skin.updateSize(me._nodes_menu);
				}
				else {
					me._nodes_menu.style.width='205px';
					me._nodes_menu.style.height='calc(100% - 155px)';
					skin.updateSize(me._nodes_menu);
				}
			}
		}
		me._nodes_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodes_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodes_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodes_menu.style.transition='width 0s, height 0s';
				if (me._nodes_menu.ggCurrentLogicStateVisible == 0) {
					me._nodes_menu.style.visibility="hidden";
					me._nodes_menu.ggVisible=false;
				}
				else if (me._nodes_menu.ggCurrentLogicStateVisible == 1) {
					me._nodes_menu.style.visibility=(Number(me._nodes_menu.style.opacity)>0||!me._nodes_menu.style.opacity)?'inherit':'hidden';
					me._nodes_menu.ggVisible=true;
				}
				else {
					me._nodes_menu.style.visibility="hidden";
					me._nodes_menu.ggVisible=false;
				}
			}
		}
		me._nodes_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodes_scroller=document.createElement('div');
		els=me._nodes_scroller__content=document.createElement('div');
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
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._nodes_scroller.ggScrollByX = function(diffX) {
			if(!me._nodes_scroller.ggHorScrollVisible || diffX == 0 || me._nodes_scroller.ggHPercentVisible >= 1.0) return;
			me._nodes_scroller.ggScrollPosX = (me._nodes_scroller__horScrollFg.offsetLeft + diffX);
			me._nodes_scroller.ggScrollPosX = Math.max(me._nodes_scroller.ggScrollPosX, 0);
			me._nodes_scroller.ggScrollPosX = Math.min(me._nodes_scroller.ggScrollPosX, me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__horScrollFg.style.left = me._nodes_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosX / (me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__content.style.left = -(Math.round((me._nodes_scroller.ggContentWidth * (1.0 - me._nodes_scroller.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentLeftOffset + 'px';
			me._nodes_scroller.ggScrollPosXPercent = (me._nodes_scroller__horScrollFg.offsetLeft / me._nodes_scroller__horScrollBg.offsetWidth);
		}
		me._nodes_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._nodes_scroller.ggHorScrollVisible || diffX == 0 || me._nodes_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._nodes_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._nodes_scroller.ggScrollPosX >= me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth)) {
					me._nodes_scroller.ggScrollPosX = Math.min(me._nodes_scroller.ggScrollPosX, me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._nodes_scroller.ggScrollPosX <= 0)) {
					me._nodes_scroller.ggScrollPosX = Math.max(me._nodes_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._nodes_scroller__horScrollFg.style.left = me._nodes_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosX / (me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__content.style.left = -(Math.round((me._nodes_scroller.ggContentWidth * (1.0 - me._nodes_scroller.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentLeftOffset + 'px';
			me._nodes_scroller.ggScrollPosXPercent = (me._nodes_scroller__horScrollFg.offsetLeft / me._nodes_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._nodes_scroller.ggScrollByY = function(diffY) {
			if(!me._nodes_scroller.ggVertScrollVisible || diffY == 0 || me._nodes_scroller.ggVPercentVisible >= 1.0) return;
			me._nodes_scroller.ggScrollPosY = (me._nodes_scroller__vertScrollFg.offsetTop + diffY);
			me._nodes_scroller.ggScrollPosY = Math.max(me._nodes_scroller.ggScrollPosY, 0);
			me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
			me._nodes_scroller.ggScrollPosYPercent = (me._nodes_scroller__vertScrollFg.offsetTop / me._nodes_scroller__vertScrollBg.offsetHeight);
		}
		me._nodes_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._nodes_scroller.ggVertScrollVisible || diffY == 0 || me._nodes_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._nodes_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._nodes_scroller.ggScrollPosY >= me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight)) {
					me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._nodes_scroller.ggScrollPosY <= 0)) {
					me._nodes_scroller.ggScrollPosY = Math.max(me._nodes_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
			me._nodes_scroller.ggScrollPosYPercent = (me._nodes_scroller__vertScrollFg.offsetTop / me._nodes_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._nodes_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._nodes_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._nodes_scroller.ggHPercentVisible);
					me._nodes_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._nodes_scroller.clientWidth - (me._nodes_scroller.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._nodes_scroller.clientWidth - (me._nodes_scroller.ggVertScrollVisible ? 6 : 0))) * me._nodes_scroller.ggHPercentVisible);
					me._nodes_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._nodes_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._nodes_scroller.clientHeight - (me._nodes_scroller.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._nodes_scroller.clientHeight - (me._nodes_scroller.ggHorScrollVisible ? 6 : 0))) * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._nodes_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._nodes_scroller.ggDragInertiaX *= 0.96;
				me._nodes_scroller.ggDragInertiaY *= 0.96;
				me._nodes_scroller.ggScrollByX(me._nodes_scroller.ggDragInertiaX);
				me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
				if (Math.abs(me._nodes_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._nodes_scroller.ggInInteraction = false;
			setTimeout(function() { me._nodes_scroller.ggIsDragging = false; }, 100);
		}
		me._nodes_scroller__content.mousetouchmove = e => {
			if (!me._nodes_scroller.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._nodes_scroller__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._nodes_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._nodes_scroller.ggDragStartY) > 10) me._nodes_scroller.ggIsDragging = true;
			var diffX = (eventX - me._nodes_scroller.ggDragLastX) * me._nodes_scroller.ggHPercentVisible;
			var diffY = (eventY - me._nodes_scroller.ggDragLastY) * me._nodes_scroller.ggVPercentVisible;
			me._nodes_scroller.ggDragInertiaX = -diffX;
			me._nodes_scroller.ggDragInertiaY = -diffY;
			me._nodes_scroller.ggDragLastX = eventX;
			me._nodes_scroller.ggDragLastY = eventY;
			me._nodes_scroller.ggScrollByX(-diffX);
			me._nodes_scroller.ggScrollByY(-diffY);
		}
		me._nodes_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._nodes_scroller.ggDragLastX = me._nodes_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._nodes_scroller.ggDragLastY = me._nodes_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._nodes_scroller.ggInInteraction = true;
		}
		els.onmousedown = me._nodes_scroller__content.mousetouchstart;
		els.ontouchstart = me._nodes_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._nodes_scroller__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._nodes_scroller.contentMouseupListener = function() { me._nodes_scroller__content.mousetouchend(); });
		document.addEventListener('touchend', me._nodes_scroller.contentTouchendListener = function() { me._nodes_scroller__content.mousetouchend(); });
		document.addEventListener('mousemove', me._nodes_scroller.contentMousemoveListener = function() { me._nodes_scroller__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._nodes_scroller.contentTouchmoveListener = function() { me._nodes_scroller__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._nodes_scroller.pointerupListener = function() { me._nodes_scroller__content.mousetouchend(); });
			document.addEventListener('pointermove', me._nodes_scroller.pointermoveListener = function() { me._nodes_scroller__content.mousetouchmove(); });
		}
		elVertScrollBg = me._nodes_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 6px; height: 403px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._nodes_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 6px; height: 403px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._nodes_scroller.ggScrollPosY = 0;
		me._nodes_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._nodes_scroller.ggDragLastY = e.clientY;
			document.addEventListener('mouseup', me._nodes_scroller.vertMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller.ggDragInertiaY *= 0.96;
					me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._nodes_scroller.vertMouseupListener);
				document.removeEventListener('mousemove', me._nodes_scroller.vertMousemoveListener);
			});
			document.addEventListener('mousemove', me._nodes_scroller.vertMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._nodes_scroller.ggDragLastY;
				me._nodes_scroller.ggDragInertiaY = diffY;
				me._nodes_scroller.ggDragLastY = e.clientY;
				me._nodes_scroller.ggScrollByY(diffY);
			});
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._nodes_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._nodes_scroller.vertTouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller.ggDragInertiaY *= 0.96;
					me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._nodes_scroller.vertTouchendListener);
				document.removeEventListener('touchmove', me._nodes_scroller.vertTouchmoveListener);
				document.removeEventListener('pointerup', me._nodes_scroller.vertPointerupListener);
				document.removeEventListener('pointermove', me._nodes_scroller.vertPointermoveListener);
			}
			document.addEventListener('touchend', me._nodes_scroller.vertTouchendListener = function() { me._nodes_scroller.vertTouchend(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._nodes_scroller.vertPointerupListener = function() { me._nodes_scroller.vertTouchend(); });
			}
			me._nodes_scroller.vertTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._nodes_scroller.ggDragLastY;
				me._nodes_scroller.ggDragInertiaY = diffY;
				me._nodes_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._nodes_scroller.ggScrollByY(diffY);
			}
			document.addEventListener('touchmove', me._nodes_scroller.vertTouchmoveListener = function(e) { me._nodes_scroller.vertTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._nodes_scroller.vertPointermoveListener = function(e) { me._nodes_scroller.vertTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._nodes_scroller.ggScrollHeight;
			if (e.offsetY < me._nodes_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._nodes_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._nodes_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._nodes_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._nodes_scroller.ggScrollByYSmooth(30 * me._nodes_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._nodes_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="nodes_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nodes_scroller.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.top = -(Math.round(me._nodes_scroller.ggScrollPosY / me._nodes_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._nodes_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 6) || (!me._nodes_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._nodes_scroller__vertScrollBg.style.visibility = 'inherit';
					me._nodes_scroller__vertScrollFg.style.visibility = 'inherit';
					me._nodes_scroller.ggVertScrollVisible = true;
				} else {
					me._nodes_scroller__vertScrollBg.style.visibility = 'hidden';
					me._nodes_scroller__vertScrollFg.style.visibility = 'hidden';
					me._nodes_scroller.ggVertScrollVisible = false;
				}
				if(me._nodes_scroller.ggVertScrollVisible) {
					me._nodes_scroller.ggAvailableWidth = me._nodes_scroller.clientWidth - 6;
					if (me._nodes_scroller.ggHorScrollVisible) {
						me._nodes_scroller.ggAvailableHeight = me._nodes_scroller.clientHeight - 6;
						me._nodes_scroller.ggAvailableHeightWithScale = me._nodes_scroller.getBoundingClientRect().height - me._nodes_scroller__vertScrollBg.getBoundingClientRect().width;
						me._nodes_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._nodes_scroller.ggAvailableHeight = me._nodes_scroller.clientHeight;
						me._nodes_scroller.ggAvailableHeightWithScale = me._nodes_scroller.getBoundingClientRect().height;
						me._nodes_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._nodes_scroller__vertScrollBg.style.height = me._nodes_scroller.ggAvailableHeight + 'px';
					me._nodes_scroller.ggVPercentVisible = contentHeight != 0 ? me._nodes_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._nodes_scroller.ggVPercentVisible > 1.0) me._nodes_scroller.ggVPercentVisible = 1.0;
					me._nodes_scroller.ggScrollHeight =  Math.round(me._nodes_scroller__vertScrollBg.offsetHeight * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller__vertScrollFg.style.height = me._nodes_scroller.ggScrollHeight + 'px';
					me._nodes_scroller.ggScrollPosY = me._nodes_scroller.ggScrollPosYPercent * me._nodes_scroller.ggAvailableHeight;
					me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
					me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
					if (me._nodes_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
						me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._nodes_scroller.ggAvailableWidth = me._nodes_scroller.clientWidth;
					me._nodes_scroller.ggScrollPosY = 0;
					me._nodes_scroller.ggScrollPosYPercent = 0.0;
					me._nodes_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._nodes_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._nodes_scroller.ggHorScrollVisible || vertScrollWasVisible != me._nodes_scroller.ggVertScrollVisible) {
					skin.updateSize(me._nodes_scroller);
					me._nodes_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner;
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
		el.ggWidth = 200;
		el.ggHeight = 155;
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
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner.ggCloneOffsetChanged = false;
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
				me._node_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner.getFilteredNodes(tourNodes, filter);
			me._node_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
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
			me._node_cloner.ggNodeCount = me._node_cloner.ggNumFilterPassed;
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode && me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
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
		me._node_cloner.ggUpdatePosition=function (useTransition) {
			me._node_cloner.ggUpdate();
		}
		me._nodes_scroller__content.appendChild(me._node_cloner);
		me._nodes_menu.appendChild(me._nodes_scroller);
		me._menu.appendChild(me._nodes_menu);
		el=me._categories_menu_phone_landscape=document.createElement('div');
		el.ggId="categories_menu_phone_landscape";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 70px;';
		hs+='height : 155px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_menu_phone_landscape.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._categories_menu_phone_landscape.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_menu_phone_landscape.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_menu_phone_landscape.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_menu_phone_landscape.style.transition='';
				if (me._categories_menu_phone_landscape.ggCurrentLogicStateVisible == 0) {
					me._categories_menu_phone_landscape.style.visibility="hidden";
					me._categories_menu_phone_landscape.ggVisible=false;
				}
				else {
					me._categories_menu_phone_landscape.style.visibility=(Number(me._categories_menu_phone_landscape.style.opacity)>0||!me._categories_menu_phone_landscape.style.opacity)?'inherit':'hidden';
					me._categories_menu_phone_landscape.ggVisible=true;
				}
			}
		}
		me._categories_menu_phone_landscape.ggUpdatePosition=function (useTransition) {
		}
		el=me._categories_scroller_pl=document.createElement('div');
		els=me._categories_scroller_pl__content=document.createElement('div');
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
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 214px;';
		hs+="";
		els.setAttribute('style',hs);
		me._categories_scroller_pl.ggScrollByX = function(diffX) {
			if(!me._categories_scroller_pl.ggHorScrollVisible || diffX == 0 || me._categories_scroller_pl.ggHPercentVisible >= 1.0) return;
			me._categories_scroller_pl.ggScrollPosX = (me._categories_scroller_pl__horScrollFg.offsetLeft + diffX);
			me._categories_scroller_pl.ggScrollPosX = Math.max(me._categories_scroller_pl.ggScrollPosX, 0);
			me._categories_scroller_pl.ggScrollPosX = Math.min(me._categories_scroller_pl.ggScrollPosX, me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
			me._categories_scroller_pl__horScrollFg.style.left = me._categories_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosX / (me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
			me._categories_scroller_pl__content.style.left = -(Math.round((me._categories_scroller_pl.ggContentWidth * (1.0 - me._categories_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentLeftOffset + 'px';
			me._categories_scroller_pl.ggScrollPosXPercent = (me._categories_scroller_pl__horScrollFg.offsetLeft / me._categories_scroller_pl__horScrollBg.offsetWidth);
		}
		me._categories_scroller_pl.ggScrollByXSmooth = function(diffX) {
			if(!me._categories_scroller_pl.ggHorScrollVisible || diffX == 0 || me._categories_scroller_pl.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._categories_scroller_pl.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._categories_scroller_pl.ggScrollPosX >= me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth)) {
					me._categories_scroller_pl.ggScrollPosX = Math.min(me._categories_scroller_pl.ggScrollPosX, me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._categories_scroller_pl.ggScrollPosX <= 0)) {
					me._categories_scroller_pl.ggScrollPosX = Math.max(me._categories_scroller_pl.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._categories_scroller_pl__horScrollFg.style.left = me._categories_scroller_pl.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosX / (me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
			me._categories_scroller_pl__content.style.left = -(Math.round((me._categories_scroller_pl.ggContentWidth * (1.0 - me._categories_scroller_pl.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentLeftOffset + 'px';
			me._categories_scroller_pl.ggScrollPosXPercent = (me._categories_scroller_pl__horScrollFg.offsetLeft / me._categories_scroller_pl__horScrollBg.offsetWidth);
			}, 10);
		}
		me._categories_scroller_pl.ggScrollByY = function(diffY) {
			if(!me._categories_scroller_pl.ggVertScrollVisible || diffY == 0 || me._categories_scroller_pl.ggVPercentVisible >= 1.0) return;
			me._categories_scroller_pl.ggScrollPosY = (me._categories_scroller_pl__vertScrollFg.offsetTop + diffY);
			me._categories_scroller_pl.ggScrollPosY = Math.max(me._categories_scroller_pl.ggScrollPosY, 0);
			me._categories_scroller_pl.ggScrollPosY = Math.min(me._categories_scroller_pl.ggScrollPosY, me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
			me._categories_scroller_pl__vertScrollFg.style.top = me._categories_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosY / (me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
			me._categories_scroller_pl__content.style.top = -(Math.round((me._categories_scroller_pl.ggContentHeight * (1.0 - me._categories_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentTopOffset + 'px';
			me._categories_scroller_pl.ggScrollPosYPercent = (me._categories_scroller_pl__vertScrollFg.offsetTop / me._categories_scroller_pl__vertScrollBg.offsetHeight);
		}
		me._categories_scroller_pl.ggScrollByYSmooth = function(diffY) {
			if(!me._categories_scroller_pl.ggVertScrollVisible || diffY == 0 || me._categories_scroller_pl.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._categories_scroller_pl.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._categories_scroller_pl.ggScrollPosY >= me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight)) {
					me._categories_scroller_pl.ggScrollPosY = Math.min(me._categories_scroller_pl.ggScrollPosY, me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._categories_scroller_pl.ggScrollPosY <= 0)) {
					me._categories_scroller_pl.ggScrollPosY = Math.max(me._categories_scroller_pl.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._categories_scroller_pl__vertScrollFg.style.top = me._categories_scroller_pl.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller_pl.ggScrollPosY / (me._categories_scroller_pl__vertScrollBg.offsetHeight - me._categories_scroller_pl__vertScrollFg.offsetHeight);
			me._categories_scroller_pl__content.style.top = -(Math.round((me._categories_scroller_pl.ggContentHeight * (1.0 - me._categories_scroller_pl.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller_pl.ggContentTopOffset + 'px';
			me._categories_scroller_pl.ggScrollPosYPercent = (me._categories_scroller_pl__vertScrollFg.offsetTop / me._categories_scroller_pl__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._categories_scroller_pl.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._categories_scroller_pl.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._categories_scroller_pl.ggHPercentVisible);
					me._categories_scroller_pl.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._categories_scroller_pl.clientWidth - (me._categories_scroller_pl.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._categories_scroller_pl.clientWidth - (me._categories_scroller_pl.ggVertScrollVisible ? 6 : 0))) * me._categories_scroller_pl.ggHPercentVisible);
					me._categories_scroller_pl.ggScrollByXSmooth(diffX);
				}
			}
			if (me._categories_scroller_pl.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._categories_scroller_pl.ggVPercentVisible);
					me._categories_scroller_pl.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._categories_scroller_pl.clientHeight - (me._categories_scroller_pl.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._categories_scroller_pl.clientHeight - (me._categories_scroller_pl.ggHorScrollVisible ? 6 : 0))) * me._categories_scroller_pl.ggVPercentVisible);
					me._categories_scroller_pl.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._categories_scroller_pl__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._categories_scroller_pl.ggDragInertiaX *= 0.96;
				me._categories_scroller_pl.ggDragInertiaY *= 0.96;
				me._categories_scroller_pl.ggScrollByX(me._categories_scroller_pl.ggDragInertiaX);
				me._categories_scroller_pl.ggScrollByY(me._categories_scroller_pl.ggDragInertiaY);
				if (Math.abs(me._categories_scroller_pl.ggDragInertiaX) < 1.0 && Math.abs(me._categories_scroller_pl.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._categories_scroller_pl.ggInInteraction = false;
			setTimeout(function() { me._categories_scroller_pl.ggIsDragging = false; }, 100);
		}
		me._categories_scroller_pl__content.mousetouchmove = e => {
			if (!me._categories_scroller_pl.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._categories_scroller_pl__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._categories_scroller_pl.ggDragStartX) > 10 || Math.abs(eventY - me._categories_scroller_pl.ggDragStartY) > 10) me._categories_scroller_pl.ggIsDragging = true;
			var diffX = (eventX - me._categories_scroller_pl.ggDragLastX) * me._categories_scroller_pl.ggHPercentVisible;
			var diffY = (eventY - me._categories_scroller_pl.ggDragLastY) * me._categories_scroller_pl.ggVPercentVisible;
			me._categories_scroller_pl.ggDragInertiaX = -diffX;
			me._categories_scroller_pl.ggDragInertiaY = -diffY;
			me._categories_scroller_pl.ggDragLastX = eventX;
			me._categories_scroller_pl.ggDragLastY = eventY;
			me._categories_scroller_pl.ggScrollByX(-diffX);
			me._categories_scroller_pl.ggScrollByY(-diffY);
		}
		me._categories_scroller_pl__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._categories_scroller_pl.ggDragLastX = me._categories_scroller_pl.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._categories_scroller_pl.ggDragLastY = me._categories_scroller_pl.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._categories_scroller_pl.ggInInteraction = true;
		}
		els.onmousedown = me._categories_scroller_pl__content.mousetouchstart;
		els.ontouchstart = me._categories_scroller_pl__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._categories_scroller_pl__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._categories_scroller_pl.contentMouseupListener = function() { me._categories_scroller_pl__content.mousetouchend(); });
		document.addEventListener('touchend', me._categories_scroller_pl.contentTouchendListener = function() { me._categories_scroller_pl__content.mousetouchend(); });
		document.addEventListener('mousemove', me._categories_scroller_pl.contentMousemoveListener = function() { me._categories_scroller_pl__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._categories_scroller_pl.contentTouchmoveListener = function() { me._categories_scroller_pl__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._categories_scroller_pl.pointerupListener = function() { me._categories_scroller_pl__content.mousetouchend(); });
			document.addEventListener('pointermove', me._categories_scroller_pl.pointermoveListener = function() { me._categories_scroller_pl__content.mousetouchmove(); });
		}
		elHorScrollBg = me._categories_scroller_pl__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._categories_scroller_pl__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 205px; height: 6px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._categories_scroller_pl.ggScrollPosX = 0;
		me._categories_scroller_pl.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._categories_scroller_pl.ggDragLastX = e.clientX;
			document.addEventListener('mouseup', me._categories_scroller_pl.horMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller_pl.ggDragInertiaX *= 0.96;
					me._categories_scroller_pl.ggScrollByX(me._categories_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._categories_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._categories_scroller_pl.horMouseupListener);
				document.removeEventListener('mousemove', me._categories_scroller_pl.horMousemoveListener);
			});
			document.addEventListener('mousemove', me._categories_scroller_pl.horMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._categories_scroller_pl.ggDragLastX;
				me._categories_scroller_pl.ggDragInertiaX = diffX;
				me._categories_scroller_pl.ggDragLastX = e.clientX;
				me._categories_scroller_pl.ggScrollByX(diffX);
			});
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._categories_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._categories_scroller_pl.horTouchEnd = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller_pl.ggDragInertiaX *= 0.96;
					me._categories_scroller_pl.ggScrollByX(me._categories_scroller_pl.ggDragInertiaX);
					if (Math.abs(me._categories_scroller_pl.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._categories_scroller_pl.horTouchendListener);
				document.removeEventListener('touchmove', me._categories_scroller_pl.horTouchmoveListener);
				document.removeEventListener('pointerup', me._categories_scroller_pl.horPointerupListener);
				document.removeEventListener('pointermove', me._categories_scroller_pl.horPointermoveListener);
			}
			document.addEventListener('touchend', me._categories_scroller_pl.horTouchendListener = function() { me._categories_scroller_pl.horTouchEnd(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._categories_scroller_pl.horPointerupListener = function() { me._categories_scroller_pl.horTouchEnd(); });
			}
			me._categories_scroller_pl.horTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._categories_scroller_pl.ggDragLastX;
				me._categories_scroller_pl.ggDragInertiaX = diffX;
				me._categories_scroller_pl.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._categories_scroller_pl.ggScrollByX(diffX);
			}
			document.addEventListener('touchmove', me._categories_scroller_pl.horTouchmoveListener = function(e) { me._categories_scroller_pl.horTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._categories_scroller_pl.horPointermoveListener = function(e) { me._categories_scroller_pl.horTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._categories_scroller_pl.ggScrollWidth;
			if (e.offsetX < me._categories_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._categories_scroller_pl.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._categories_scroller_pl__horScrollBg.getBoundingClientRect();
			var diffX = me._categories_scroller_pl.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._categories_scroller_pl.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._categories_scroller_pl.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._categories_scroller_pl.ggScrollByXSmooth(30 * me._categories_scroller_pl.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._categories_scroller_pl__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="categories_scroller_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_scroller_pl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._categories_scroller_pl.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = -(Math.round(me._categories_scroller_pl.ggScrollPosX / me._categories_scroller_pl.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._categories_scroller_pl__horScrollBg.style.visibility = 'inherit';
					me._categories_scroller_pl__horScrollFg.style.visibility = 'inherit';
					me._categories_scroller_pl.ggHorScrollVisible = true;
				} else {
					me._categories_scroller_pl__horScrollBg.style.visibility = 'hidden';
					me._categories_scroller_pl__horScrollFg.style.visibility = 'hidden';
					me._categories_scroller_pl.ggHorScrollVisible = false;
				}
				if(me._categories_scroller_pl.ggHorScrollVisible) {
					me._categories_scroller_pl.ggAvailableHeight = me._categories_scroller_pl.clientHeight - 6;
					if (me._categories_scroller_pl.ggVertScrollVisible) {
						me._categories_scroller_pl.ggAvailableWidth = me._categories_scroller_pl.clientWidth - 6;
						me._categories_scroller_pl.ggAvailableWidthWithScale = me._categories_scroller_pl.getBoundingClientRect().width - me._categories_scroller_pl__horScrollBg.getBoundingClientRect().height;
					} else {
						me._categories_scroller_pl.ggAvailableWidth = me._categories_scroller_pl.clientWidth;
						me._categories_scroller_pl.ggAvailableWidthWithScale = me._categories_scroller_pl.getBoundingClientRect().width;
					}
					me._categories_scroller_pl__horScrollBg.style.width = me._categories_scroller_pl.ggAvailableWidth + 'px';
					me._categories_scroller_pl.ggHPercentVisible = contentWidth != 0 ? me._categories_scroller_pl.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._categories_scroller_pl.ggHPercentVisible > 1.0) me._categories_scroller_pl.ggHPercentVisible = 1.0;
					me._categories_scroller_pl.ggScrollWidth = Math.round(me._categories_scroller_pl__horScrollBg.offsetWidth * me._categories_scroller_pl.ggHPercentVisible);
					me._categories_scroller_pl__horScrollFg.style.width = me._categories_scroller_pl.ggScrollWidth + 'px';
					me._categories_scroller_pl.ggScrollPosX = me._categories_scroller_pl.ggScrollPosXPercent * me._categories_scroller_pl.ggAvailableWidth;
					me._categories_scroller_pl.ggScrollPosX = Math.min(me._categories_scroller_pl.ggScrollPosX, me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
					me._categories_scroller_pl__horScrollFg.style.left = me._categories_scroller_pl.ggScrollPosX + 'px';
					if (me._categories_scroller_pl.ggHPercentVisible < 1.0) {
						let percentScrolled = me._categories_scroller_pl.ggScrollPosX / (me._categories_scroller_pl__horScrollBg.offsetWidth - me._categories_scroller_pl__horScrollFg.offsetWidth);
						me._categories_scroller_pl__content.style.left = -(Math.round((me._categories_scroller_pl.ggContentWidth * (1.0 - me._categories_scroller_pl.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._categories_scroller_pl.ggAvailableHeight = me._categories_scroller_pl.clientHeight;
					me._categories_scroller_pl.ggScrollPosX = 0;
					me._categories_scroller_pl.ggScrollPosXPercent = 0.0;
					me._categories_scroller_pl__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._categories_scroller_pl.ggHorScrollVisible || vertScrollWasVisible != me._categories_scroller_pl.ggVertScrollVisible) {
					skin.updateSize(me._categories_scroller_pl);
					me._categories_scroller_pl.ggUpdatePosition();
				}
			}
		}
		el=me._categories_cloner_pl=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._categories_cloner_pl;
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
		el.ggWidth = 215;
		el.ggHeight = 155;
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
			if(me._categories_cloner_pl.ggUpdating == true) return;
			me._categories_cloner_pl.ggUpdating = true;
			var el=me._categories_cloner_pl;
			var curNumRows = 0;
			curNumRows = me._categories_cloner_pl.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._categories_cloner_pl.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._categories_cloner_pl.ggCloneOffsetChanged = false;
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
				me._categories_cloner_pl.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._categories_cloner_pl.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._categories_cloner_pl.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._categories_cloner_pl.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._categories_cloner_pl.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._categories_cloner_pl.ggWidth) + 'px';
				parameter.width=me._categories_cloner_pl.ggWidth + 'px';
				parameter.height=me._categories_cloner_pl.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_categories_cloner_pl_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._categories_cloner_pl.ggNodeCount = me._categories_cloner_pl.ggNumFilterPassed;
			me._categories_cloner_pl.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._categories_cloner_pl.parentNode && me._categories_cloner_pl.parentNode.classList.contains('ggskin_subelement') && me._categories_cloner_pl.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._categories_cloner_pl.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"",title:"",description:""},
			];
		el.ggId="categories_cloner_pl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_cloner_pl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._categories_cloner_pl.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._categories_cloner_pl.childNodes.length; i++) {
				var child=me._categories_cloner_pl.childNodes[i];
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
		me._categories_cloner_pl.ggUpdatePosition=function (useTransition) {
			me._categories_cloner_pl.ggUpdate();
		}
		me._categories_scroller_pl__content.appendChild(me._categories_cloner_pl);
		me._categories_menu_phone_landscape.appendChild(me._categories_scroller_pl);
		me._menu.appendChild(me._categories_menu_phone_landscape);
		el=me._categories_menu=document.createElement('div');
		el.ggId="categories_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 205px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._categories_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('num_button_rows') > Number("1")))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._categories_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._categories_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._categories_menu.style.transition='width 0s, height 0s';
				if (me._categories_menu.ggCurrentLogicStateSize == 0) {
					me._categories_menu.style.width='205px';
					me._categories_menu.style.height='calc(100% - 197px)';
					skin.updateSize(me._categories_menu);
				}
				else {
					me._categories_menu.style.width='205px';
					me._categories_menu.style.height='calc(100% - 155px)';
					skin.updateSize(me._categories_menu);
				}
			}
		}
		me._categories_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_nodes') == true)) || 
				((player.getVariableValue('has_categories') == false)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_menu.style.transition='width 0s, height 0s';
				if (me._categories_menu.ggCurrentLogicStateVisible == 0) {
					me._categories_menu.style.visibility="hidden";
					me._categories_menu.ggVisible=false;
				}
				else {
					me._categories_menu.style.visibility=(Number(me._categories_menu.style.opacity)>0||!me._categories_menu.style.opacity)?'inherit':'hidden';
					me._categories_menu.ggVisible=true;
				}
			}
		}
		me._categories_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._categories_scroller=document.createElement('div');
		els=me._categories_scroller__content=document.createElement('div');
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
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._categories_scroller.ggScrollByX = function(diffX) {
			if(!me._categories_scroller.ggHorScrollVisible || diffX == 0 || me._categories_scroller.ggHPercentVisible >= 1.0) return;
			me._categories_scroller.ggScrollPosX = (me._categories_scroller__horScrollFg.offsetLeft + diffX);
			me._categories_scroller.ggScrollPosX = Math.max(me._categories_scroller.ggScrollPosX, 0);
			me._categories_scroller.ggScrollPosX = Math.min(me._categories_scroller.ggScrollPosX, me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__horScrollFg.style.left = me._categories_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosX / (me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__content.style.left = -(Math.round((me._categories_scroller.ggContentWidth * (1.0 - me._categories_scroller.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentLeftOffset + 'px';
			me._categories_scroller.ggScrollPosXPercent = (me._categories_scroller__horScrollFg.offsetLeft / me._categories_scroller__horScrollBg.offsetWidth);
		}
		me._categories_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._categories_scroller.ggHorScrollVisible || diffX == 0 || me._categories_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._categories_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._categories_scroller.ggScrollPosX >= me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth)) {
					me._categories_scroller.ggScrollPosX = Math.min(me._categories_scroller.ggScrollPosX, me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._categories_scroller.ggScrollPosX <= 0)) {
					me._categories_scroller.ggScrollPosX = Math.max(me._categories_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._categories_scroller__horScrollFg.style.left = me._categories_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosX / (me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__content.style.left = -(Math.round((me._categories_scroller.ggContentWidth * (1.0 - me._categories_scroller.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentLeftOffset + 'px';
			me._categories_scroller.ggScrollPosXPercent = (me._categories_scroller__horScrollFg.offsetLeft / me._categories_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._categories_scroller.ggScrollByY = function(diffY) {
			if(!me._categories_scroller.ggVertScrollVisible || diffY == 0 || me._categories_scroller.ggVPercentVisible >= 1.0) return;
			me._categories_scroller.ggScrollPosY = (me._categories_scroller__vertScrollFg.offsetTop + diffY);
			me._categories_scroller.ggScrollPosY = Math.max(me._categories_scroller.ggScrollPosY, 0);
			me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
			me._categories_scroller.ggScrollPosYPercent = (me._categories_scroller__vertScrollFg.offsetTop / me._categories_scroller__vertScrollBg.offsetHeight);
		}
		me._categories_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._categories_scroller.ggVertScrollVisible || diffY == 0 || me._categories_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._categories_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._categories_scroller.ggScrollPosY >= me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight)) {
					me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._categories_scroller.ggScrollPosY <= 0)) {
					me._categories_scroller.ggScrollPosY = Math.max(me._categories_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
			me._categories_scroller.ggScrollPosYPercent = (me._categories_scroller__vertScrollFg.offsetTop / me._categories_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._categories_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._categories_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._categories_scroller.ggHPercentVisible);
					me._categories_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._categories_scroller.clientWidth - (me._categories_scroller.ggVertScrollVisible ? 6 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._categories_scroller.clientWidth - (me._categories_scroller.ggVertScrollVisible ? 6 : 0))) * me._categories_scroller.ggHPercentVisible);
					me._categories_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._categories_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._categories_scroller.clientHeight - (me._categories_scroller.ggHorScrollVisible ? 6 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._categories_scroller.clientHeight - (me._categories_scroller.ggHorScrollVisible ? 6 : 0))) * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._categories_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._categories_scroller.ggDragInertiaX *= 0.96;
				me._categories_scroller.ggDragInertiaY *= 0.96;
				me._categories_scroller.ggScrollByX(me._categories_scroller.ggDragInertiaX);
				me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
				if (Math.abs(me._categories_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._categories_scroller.ggInInteraction = false;
			setTimeout(function() { me._categories_scroller.ggIsDragging = false; }, 100);
		}
		me._categories_scroller__content.mousetouchmove = e => {
			if (!me._categories_scroller.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._categories_scroller__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._categories_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._categories_scroller.ggDragStartY) > 10) me._categories_scroller.ggIsDragging = true;
			var diffX = (eventX - me._categories_scroller.ggDragLastX) * me._categories_scroller.ggHPercentVisible;
			var diffY = (eventY - me._categories_scroller.ggDragLastY) * me._categories_scroller.ggVPercentVisible;
			me._categories_scroller.ggDragInertiaX = -diffX;
			me._categories_scroller.ggDragInertiaY = -diffY;
			me._categories_scroller.ggDragLastX = eventX;
			me._categories_scroller.ggDragLastY = eventY;
			me._categories_scroller.ggScrollByX(-diffX);
			me._categories_scroller.ggScrollByY(-diffY);
		}
		me._categories_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._categories_scroller.ggDragLastX = me._categories_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._categories_scroller.ggDragLastY = me._categories_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._categories_scroller.ggInInteraction = true;
		}
		els.onmousedown = me._categories_scroller__content.mousetouchstart;
		els.ontouchstart = me._categories_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._categories_scroller__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._categories_scroller.contentMouseupListener = function() { me._categories_scroller__content.mousetouchend(); });
		document.addEventListener('touchend', me._categories_scroller.contentTouchendListener = function() { me._categories_scroller__content.mousetouchend(); });
		document.addEventListener('mousemove', me._categories_scroller.contentMousemoveListener = function() { me._categories_scroller__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._categories_scroller.contentTouchmoveListener = function() { me._categories_scroller__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._categories_scroller.pointerupListener = function() { me._categories_scroller__content.mousetouchend(); });
			document.addEventListener('pointermove', me._categories_scroller.pointermoveListener = function() { me._categories_scroller__content.mousetouchmove(); });
		}
		elVertScrollBg = me._categories_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 6px; height: 399px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._categories_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 6px; height: 399px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._categories_scroller.ggScrollPosY = 0;
		me._categories_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._categories_scroller.ggDragLastY = e.clientY;
			document.addEventListener('mouseup', me._categories_scroller.vertMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller.ggDragInertiaY *= 0.96;
					me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
					if (Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._categories_scroller.vertMouseupListener);
				document.removeEventListener('mousemove', me._categories_scroller.vertMousemoveListener);
			});
			document.addEventListener('mousemove', me._categories_scroller.vertMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._categories_scroller.ggDragLastY;
				me._categories_scroller.ggDragInertiaY = diffY;
				me._categories_scroller.ggDragLastY = e.clientY;
				me._categories_scroller.ggScrollByY(diffY);
			});
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._categories_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._categories_scroller.vertTouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller.ggDragInertiaY *= 0.96;
					me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
					if (Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._categories_scroller.vertTouchendListener);
				document.removeEventListener('touchmove', me._categories_scroller.vertTouchmoveListener);
				document.removeEventListener('pointerup', me._categories_scroller.vertPointerupListener);
				document.removeEventListener('pointermove', me._categories_scroller.vertPointermoveListener);
			}
			document.addEventListener('touchend', me._categories_scroller.vertTouchendListener = function() { me._categories_scroller.vertTouchend(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._categories_scroller.vertPointerupListener = function() { me._categories_scroller.vertTouchend(); });
			}
			me._categories_scroller.vertTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._categories_scroller.ggDragLastY;
				me._categories_scroller.ggDragInertiaY = diffY;
				me._categories_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._categories_scroller.ggScrollByY(diffY);
			}
			document.addEventListener('touchmove', me._categories_scroller.vertTouchmoveListener = function(e) { me._categories_scroller.vertTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._categories_scroller.vertPointermoveListener = function(e) { me._categories_scroller.vertTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._categories_scroller.ggScrollHeight;
			if (e.offsetY < me._categories_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._categories_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._categories_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._categories_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._categories_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._categories_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._categories_scroller.ggScrollByYSmooth(30 * me._categories_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._categories_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 6px; height: 6px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="categories_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._categories_scroller.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.top = -(Math.round(me._categories_scroller.ggScrollPosY / me._categories_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._categories_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 6) || (!me._categories_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._categories_scroller__vertScrollBg.style.visibility = 'inherit';
					me._categories_scroller__vertScrollFg.style.visibility = 'inherit';
					me._categories_scroller.ggVertScrollVisible = true;
				} else {
					me._categories_scroller__vertScrollBg.style.visibility = 'hidden';
					me._categories_scroller__vertScrollFg.style.visibility = 'hidden';
					me._categories_scroller.ggVertScrollVisible = false;
				}
				if(me._categories_scroller.ggVertScrollVisible) {
					me._categories_scroller.ggAvailableWidth = me._categories_scroller.clientWidth - 6;
					if (me._categories_scroller.ggHorScrollVisible) {
						me._categories_scroller.ggAvailableHeight = me._categories_scroller.clientHeight - 6;
						me._categories_scroller.ggAvailableHeightWithScale = me._categories_scroller.getBoundingClientRect().height - me._categories_scroller__vertScrollBg.getBoundingClientRect().width;
						me._categories_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._categories_scroller.ggAvailableHeight = me._categories_scroller.clientHeight;
						me._categories_scroller.ggAvailableHeightWithScale = me._categories_scroller.getBoundingClientRect().height;
						me._categories_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._categories_scroller__vertScrollBg.style.height = me._categories_scroller.ggAvailableHeight + 'px';
					me._categories_scroller.ggVPercentVisible = contentHeight != 0 ? me._categories_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._categories_scroller.ggVPercentVisible > 1.0) me._categories_scroller.ggVPercentVisible = 1.0;
					me._categories_scroller.ggScrollHeight =  Math.round(me._categories_scroller__vertScrollBg.offsetHeight * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller__vertScrollFg.style.height = me._categories_scroller.ggScrollHeight + 'px';
					me._categories_scroller.ggScrollPosY = me._categories_scroller.ggScrollPosYPercent * me._categories_scroller.ggAvailableHeight;
					me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
					me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
					if (me._categories_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
						me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._categories_scroller.ggAvailableWidth = me._categories_scroller.clientWidth;
					me._categories_scroller.ggScrollPosY = 0;
					me._categories_scroller.ggScrollPosYPercent = 0.0;
					me._categories_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._categories_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._categories_scroller.ggHorScrollVisible || vertScrollWasVisible != me._categories_scroller.ggVertScrollVisible) {
					skin.updateSize(me._categories_scroller);
					me._categories_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._categories_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._categories_cloner;
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
		el.ggWidth = 200;
		el.ggHeight = 155;
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
			if(me._categories_cloner.ggUpdating == true) return;
			me._categories_cloner.ggUpdating = true;
			var el=me._categories_cloner;
			var curNumCols = 0;
			curNumCols = me._categories_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._categories_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._categories_cloner.ggCloneOffsetChanged = false;
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
				me._categories_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._categories_cloner.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._categories_cloner.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._categories_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._categories_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._categories_cloner.ggWidth) + 'px';
				parameter.width=me._categories_cloner.ggWidth + 'px';
				parameter.height=me._categories_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_categories_cloner_Class(nodeId, me, el, parameter);
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
			me._categories_cloner.ggNodeCount = me._categories_cloner.ggNumFilterPassed;
			me._categories_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._categories_cloner.parentNode && me._categories_cloner.parentNode.classList.contains('ggskin_subelement') && me._categories_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._categories_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"",title:"",description:""},
			];
		el.ggId="categories_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 155px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._categories_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._categories_cloner.childNodes.length; i++) {
				var child=me._categories_cloner.childNodes[i];
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
		me._categories_cloner.ggUpdatePosition=function (useTransition) {
			me._categories_cloner.ggUpdate();
		}
		me._categories_scroller__content.appendChild(me._categories_cloner);
		me._categories_menu.appendChild(me._categories_scroller);
		me._menu.appendChild(me._categories_menu);
		me.divSkin.appendChild(me._menu);
		el=me._menu_toggle_bg=document.createElement('div');
		el.ggId="menu_toggle_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 72px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_bg.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_bg.style.transition='opacity 500ms ease 0ms';
				if (me._menu_toggle_bg.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_bg.style.visibility=(Number(me._menu_toggle_bg.style.opacity)>0||!me._menu_toggle_bg.style.opacity)?'inherit':'hidden';
					me._menu_toggle_bg.ggVisible=true;
				}
				else {
					me._menu_toggle_bg.style.visibility="hidden";
					me._menu_toggle_bg.ggVisible=false;
				}
			}
		}
		me._menu_toggle_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_toggle_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_toggle_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_toggle_bg.style.transition='opacity 500ms ease 0ms';
				if (me._menu_toggle_bg.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._menu_toggle_bg.style.opacity == 0.0) { me._menu_toggle_bg.style.visibility="hidden"; } }, 505);
					me._menu_toggle_bg.style.opacity=0;
				}
				else {
					me._menu_toggle_bg.style.visibility=me._menu_toggle_bg.ggVisible?'inherit':'hidden';
					me._menu_toggle_bg.style.opacity=1;
				}
			}
		}
		me._menu_toggle_bg.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_toggle_bg);
		el=me._menu_toggle=document.createElement('div');
		el.ggId="menu_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('resp_phone_landscape') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('resp_phone_landscape') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_toggle.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_toggle.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_toggle.style.transition='left 500ms ease-in-out 0ms, top 500ms ease-in-out 0ms, opacity 500ms ease 0ms';
				if (me._menu_toggle.ggCurrentLogicStatePosition == 0) {
					me._menu_toggle.style.left='195px';
					me._menu_toggle.style.top='20px';
				}
				else if (me._menu_toggle.ggCurrentLogicStatePosition == 1) {
					me._menu_toggle.style.left='calc(100% - 52px)';
					me._menu_toggle.style.top='20px';
				}
				else {
					me._menu_toggle.style.left='20px';
					me._menu_toggle.style.top='20px';
				}
			}
		}
		me._menu_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('vis_languages') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle.style.transition='left 500ms ease-in-out 0ms, top 500ms ease-in-out 0ms, opacity 500ms ease 0ms';
				if (me._menu_toggle.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle.style.visibility=(Number(me._menu_toggle.style.opacity)>0||!me._menu_toggle.style.opacity)?'inherit':'hidden';
					me._menu_toggle.ggVisible=true;
				}
				else {
					me._menu_toggle.style.visibility="hidden";
					me._menu_toggle.ggVisible=false;
				}
			}
		}
		me._menu_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_toggle.style.transition='left 500ms ease-in-out 0ms, top 500ms ease-in-out 0ms, opacity 500ms ease 0ms';
				if (me._menu_toggle.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._menu_toggle.style.opacity == 0.0) { me._menu_toggle.style.visibility="hidden"; } }, 505);
					me._menu_toggle.style.opacity=0;
				}
				else {
					me._menu_toggle.style.visibility=me._menu_toggle.ggVisible?'inherit':'hidden';
					me._menu_toggle.style.opacity=1;
				}
			}
		}
		me._menu_toggle.ggDeactivate=function () {
			if (
				(
					((player.getVariableValue('vis_menu') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._close_to_menu_anim.style.transition='none';
				me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				me._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('vis_menu') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._menu_to_close_anim.style.transition='none';
				me._menu_to_close_anim.style.visibility='hidden';
				me._menu_to_close_anim.ggVisible=false;
			}
		}
		me._menu_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._back_to_close_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/back_to_close_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggLottie.setDirection(-1);
		el.ggLottie.addEventListener('data_ready', function() {
			me._back_to_close_anim.ggLottie.goToAndStop(me._back_to_close_anim.ggLottie.getDuration(true), true);
		});
		el.ggId="back_to_close_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._back_to_close_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._back_to_close_anim.onclick=function (e) {
			player.setVariableValue('vis_nodes', false);
			player.setVariableValue('vis_info', false);
			me._back_to_close_anim.ggLottie.loop = 0;
			me._back_to_close_anim.ggLottie.play();
			me._close_to_back_anim.ggLottie.stop();
			player.setVariableValue('hide_lottie_index', Number("4.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.5") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._back_to_close_anim.onmouseenter=function (e) {
			me.elementMouseOver['back_to_close_anim']=true;
			me._menu_toggle_back.logicBlock_visible();
		}
		me._back_to_close_anim.onmouseleave=function (e) {
			me.elementMouseOver['back_to_close_anim']=false;
			me._menu_toggle_back.logicBlock_visible();
		}
		me._back_to_close_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_back=document.createElement('div');
		els=me._menu_toggle_back__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJNMCwwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDwvZz4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOSwxMUg3LjgzbDQuODgtNC44OGMwLjM5LTAuMzksMC4zOS0xLjAzLDAtMS40MmwwLDBjLTAuMzktMC4zOS0xLjAyLTAuMzktMS40MSwwbC02LjU5LDYuNTkgYy0wLjM5LD'+
			'AuMzktMC4zOSwxLjAyLDAsMS40MWw2LjU5LDYuNTljMC4zOSwwLjM5LDEuMDIsMC4zOSwxLjQxLDBsMCwwYzAuMzktMC4zOSwwLjM5LTEuMDIsMC0xLjQxTDcuODMsMTNIMTkgYzAuNTUsMCwxLTAuNDUsMS0xbDAsMEMyMCwxMS40NSwxOS41NSwxMSwxOSwxMXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._menu_toggle_back__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_back.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['back_to_close_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("4")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_back.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_back.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_back.style.transition='';
				if (me._menu_toggle_back.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_back.style.visibility=(Number(me._menu_toggle_back.style.opacity)>0||!me._menu_toggle_back.style.opacity)?'inherit':'hidden';
					me._menu_toggle_back.ggVisible=true;
				}
				else {
					me._menu_toggle_back.style.visibility="hidden";
					me._menu_toggle_back.ggVisible=false;
				}
			}
		}
		me._menu_toggle_back.ggUpdatePosition=function (useTransition) {
		}
		me._back_to_close_anim.appendChild(me._menu_toggle_back);
		me._menu_toggle.appendChild(me._back_to_close_anim);
		el=me._close_to_back_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/close_to_back_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="close_to_back_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_to_back_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_to_back_anim.ggUpdatePosition=function (useTransition) {
		}
		me._menu_toggle.appendChild(me._close_to_back_anim);
		el=me._close_to_menu_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/close_to_menu_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggLottie.setDirection(-1);
		el.ggLottie.addEventListener('data_ready', function() {
			me._close_to_menu_anim.ggLottie.goToAndStop(me._close_to_menu_anim.ggLottie.getDuration(true), true);
		});
		el.ggId="close_to_menu_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_to_menu_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_to_menu_anim.onclick=function (e) {
			player.setVariableValue('vis_menu', false);
			me._close_to_menu_anim.ggLottie.loop = 0;
			me._close_to_menu_anim.ggLottie.play();
			me._menu_to_close_anim.ggLottie.stop();
			player.setVariableValue('hide_lottie_index', Number("2.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.6") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._close_to_menu_anim.onmouseenter=function (e) {
			me.elementMouseOver['close_to_menu_anim']=true;
			me._menu_toggle_off_active.logicBlock_visible();
		}
		me._close_to_menu_anim.onmouseleave=function (e) {
			me.elementMouseOver['close_to_menu_anim']=false;
			me._menu_toggle_off_active.logicBlock_visible();
		}
		me._close_to_menu_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_off_active=document.createElement('div');
		els=me._menu_toggle_off_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._menu_toggle_off_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_off_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_off_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_off_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_to_menu_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("2"))) && 
				((player.getVariableValue('hide_lottie_index') != Number("3")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_off_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_off_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_off_active.style.transition='';
				if (me._menu_toggle_off_active.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_off_active.style.visibility=(Number(me._menu_toggle_off_active.style.opacity)>0||!me._menu_toggle_off_active.style.opacity)?'inherit':'hidden';
					me._menu_toggle_off_active.ggVisible=true;
				}
				else {
					me._menu_toggle_off_active.style.visibility="hidden";
					me._menu_toggle_off_active.ggVisible=false;
				}
			}
		}
		me._menu_toggle_off_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_to_menu_anim.appendChild(me._menu_toggle_off_active);
		me._menu_toggle.appendChild(me._close_to_menu_anim);
		el=me._menu_to_close_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/menu_to_close_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="menu_to_close_anim";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_to_close_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_to_close_anim.onclick=function (e) {
			player.setVariableValue('vis_menu', true);
			me._menu_to_close_anim.ggLottie.loop = 0;
			me._menu_to_close_anim.ggLottie.play();
			me._close_to_menu_anim.ggLottie.goToAndStop(me._close_to_menu_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("1.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.6") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._menu_to_close_anim.onmouseenter=function (e) {
			me.elementMouseOver['menu_to_close_anim']=true;
			me._menu_toggle_on_active.logicBlock_visible();
		}
		me._menu_to_close_anim.onmouseleave=function (e) {
			me.elementMouseOver['menu_to_close_anim']=false;
			me._menu_toggle_on_active.logicBlock_visible();
		}
		me._menu_to_close_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_on_active=document.createElement('div');
		els=me._menu_toggle_on_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJNMCwwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDwvZz4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik00LDE4aDE2YzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg0Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDMywxNy41NSwzLjQ1LDE4LDQsMTh6IE00LD'+
			'EzaDE2IGMwLjU1LDAsMS0wLjQ1LDEtMWwwLDBjMC0wLjU1LTAuNDUtMS0xLTFINGMtMC41NSwwLTEsMC40NS0xLDFsMCwwQzMsMTIuNTUsMy40NSwxMyw0LDEzeiBNMyw3TDMsN2MwLDAuNTUsMC40NSwxLDEsMWgxNiBjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41NS0wLjQ1LTEtMS0xSDRDMy40NSw2LDMsNi40NSwzLDd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._menu_toggle_on_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_on_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_on_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_on_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_to_close_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_on_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_on_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_on_active.style.transition='';
				if (me._menu_toggle_on_active.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_on_active.style.visibility=(Number(me._menu_toggle_on_active.style.opacity)>0||!me._menu_toggle_on_active.style.opacity)?'inherit':'hidden';
					me._menu_toggle_on_active.ggVisible=true;
				}
				else {
					me._menu_toggle_on_active.style.visibility="hidden";
					me._menu_toggle_on_active.ggVisible=false;
				}
			}
		}
		me._menu_toggle_on_active.ggUpdatePosition=function (useTransition) {
		}
		me._menu_to_close_anim.appendChild(me._menu_toggle_on_active);
		me._menu_toggle.appendChild(me._menu_to_close_anim);
		el=me._menu_toggle_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="menu_toggle_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_timer.ggIsActive=function() {
			return (me._menu_toggle_timer.ggTimestamp + me._menu_toggle_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_timer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._menu_toggle_timer.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_timer.style.transition='';
				if (me._menu_toggle_timer.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_timer.style.visibility="hidden";
					me._menu_toggle_timer.ggVisible=false;
				}
				else {
					me._menu_toggle_timer.style.visibility=(Number(me._menu_toggle_timer.style.opacity)>0||!me._menu_toggle_timer.style.opacity)?'inherit':'hidden';
					me._menu_toggle_timer.ggVisible=true;
				}
			}
		}
		me._menu_toggle_timer.ggDeactivate=function () {
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("1")))
				)
			) {
				me._close_to_menu_anim.style.transition='none';
				me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				me._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("1")))
				)
			) {
				me._menu_to_close_anim.style.transition='none';
				me._menu_to_close_anim.style.visibility='hidden';
				me._menu_to_close_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("2")))
				)
			) {
				me._menu_to_close_anim.style.transition='none';
				me._menu_to_close_anim.style.visibility=(Number(me._menu_to_close_anim.style.opacity)>0||!me._menu_to_close_anim.style.opacity)?'inherit':'hidden';
				me._menu_to_close_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("2")))
				)
			) {
				me._close_to_menu_anim.style.transition='none';
				me._close_to_menu_anim.style.visibility='hidden';
				me._close_to_menu_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("3")))
				)
			) {
				me._back_to_close_anim.style.transition='none';
				me._back_to_close_anim.style.visibility=(Number(me._back_to_close_anim.style.opacity)>0||!me._back_to_close_anim.style.opacity)?'inherit':'hidden';
				me._back_to_close_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("3")))
				)
			) {
				me._close_to_back_anim.style.transition='none';
				me._close_to_back_anim.style.visibility='hidden';
				me._close_to_back_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("4")))
				)
			) {
				me._close_to_menu_anim.style.transition='none';
				me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				me._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("4")))
				)
			) {
				me._back_to_close_anim.style.transition='none';
				me._back_to_close_anim.style.visibility='hidden';
				me._back_to_close_anim.ggVisible=false;
			}
		}
		me._menu_toggle_timer.ggCurrentLogicStateVisible = -1;
		me._menu_toggle_timer.ggUpdateConditionTimer=function () {
			me._menu_toggle_timer.logicBlock_visible();
		}
		me._menu_toggle_timer.ggUpdatePosition=function (useTransition) {
		}
		me._menu_toggle.appendChild(me._menu_toggle_timer);
		me.divSkin.appendChild(me._menu_toggle);
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat shadow_title";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 130px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 120px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='pointer-events: none;';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 35px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
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
		player.addListener('changenode', function() {
			me._node_title.ggUpdateText();
		});
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
				((player._(player.getNodeUserdata('_master').title) == ""))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._node_title.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._node_title.ggCurrentLogicStatePosition == 0) {
					me._node_title.style.right='30px';
					me._node_title.style.top='30px';
				}
				else {
					me._node_title.style.right='30px';
					me._node_title.style.top='130px';
				}
			}
		}
		me._node_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_title.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateSize == 0) {
					me._node_title.style.width='calc(100% - 285px)';
					me._node_title.style.height='45px';
					skin.updateSize(me._node_title);
				}
				else {
					me._node_title.style.width='calc(100% - 120px)';
					me._node_title.style.height='45px';
					skin.updateSize(me._node_title);
				}
			}
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
				else {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
			}
		}
		me._node_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_title.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._node_title.style.opacity == 0.0) { me._node_title.style.visibility="hidden"; } }, 505);
					me._node_title.style.opacity=0;
				}
				else {
					me._node_title.style.visibility=me._node_title.ggVisible?'inherit':'hidden';
					me._node_title.style.opacity=1;
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
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat shadow_title";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 120px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='pointer-events: none;';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 60px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
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
		me._project_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._project_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._project_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._project_title.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._project_title.ggCurrentLogicStateSize == 0) {
					me._project_title.style.width='calc(100% - 285px)';
					me._project_title.style.height='70px';
					skin.updateSize(me._project_title);
				}
				else {
					me._project_title.style.width='calc(100% - 120px)';
					me._project_title.style.height='70px';
					skin.updateSize(me._project_title);
				}
			}
		}
		me._project_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._project_title.ggCurrentLogicStateVisible == 0) {
					me._project_title.style.visibility=(Number(me._project_title.style.opacity)>0||!me._project_title.style.opacity)?'inherit':'hidden';
					me._project_title.ggVisible=true;
				}
				else {
					me._project_title.style.visibility="hidden";
					me._project_title.ggVisible=false;
				}
			}
		}
		me._project_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._project_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._project_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._project_title.style.transition='width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._project_title.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._project_title.style.opacity == 0.0) { me._project_title.style.visibility="hidden"; } }, 505);
					me._project_title.style.opacity=0;
				}
				else {
					me._project_title.style.visibility=me._project_title.ggVisible?'inherit':'hidden';
					me._project_title.style.opacity=1;
				}
			}
		}
		me._project_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._project_title);
		el=me._screen_tint=document.createElement('div');
		el.ggId="screen_tint";
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
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_popup') == true)) || 
				((player.getVariableValue('vis_url_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint.style.transition='';
				if (me._screen_tint.ggCurrentLogicStateVisible == 0) {
					me._screen_tint.style.visibility=(Number(me._screen_tint.style.opacity)>0||!me._screen_tint.style.opacity)?'inherit':'hidden';
					me._screen_tint.ggVisible=true;
				}
				else {
					me._screen_tint.style.visibility="hidden";
					me._screen_tint.ggVisible=false;
				}
			}
		}
		me._screen_tint.onclick=function (e) {
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_video_popup_file', false);
			player.setVariableValue('vis_video_popup_url', false);
			player.setVariableValue('vis_video_popup_youtube', false);
			player.setVariableValue('vis_video_popup_vimeo', false);
		}
		me._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._screen_tint_bg=document.createElement('div');
		el.ggId="screen_tint_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
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
		me._screen_tint_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint_bg.ggUpdatePosition=function (useTransition) {
		}
		me._screen_tint.appendChild(me._screen_tint_bg);
		el=me._screen_tint_close=document.createElement('div');
		els=me._screen_tint_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._screen_tint_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._screen_tint_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._screen_tint_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="screen_tint_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint_close.onmouseenter=function (e) {
			me._screen_tint_close__img.style.visibility='hidden';
			me._screen_tint_close__imgo.style.visibility='inherit';
			me.elementMouseOver['screen_tint_close']=true;
		}
		me._screen_tint_close.onmouseleave=function (e) {
			me._screen_tint_close__img.style.visibility='inherit';
			me._screen_tint_close__imgo.style.visibility='hidden';
			me.elementMouseOver['screen_tint_close']=false;
		}
		me._screen_tint_close.ggUpdatePosition=function (useTransition) {
		}
		me._screen_tint.appendChild(me._screen_tint_close);
		me.divSkin.appendChild(me._screen_tint);
		el=me._video_popup=document.createElement('div');
		el.ggId="video_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_popup.style.transition='opacity 500ms ease 0ms';
				if (me._video_popup.ggCurrentLogicStateAlpha == 0) {
					me._video_popup.style.visibility=me._video_popup.ggVisible?'inherit':'hidden';
					me._video_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._video_popup.style.opacity == 0.0) { me._video_popup.style.visibility="hidden"; } }, 505);
					me._video_popup.style.opacity=0;
				}
			}
		}
		me._video_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_popup_vimeo=document.createElement('div');
		me._video_popup_vimeo.seekbars = [];
		me._video_popup_vimeo.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_popup_vimeo.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_popup_vimeo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_popup_vimeo.hasChildNodes()) {
				me._video_popup_vimeo.removeChild(me._video_popup_vimeo.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_popup_vimeo.ggVideoNotLoaded == false && me._video_popup_vimeo.ggDeactivate && player.isPlaying('video_popup_vimeo')) { me._video_popup_vimeo.ggDeactivate(); }
				me._video_popup_vimeo.ggVideoNotLoaded = true;
				return;
			}
			me._video_popup_vimeo.ggVideoNotLoaded = false;
			me._video_popup_vimeo__vid=document.createElement('iframe');
			me._video_popup_vimeo__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._video_popup_vimeo__vid.setAttribute('src', ggVideoUrl);
			me._video_popup_vimeo__vid.setAttribute('width', '100%');
			me._video_popup_vimeo__vid.setAttribute('height', '100%');
			me._video_popup_vimeo__vid.setAttribute('allow', 'autoplay');
			me._video_popup_vimeo__vid.setAttribute('allowfullscreen', 'true');
			me._video_popup_vimeo__vid.setAttribute('style', 'border:none; ; ;');
			me._video_popup_vimeo.appendChild(me._video_popup_vimeo__vid);
			me._video_popup_vimeo.ggApiPlayerType = 'vimeo';
			me._video_popup_vimeo.ggApiPlayer = new Vimeo.Player(me._video_popup_vimeo__vid);
			if (player.getPlayerMuted()) me._video_popup_vimeo.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'video_popup_vimeo' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._video_popup_vimeo.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._video_popup_vimeo.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._video_popup_vimeo.ggApiPlayer.getVolume() > 0.0) skin._video_popup_vimeo.ggApiPlayer.setVolume(0); else skin._video_popup_vimeo.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'video_popup_vimeo' || args.id == '_main') {
					if (args.type == 'set') skin._video_popup_vimeo.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._video_popup_vimeo.ggApiPlayer.getVolume().then(function(volume) { skin._video_popup_vimeo.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._video_popup_vimeo.ggVideoSource = media;
		}
		el.ggId="video_popup_vimeo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_vimeo.style.transition='';
				if (me._video_popup_vimeo.ggCurrentLogicStateVisible == 0) {
					me._video_popup_vimeo.style.visibility=(Number(me._video_popup_vimeo.style.opacity)>0||!me._video_popup_vimeo.style.opacity)?'inherit':'hidden';
					if (me._video_popup_vimeo.ggVideoNotLoaded) {
						me._video_popup_vimeo.ggInitMedia(me._video_popup_vimeo.ggVideoSource);
					}
					me._video_popup_vimeo.ggVisible=true;
				}
				else {
					me._video_popup_vimeo.style.visibility="hidden";
					me._video_popup_vimeo.ggInitMedia('');
					me._video_popup_vimeo.ggVisible=false;
				}
			}
		}
		me._video_popup_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_vimeo);
		el=me._video_popup_youtube=document.createElement('div');
		me._video_popup_youtube.seekbars = [];
			me._video_popup_youtube.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true; }
		me._video_popup_youtube.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_popup_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_popup_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_popup_youtube.hasChildNodes()) {
				me._video_popup_youtube.removeChild(me._video_popup_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_popup_youtube.ggVideoNotLoaded == false && me._video_popup_youtube.ggDeactivate && player.isPlaying('video_popup_youtube')) { me._video_popup_youtube.ggDeactivate(); }
				me._video_popup_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._video_popup_youtube.ggVideoNotLoaded = false;
			me._video_popup_youtube__vid=document.createElement('iframe');
			me._video_popup_youtube__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=0&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_popup_youtube__vid.setAttribute('src', ggVideoUrl);
			me._video_popup_youtube__vid.setAttribute('width', '100%');
			me._video_popup_youtube__vid.setAttribute('height', '100%');
			me._video_popup_youtube__vid.setAttribute('allow', 'autoplay');
			me._video_popup_youtube__vid.setAttribute('allowfullscreen', 'true');
			me._video_popup_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._video_popup_youtube.appendChild(me._video_popup_youtube__vid);
			me._video_popup_youtube__vid.id = 'youtube-video';
			me._video_popup_youtube.ggYoutubeApiReady = function() {
				me._video_popup_youtube.ggApiPlayerType = 'youtube';
				me._video_popup_youtube.ggApiPlayerReady = false;
				me._video_popup_youtube.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._video_popup_youtube.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._video_popup_youtube.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._video_popup_youtube.ggMediaEnded) {
								me._video_popup_youtube.ggMediaEnded();
							}
							if (event.data == 1 && me._video_popup_youtube.ggActivate) {
								me._video_popup_youtube.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._video_popup_youtube.ggDeactivate) {
								me._video_popup_youtube.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'video_popup_youtube' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._video_popup_youtube.ggApiPlayer.unMute();
						if (args.state == 1) skin._video_popup_youtube.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._video_popup_youtube.ggApiPlayer.isMuted()) skin._video_popup_youtube.ggApiPlayer.unMute(); else skin._video_popup_youtube.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'video_popup_youtube' || args.id == '_main') {
						if (args.type == 'set') skin._video_popup_youtube.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._video_popup_youtube.ggApiPlayer.setVolume(skin._video_popup_youtube.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._video_popup_youtube.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_popup_youtube.ggYoutubeApiReady();}
		}
		el.ggId="video_popup_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_youtube.style.transition='';
				if (me._video_popup_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_youtube.style.visibility=(Number(me._video_popup_youtube.style.opacity)>0||!me._video_popup_youtube.style.opacity)?'inherit':'hidden';
					if (me._video_popup_youtube.ggVideoNotLoaded) {
						me._video_popup_youtube.ggInitMedia(me._video_popup_youtube.ggVideoSource);
					}
					me._video_popup_youtube.ggVisible=true;
				}
				else {
					me._video_popup_youtube.style.visibility="hidden";
					me._video_popup_youtube.ggInitMedia('');
					me._video_popup_youtube.ggVisible=false;
				}
			}
		}
		me._video_popup_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_youtube);
		el=me._video_popup_url_controller=document.createElement('div');
		el.ggId="video_popup_url_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_url_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_url_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_url_controller.style.transition='';
				if (me._video_popup_url_controller.ggCurrentLogicStateVisible == 0) {
					me._video_popup_url_controller.style.visibility=(Number(me._video_popup_url_controller.style.opacity)>0||!me._video_popup_url_controller.style.opacity)?'inherit':'hidden';
					me._video_popup_url_controller.ggVisible=true;
				}
				else {
					me._video_popup_url_controller.style.visibility="hidden";
					me._video_popup_url_controller.ggVisible=false;
				}
			}
		}
		me._video_popup_url_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_popup_url_controller_seekbar=document.createElement('div');
		me._video_popup_url_controller_seekbar__playhead=document.createElement('div');
		me._video_popup_url_controller_seekbar.mediaEl = null;
		me._video_popup_url_controller_seekbar.fromBufferSource = false;
		me._video_popup_url_controller_seekbar.ggMediaId = 'video_popup_url';
		el.ggId="video_popup_url_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_popup_url_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_popup_url_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_popup_url_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_popup_url_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_popup_url_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_popup_url_controller_seekbar || e.target == me._video_popup_url_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_popup_url_controller_seekbar.getBoundingClientRect().x;
							if (me._video_popup_url_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_popup_url_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_popup_url_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_popup_url_controller_seekbar.getBoundingClientRect().x;
							if (me._video_popup_url_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_popup_url_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_popup_url_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_popup_url_controller_seekbar.onmousedown = me._video_popup_url_controller_seekbar.ontouchstart = me._video_popup_url_controller_seekbar.mouseTouchHandling;
		me._video_popup_url_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_popup_url_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_popup_url_controller_seekbar.style.background = 'rgba(0,0,0,0)';
				me._video_popup_url_controller_seekbar.ggConnected = false;
			}
			if (me._video_popup_url_controller_seekbar.mediaEl != null) {
				if (me._video_popup_url_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_popup_url_controller_seekbar.updatePlayback);
					if (me._video_popup_url_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_popup_url_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_popup_url_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_popup_url_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_popup_url_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('progress', me._video_popup_url_controller_seekbar.updatePlayback);
					me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_popup_url_controller_seekbar.updatePlayback);
					me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_popup_url_controller_seekbar.updatePlayback);
					if (me._video_popup_url_controller_seekbar.ggActivate) {
						me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('play', me._video_popup_url_controller_seekbar.ggActivate);
					}
					if (me._video_popup_url_controller_seekbar.ggDeactivate) {
						me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('ended', me._video_popup_url_controller_seekbar.ggDeactivate);
						me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('pause', me._video_popup_url_controller_seekbar.ggDeactivate);
					}
					if (me._video_popup_url_controller_seekbar.ggMediaEnded) {
						me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('ended', me._video_popup_url_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_popup_url_controller_seekbar.mediaEl = player.getMediaObject(me._video_popup_url_controller_seekbar.ggMediaId);
			if (me._video_popup_url_controller_seekbar.mediaEl) {
				me._video_popup_url_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_popup_url_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('video_popup_url');
				me._video_popup_url_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_popup_url_controller_seekbar.mediaEl != null) {
				me._video_popup_url_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_popup_url_controller_seekbar__playhead.style.left = '-9px';
				if (me._video_popup_url_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_popup_url_controller_seekbar.updatePlayback);
					if (me._video_popup_url_controller_seekbar.ggActivate) {
						me._video_popup_url_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_popup_url_controller_seekbar.mediaEl.id) me._video_popup_url_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_popup_url_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_popup_url_controller_seekbar.ggDeactivate) {
						me._video_popup_url_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_popup_url_controller_seekbar.mediaEl.id) me._video_popup_url_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_popup_url_controller_seekbar.ggMediaEnded) {
						me._video_popup_url_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_popup_url_controller_seekbar.mediaEl.id) me._video_popup_url_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_popup_url_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_popup_url_controller_seekbar.mediaEl.addEventListener('progress', me._video_popup_url_controller_seekbar.updatePlayback);
					me._video_popup_url_controller_seekbar.mediaEl.addEventListener('canplay', me._video_popup_url_controller_seekbar.updatePlayback);
					me._video_popup_url_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_popup_url_controller_seekbar.updatePlayback);
					if (me._video_popup_url_controller_seekbar.ggActivate) {
						me._video_popup_url_controller_seekbar.mediaEl.addEventListener('play', me._video_popup_url_controller_seekbar.ggActivate);
					}
					if (me._video_popup_url_controller_seekbar.ggDeactivate) {
						me._video_popup_url_controller_seekbar.mediaEl.addEventListener('ended', me._video_popup_url_controller_seekbar.ggDeactivate);
						me._video_popup_url_controller_seekbar.mediaEl.addEventListener('pause', me._video_popup_url_controller_seekbar.ggDeactivate);
					}
					if (me._video_popup_url_controller_seekbar.ggMediaEnded) {
						me._video_popup_url_controller_seekbar.mediaEl.addEventListener('ended', me._video_popup_url_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_popup_url_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_popup_url_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_popup_url_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_popup_url_controller_seekbar.ggConnected) return;
			if (me._video_popup_url_controller_seekbar.mediaEl != null) {
				if (me._video_popup_url_controller_seekbar.mediaEl.readyState || (me._video_popup_url_controller_seekbar.fromBufferSource && args && args['id'] == me._video_popup_url_controller_seekbar.mediaEl.id)) {
					if (me._video_popup_url_controller_seekbar.fromBufferSource) {
						var percent = me._video_popup_url_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_popup_url_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_popup_url_controller_seekbar.mediaEl.currentTime / me._video_popup_url_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_popup_url_controller_seekbar.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_popup_url_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_popup_url_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_popup_url_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_popup_url_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_popup_url_controller_seekbar.mediaEl.buffered.start(i) / me._video_popup_url_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_popup_url_controller_seekbar.mediaEl.buffered.end(i) / me._video_popup_url_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_popup_url_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_popup_url_controller_seekbar.appendChild(me._video_popup_url_controller_seekbar__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		me._video_popup_url_controller_seekbar.setAttribute('style', hs);
		me._video_popup_url_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_popup_url_controller_seekbar.ggIsActive=function() {
			if (me._video_popup_url_controller_seekbar.mediaEl != null) {
				return (me._video_popup_url_controller_seekbar.mediaEl.paused == false && me._video_popup_url_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url_controller_seekbar.ggActivate=function () {
			me._video_popup_url_controller_button_pause.style.transition='none';
			me._video_popup_url_controller_button_pause.style.visibility=(Number(me._video_popup_url_controller_button_pause.style.opacity)>0||!me._video_popup_url_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_popup_url_controller_button_pause.ggVisible=true;
			me._video_popup_url_controller_button_play.style.transition='none';
			me._video_popup_url_controller_button_play.style.visibility='hidden';
			me._video_popup_url_controller_button_play.ggVisible=false;
		}
		me._video_popup_url_controller_seekbar.ggDeactivate=function () {
			me._video_popup_url_controller_button_play.style.transition='none';
			me._video_popup_url_controller_button_play.style.visibility=(Number(me._video_popup_url_controller_button_play.style.opacity)>0||!me._video_popup_url_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_popup_url_controller_button_play.ggVisible=true;
			me._video_popup_url_controller_button_pause.style.transition='none';
			me._video_popup_url_controller_button_pause.style.visibility='hidden';
			me._video_popup_url_controller_button_pause.ggVisible=false;
		}
		me._video_popup_url_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_popup_url_controller_seekbar.updatePlayback();
		}
		me._video_popup_url_controller.appendChild(me._video_popup_url_controller_seekbar);
		el=me._video_popup_url_controller_button_pause=document.createElement('div');
		els=me._video_popup_url_controller_button_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_popup_url_controller_button_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_url_controller_button_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_popup_url_controller_button_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_popup_url_controller_button_pause";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url_controller_button_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url_controller_button_pause.onclick=function (e) {
			if (me._video_popup_url.ggApiPlayer) {
				if (me._video_popup_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_popup_url.ggApiPlayer.pauseVideo();
					};
					if (me._video_popup_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_popup_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_popup_url.ggApiPlayerType == 'vimeo') {
					me._video_popup_url.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("video_popup_url");
			}
			me._video_popup_url_controller_button_pause.style.transition='none';
			me._video_popup_url_controller_button_pause.style.visibility='hidden';
			me._video_popup_url_controller_button_pause.ggVisible=false;
			me._video_popup_url_controller_button_play.style.transition='none';
			me._video_popup_url_controller_button_play.style.visibility=(Number(me._video_popup_url_controller_button_play.style.opacity)>0||!me._video_popup_url_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_popup_url_controller_button_play.ggVisible=true;
		}
		me._video_popup_url_controller_button_pause.onmouseenter=function (e) {
			me._video_popup_url_controller_button_pause__img.style.visibility='hidden';
			me._video_popup_url_controller_button_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['video_popup_url_controller_button_pause']=true;
		}
		me._video_popup_url_controller_button_pause.onmouseleave=function (e) {
			me._video_popup_url_controller_button_pause__img.style.visibility='inherit';
			me._video_popup_url_controller_button_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['video_popup_url_controller_button_pause']=false;
		}
		me._video_popup_url_controller_button_pause.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_url_controller.appendChild(me._video_popup_url_controller_button_pause);
		el=me._video_popup_url_controller_button_play=document.createElement('div');
		els=me._video_popup_url_controller_button_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_popup_url_controller_button_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_url_controller_button_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_popup_url_controller_button_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_popup_url_controller_button_play";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url_controller_button_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url_controller_button_play.onclick=function (e) {
			if (me._video_popup_url.ggApiPlayer) {
				if (me._video_popup_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_popup_url.ggApiPlayer.playVideo();
					};
					if (me._video_popup_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_popup_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_popup_url.ggApiPlayerType == 'vimeo') {
					me._video_popup_url.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_popup_url","1");
			}
			me._video_popup_url_controller_button_play.style.transition='none';
			me._video_popup_url_controller_button_play.style.visibility='hidden';
			me._video_popup_url_controller_button_play.ggVisible=false;
			me._video_popup_url_controller_button_pause.style.transition='none';
			me._video_popup_url_controller_button_pause.style.visibility=(Number(me._video_popup_url_controller_button_pause.style.opacity)>0||!me._video_popup_url_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_popup_url_controller_button_pause.ggVisible=true;
		}
		me._video_popup_url_controller_button_play.onmouseenter=function (e) {
			me._video_popup_url_controller_button_play__img.style.visibility='hidden';
			me._video_popup_url_controller_button_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_popup_url_controller_button_play']=true;
		}
		me._video_popup_url_controller_button_play.onmouseleave=function (e) {
			me._video_popup_url_controller_button_play__img.style.visibility='inherit';
			me._video_popup_url_controller_button_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_popup_url_controller_button_play']=false;
		}
		me._video_popup_url_controller_button_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_url_controller.appendChild(me._video_popup_url_controller_button_play);
		me._video_popup.appendChild(me._video_popup_url_controller);
		el=me._video_popup_url=document.createElement('div');
		me._video_popup_url.seekbars = [];
		me._video_popup_url.seekbars.push('video_popup_url_controller_seekbar');
		me._video_popup_url.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_popup_url.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_popup_url.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_popup_url.hasChildNodes()) {
				me._video_popup_url.removeChild(me._video_popup_url.lastChild);
			}
			if (me._video_popup_url__vid) {
				me._video_popup_url__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_popup_url.ggVideoNotLoaded == false && me._video_popup_url.ggDeactivate && player.isPlaying('video_popup_url')) { me._video_popup_url.ggDeactivate(); }
				me._video_popup_url.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_popup_url');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_popup_url.ggVideoNotLoaded = false;
			me._video_popup_url__vid=document.createElement('video');
			me._video_popup_url__vid.className='ggskin ggskin_video';
			me._video_popup_url__vid.setAttribute('width', '100%');
			me._video_popup_url__vid.setAttribute('height', '100%');
			me._video_popup_url__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_popup_url__vid.setAttribute('controlsList', 'nodownload');
			me._video_popup_url__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_popup_url__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_popup_url__vid.setAttribute('autoplay', '');
			me._video_popup_url__source=document.createElement('source');
			me._video_popup_url__source.setAttribute('src', media);
			me._video_popup_url__vid.setAttribute('playsinline', 'playsinline');
			me._video_popup_url__vid.setAttribute('style', ';');
			me._video_popup_url__vid.style.outline = 'none';
			me._video_popup_url__vid.appendChild(me._video_popup_url__source);
			me._video_popup_url.appendChild(me._video_popup_url__vid);
			var videoEl = player.registerVideoElement('video_popup_url', me._video_popup_url__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_popup_url', 0.0);
			notifySeekbars();
			me._video_popup_url.ggVideoSource = media;
		}
		el.ggId="video_popup_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url.ggIsActive=function() {
			if (me._video_popup_url__vid != null) {
				return (me._video_popup_url__vid.paused == false && me._video_popup_url__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_url.style.transition='';
				if (me._video_popup_url.ggCurrentLogicStateVisible == 0) {
					me._video_popup_url.style.visibility=(Number(me._video_popup_url.style.opacity)>0||!me._video_popup_url.style.opacity)?'inherit':'hidden';
					if (me._video_popup_url.ggVideoNotLoaded) {
						me._video_popup_url.ggInitMedia(me._video_popup_url.ggVideoSource);
					}
					me._video_popup_url.ggVisible=true;
				}
				else {
					me._video_popup_url.style.visibility="hidden";
					me._video_popup_url.ggInitMedia('');
					me._video_popup_url.ggVisible=false;
				}
			}
		}
		me._video_popup_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_url);
		el=me._video_popup_file_controller=document.createElement('div');
		el.ggId="video_popup_file_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file_controller.style.transition='';
				if (me._video_popup_file_controller.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file_controller.style.visibility=(Number(me._video_popup_file_controller.style.opacity)>0||!me._video_popup_file_controller.style.opacity)?'inherit':'hidden';
					me._video_popup_file_controller.ggVisible=true;
				}
				else {
					me._video_popup_file_controller.style.visibility="hidden";
					me._video_popup_file_controller.ggVisible=false;
				}
			}
		}
		me._video_popup_file_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_popup_file_controller_seekbar=document.createElement('div');
		me._video_popup_file_controller_seekbar__playhead=document.createElement('div');
		me._video_popup_file_controller_seekbar.mediaEl = null;
		me._video_popup_file_controller_seekbar.fromBufferSource = false;
		me._video_popup_file_controller_seekbar.ggMediaId = 'video_popup_file';
		el.ggId="video_popup_file_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_popup_file_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_popup_file_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_popup_file_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_popup_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_popup_file_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_popup_file_controller_seekbar || e.target == me._video_popup_file_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_popup_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_popup_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_popup_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_popup_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_popup_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_popup_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_popup_file_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_popup_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_popup_file_controller_seekbar.onmousedown = me._video_popup_file_controller_seekbar.ontouchstart = me._video_popup_file_controller_seekbar.mouseTouchHandling;
		me._video_popup_file_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_popup_file_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_popup_file_controller_seekbar.style.background = 'rgba(0,0,0,0)';
				me._video_popup_file_controller_seekbar.ggConnected = false;
			}
			if (me._video_popup_file_controller_seekbar.mediaEl != null) {
				if (me._video_popup_file_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_popup_file_controller_seekbar.updatePlayback);
					if (me._video_popup_file_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_popup_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_popup_file_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_popup_file_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_popup_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('progress', me._video_popup_file_controller_seekbar.updatePlayback);
					me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_popup_file_controller_seekbar.updatePlayback);
					me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_popup_file_controller_seekbar.updatePlayback);
					if (me._video_popup_file_controller_seekbar.ggActivate) {
						me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('play', me._video_popup_file_controller_seekbar.ggActivate);
					}
					if (me._video_popup_file_controller_seekbar.ggDeactivate) {
						me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_popup_file_controller_seekbar.ggDeactivate);
						me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('pause', me._video_popup_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_popup_file_controller_seekbar.ggMediaEnded) {
						me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_popup_file_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_popup_file_controller_seekbar.mediaEl = player.getMediaObject(me._video_popup_file_controller_seekbar.ggMediaId);
			if (me._video_popup_file_controller_seekbar.mediaEl) {
				me._video_popup_file_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_popup_file_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('video_popup_file');
				me._video_popup_file_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_popup_file_controller_seekbar.mediaEl != null) {
				me._video_popup_file_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_popup_file_controller_seekbar__playhead.style.left = '-9px';
				if (me._video_popup_file_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_popup_file_controller_seekbar.updatePlayback);
					if (me._video_popup_file_controller_seekbar.ggActivate) {
						me._video_popup_file_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_popup_file_controller_seekbar.mediaEl.id) me._video_popup_file_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_popup_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_popup_file_controller_seekbar.ggDeactivate) {
						me._video_popup_file_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_popup_file_controller_seekbar.mediaEl.id) me._video_popup_file_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_popup_file_controller_seekbar.ggMediaEnded) {
						me._video_popup_file_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_popup_file_controller_seekbar.mediaEl.id) me._video_popup_file_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_popup_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_popup_file_controller_seekbar.mediaEl.addEventListener('progress', me._video_popup_file_controller_seekbar.updatePlayback);
					me._video_popup_file_controller_seekbar.mediaEl.addEventListener('canplay', me._video_popup_file_controller_seekbar.updatePlayback);
					me._video_popup_file_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_popup_file_controller_seekbar.updatePlayback);
					if (me._video_popup_file_controller_seekbar.ggActivate) {
						me._video_popup_file_controller_seekbar.mediaEl.addEventListener('play', me._video_popup_file_controller_seekbar.ggActivate);
					}
					if (me._video_popup_file_controller_seekbar.ggDeactivate) {
						me._video_popup_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_popup_file_controller_seekbar.ggDeactivate);
						me._video_popup_file_controller_seekbar.mediaEl.addEventListener('pause', me._video_popup_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_popup_file_controller_seekbar.ggMediaEnded) {
						me._video_popup_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_popup_file_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_popup_file_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_popup_file_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_popup_file_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_popup_file_controller_seekbar.ggConnected) return;
			if (me._video_popup_file_controller_seekbar.mediaEl != null) {
				if (me._video_popup_file_controller_seekbar.mediaEl.readyState || (me._video_popup_file_controller_seekbar.fromBufferSource && args && args['id'] == me._video_popup_file_controller_seekbar.mediaEl.id)) {
					if (me._video_popup_file_controller_seekbar.fromBufferSource) {
						var percent = me._video_popup_file_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_popup_file_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_popup_file_controller_seekbar.mediaEl.currentTime / me._video_popup_file_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_popup_file_controller_seekbar.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_popup_file_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_popup_file_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_popup_file_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_popup_file_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_popup_file_controller_seekbar.mediaEl.buffered.start(i) / me._video_popup_file_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_popup_file_controller_seekbar.mediaEl.buffered.end(i) / me._video_popup_file_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_popup_file_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_popup_file_controller_seekbar.appendChild(me._video_popup_file_controller_seekbar__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		me._video_popup_file_controller_seekbar.setAttribute('style', hs);
		me._video_popup_file_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_popup_file_controller_seekbar.ggIsActive=function() {
			if (me._video_popup_file_controller_seekbar.mediaEl != null) {
				return (me._video_popup_file_controller_seekbar.mediaEl.paused == false && me._video_popup_file_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file_controller_seekbar.ggActivate=function () {
			me._video_popup_file_controller_button_pause.style.transition='none';
			me._video_popup_file_controller_button_pause.style.visibility=(Number(me._video_popup_file_controller_button_pause.style.opacity)>0||!me._video_popup_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_popup_file_controller_button_pause.ggVisible=true;
			me._video_popup_file_controller_button_play.style.transition='none';
			me._video_popup_file_controller_button_play.style.visibility='hidden';
			me._video_popup_file_controller_button_play.ggVisible=false;
		}
		me._video_popup_file_controller_seekbar.ggDeactivate=function () {
			me._video_popup_file_controller_button_play.style.transition='none';
			me._video_popup_file_controller_button_play.style.visibility=(Number(me._video_popup_file_controller_button_play.style.opacity)>0||!me._video_popup_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_popup_file_controller_button_play.ggVisible=true;
			me._video_popup_file_controller_button_pause.style.transition='none';
			me._video_popup_file_controller_button_pause.style.visibility='hidden';
			me._video_popup_file_controller_button_pause.ggVisible=false;
		}
		me._video_popup_file_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_popup_file_controller_seekbar.updatePlayback();
		}
		me._video_popup_file_controller.appendChild(me._video_popup_file_controller_seekbar);
		el=me._video_popup_file_controller_button_pause=document.createElement('div');
		els=me._video_popup_file_controller_button_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_popup_file_controller_button_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_file_controller_button_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_popup_file_controller_button_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_popup_file_controller_button_pause";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file_controller_button_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file_controller_button_pause.onclick=function (e) {
			if (me._video_popup_file.ggApiPlayer) {
				if (me._video_popup_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_popup_file.ggApiPlayer.pauseVideo();
					};
					if (me._video_popup_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_popup_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_popup_file.ggApiPlayerType == 'vimeo') {
					me._video_popup_file.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("video_popup_file");
			}
			me._video_popup_file_controller_button_pause.style.transition='none';
			me._video_popup_file_controller_button_pause.style.visibility='hidden';
			me._video_popup_file_controller_button_pause.ggVisible=false;
			me._video_popup_file_controller_button_play.style.transition='none';
			me._video_popup_file_controller_button_play.style.visibility=(Number(me._video_popup_file_controller_button_play.style.opacity)>0||!me._video_popup_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_popup_file_controller_button_play.ggVisible=true;
		}
		me._video_popup_file_controller_button_pause.onmouseenter=function (e) {
			me._video_popup_file_controller_button_pause__img.style.visibility='hidden';
			me._video_popup_file_controller_button_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['video_popup_file_controller_button_pause']=true;
		}
		me._video_popup_file_controller_button_pause.onmouseleave=function (e) {
			me._video_popup_file_controller_button_pause__img.style.visibility='inherit';
			me._video_popup_file_controller_button_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['video_popup_file_controller_button_pause']=false;
		}
		me._video_popup_file_controller_button_pause.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file_controller.appendChild(me._video_popup_file_controller_button_pause);
		el=me._video_popup_file_controller_button_play=document.createElement('div');
		els=me._video_popup_file_controller_button_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_popup_file_controller_button_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_file_controller_button_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_popup_file_controller_button_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_popup_file_controller_button_play";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file_controller_button_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file_controller_button_play.onclick=function (e) {
			if (me._video_popup_file.ggApiPlayer) {
				if (me._video_popup_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_popup_file.ggApiPlayer.playVideo();
					};
					if (me._video_popup_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_popup_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_popup_file.ggApiPlayerType == 'vimeo') {
					me._video_popup_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_popup_file","1");
			}
			me._video_popup_file_controller_button_play.style.transition='none';
			me._video_popup_file_controller_button_play.style.visibility='hidden';
			me._video_popup_file_controller_button_play.ggVisible=false;
			me._video_popup_file_controller_button_pause.style.transition='none';
			me._video_popup_file_controller_button_pause.style.visibility=(Number(me._video_popup_file_controller_button_pause.style.opacity)>0||!me._video_popup_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_popup_file_controller_button_pause.ggVisible=true;
		}
		me._video_popup_file_controller_button_play.onmouseenter=function (e) {
			me._video_popup_file_controller_button_play__img.style.visibility='hidden';
			me._video_popup_file_controller_button_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_popup_file_controller_button_play']=true;
		}
		me._video_popup_file_controller_button_play.onmouseleave=function (e) {
			me._video_popup_file_controller_button_play__img.style.visibility='inherit';
			me._video_popup_file_controller_button_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_popup_file_controller_button_play']=false;
		}
		me._video_popup_file_controller_button_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file_controller.appendChild(me._video_popup_file_controller_button_play);
		me._video_popup.appendChild(me._video_popup_file_controller);
		el=me._video_popup_file=document.createElement('div');
		me._video_popup_file.seekbars = [];
		me._video_popup_file.seekbars.push('video_popup_file_controller_seekbar');
		me._video_popup_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_popup_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_popup_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_popup_file.hasChildNodes()) {
				me._video_popup_file.removeChild(me._video_popup_file.lastChild);
			}
			if (me._video_popup_file__vid) {
				me._video_popup_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_popup_file.ggVideoNotLoaded == false && me._video_popup_file.ggDeactivate && player.isPlaying('video_popup_file')) { me._video_popup_file.ggDeactivate(); }
				me._video_popup_file.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_popup_file');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_popup_file.ggVideoNotLoaded = false;
			me._video_popup_file__vid=document.createElement('video');
			me._video_popup_file__vid.className='ggskin ggskin_video';
			me._video_popup_file__vid.setAttribute('width', '100%');
			me._video_popup_file__vid.setAttribute('height', '100%');
			me._video_popup_file__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_popup_file__vid.setAttribute('controlsList', 'nodownload');
			me._video_popup_file__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_popup_file__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_popup_file__vid.setAttribute('autoplay', '');
			me._video_popup_file__source=document.createElement('source');
			me._video_popup_file__source.setAttribute('src', media);
			me._video_popup_file__vid.setAttribute('playsinline', 'playsinline');
			me._video_popup_file__vid.setAttribute('style', ';');
			me._video_popup_file__vid.style.outline = 'none';
			me._video_popup_file__vid.appendChild(me._video_popup_file__source);
			me._video_popup_file.appendChild(me._video_popup_file__vid);
			var videoEl = player.registerVideoElement('video_popup_file', me._video_popup_file__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_popup_file', 0.0);
			notifySeekbars();
			me._video_popup_file.ggVideoSource = media;
		}
		el.ggId="video_popup_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			if (me._video_popup_file__vid != null) {
				return (me._video_popup_file__vid.paused == false && me._video_popup_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file.style.transition='';
				if (me._video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file.style.visibility=(Number(me._video_popup_file.style.opacity)>0||!me._video_popup_file.style.opacity)?'inherit':'hidden';
					if (me._video_popup_file.ggVideoNotLoaded) {
						me._video_popup_file.ggInitMedia(me._video_popup_file.ggVideoSource);
					}
					me._video_popup_file.ggVisible=true;
				}
				else {
					me._video_popup_file.style.visibility="hidden";
					me._video_popup_file.ggInitMedia('');
					me._video_popup_file.ggVisible=false;
				}
			}
		}
		me._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_file);
		me.divSkin.appendChild(me._video_popup);
		el=me._url_popup=document.createElement('div');
		el.ggId="url_popup";
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
		me._url_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._url_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._url_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._url_popup.style.transition='';
				if (me._url_popup.ggCurrentLogicStateVisible == 0) {
					me._url_popup.style.visibility=(Number(me._url_popup.style.opacity)>0||!me._url_popup.style.opacity)?'inherit':'hidden';
					me._url_popup.ggVisible=true;
				}
				else {
					me._url_popup.style.visibility="hidden";
					me._url_popup.ggVisible=false;
				}
			}
		}
		me._url_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._url_popup_title=document.createElement('div');
		els=me._url_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
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
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._url_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_popup_title.ggUpdateText();
		el.appendChild(els);
		me._url_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup.appendChild(me._url_popup_title);
		el=me._url_popup_iframe=document.createElement('div');
		els=me._url_popup_iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_popup_iframe";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._url_popup_iframe.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_popup_iframe.ggUpdateText();
		el.appendChild(els);
		me._url_popup_iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup_iframe.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup.appendChild(me._url_popup_iframe);
		me.divSkin.appendChild(me._url_popup);
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
		hs+='height : 140px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
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
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
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
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNi4yNSwxMy40MkMxNi40LDEyLjk3LDE2LjUsMTIuNSwxNi41LDEyYzAtMS43Ny0xLjAyLTMuMjktMi41LTQuMDN2My4yTDE2LjI1LDEzLjQyeiIvPgogICA8cGF0aCBkPSJNMTksMTJjMCwxLjIxLTAuMzEsMi4zNC'+
			'0wLjg1LDMuMzJsMS40NiwxLjQ2QzIwLjQ4LDE1LjM5LDIxLDEzLjc2LDIxLDEyYzAtMy44My0yLjQtNy4xMS01Ljc4LTguNCBDMTQuNjMsMy4zNywxNCwzLjgzLDE0LDQuNDZ2MC4xOWMwLDAuMzgsMC4yNSwwLjcxLDAuNjEsMC44NUMxNy4xOCw2LjU0LDE5LDkuMDYsMTksMTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0yLjEsMy41MUwyLjEsMy41MWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFMNi4xNyw5SDRjLTAuNTUsMC0xLDAuNDUtMSwxdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjkgYzAuNjMsMC42MywxLjcxLDAuMTgsMS43MS0wLjcxdi0yLjc2bDMuMzIsMy4zMmMtMC4yMywwLjEz'+
			'LTAuNDcsMC4yNC0wLjcxLDAuMzVjLTAuMzcsMC4xNi0wLjYsMC41Mi0wLjYsMC45MXYwIGMwLDAuNywwLjcsMS4yLDEuMzUsMC45NGMwLjUtMC4yLDAuOTktMC40NSwxLjQ0LTAuNzNsMi4yOCwyLjI4YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MSBMMy41MSwzLjUxQzMuMTIsMy4xMiwyLjQ5LDMuMTIsMi4xLDMuNTF6Ii8+CiAgIDxwYXRoIGQ9Ik0xMiw5LjE3VjYuNDFjMC0wLjg5LTEuMDgtMS4zNC0xLjcxLTAuNzFMOS40MSw2LjU5TDEyLDkuMTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyLjIsMTAuMWMwLjEtMC4zLDAuMi0wLjcsMC4yLTEuMWMwLTEuMy0wLjgtMi41LTEuOS0zdjIuNEwxMi4yLDEwLjF6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNC4yLDljMCwwLjktMC4yLDEuOC0wLjYsMi41bDEuMSwxLjFjMC43LTEsMS0yLjMsMS0zLjZjMC0yLjktMS44LTUuMy00'+
			'LjMtNi4zYy0wLjQtMC4yLTAuOSwwLjItMC45LDAuNiAgICB2MC4xYzAsMC4zLDAuMiwwLjUsMC41LDAuNkMxMi45LDQuOSwxNC4yLDYuOCwxNC4yLDl6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xLjYsMi42TDEuNiwyLjZjLTAuMywwLjMtMC4zLDAuOCwwLDEuMWwzLjEsMy4xSDNjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYzYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjIgICAgbDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMnYtMi4xbDIuNSwyLjVjLTAuMiwwLjEtMC40LDAuMi0wLjUsMC4zYy0wLjMsMC4xLTAuNCwwLjQtMC40LDAuN2wwLDBjMCwwLjUsMC41LDAuOSwxLDAuNy'+
			'AgICBjMC40LTAuMSwwLjctMC4zLDEuMS0wLjVsMS43LDEuN2MwLjMsMC4zLDAuOCwwLjMsMS4xLDBsMCwwYzAuMy0wLjMsMC4zLTAuOCwwLTEuMUwyLjYsMi42QzIuMywyLjMsMS45LDIuMywxLjYsMi42eiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw2LjlWNC44YzAtMC43LTAuOC0xLTEuMy0wLjVMNy4xLDQuOUw5LDYuOXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sounds_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_off";
		el.ggDx=65;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 65px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
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
		me._sounds_off.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('toggle_audio', false);
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_off.onmouseenter=function (e) {
			me._sounds_off__img.style.visibility='hidden';
			me._sounds_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_off']=true;
		}
		me._sounds_off.onmouseleave=function (e) {
			me._sounds_off__img.style.visibility='inherit';
			me._sounds_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_off']=false;
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_off);
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLDEwdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjljMC42MywwLjYzLDEuNzEsMC4xOCwxLjcxLTAuNzFWNi40MWMwLTAuODktMS4wOC0xLjM0LTEuNzEtMC43MUw3LDlINCBDMy40NSw5LDMsOS40NSwzLD'+
			'EweiBNMTYuNSwxMmMwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjguMDVDMTUuNDgsMTUuMjksMTYuNSwxMy43NywxNi41LDEyeiBNMTQsNC40NXYwLjIgYzAsMC4zOCwwLjI1LDAuNzEsMC42LDAuODVDMTcuMTgsNi41MywxOSw5LjA2LDE5LDEycy0xLjgyLDUuNDctNC40LDYuNWMtMC4zNiwwLjE0LTAuNiwwLjQ3LTAuNiwwLjg1djAuMiBjMCwwLjYzLDAuNjMsMS4wNywxLjIxLDAuODVDMTguNiwxOS4xMSwyMSwxNS44NCwyMSwxMnMtMi40LTcuMTEtNS43OS04LjRDMTQuNjMsMy4zNywxNCwzLjgyLDE0LDQuNDV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIuMiw3LjV2M2MwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4ybDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMlY0LjhjMC0wLjctMC44LTEtMS4zLTAuNUw1LjIsNi44SDMgICAgQzIuNiw2LjgsMi4yLDcuMSwyLjIsNy41eiBNMTIuNCw5YzAtMS4zLTAuOC0yLjUtMS45LTN2NkMxMS42LDEx'+
			'LjUsMTIuNCwxMC4zLDEyLjQsOXogTTEwLjUsMy4zdjAuMWMwLDAuMywwLjIsMC41LDAuNSwwLjYgICAgYzEuOSwwLjgsMy4zLDIuNywzLjMsNC45cy0xLjQsNC4xLTMuMyw0LjljLTAuMywwLjEtMC41LDAuNC0wLjUsMC42djAuMWMwLDAuNSwwLjUsMC44LDAuOSwwLjZjMi41LTEsNC4zLTMuNCw0LjMtNi4zICAgIFMxNCwzLjcsMTEuNCwyLjdDMTEsMi41LDEwLjUsMi45LDEwLjUsMy4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._sounds_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_on";
		el.ggDx=-65;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) - 65px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
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
		me._sounds_on.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on.onmouseenter=function (e) {
			me._sounds_on__img.style.visibility='hidden';
			me._sounds_on__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_on']=true;
		}
		me._sounds_on.onmouseleave=function (e) {
			me._sounds_on__img.style.visibility='inherit';
			me._sounds_on__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_on']=false;
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone.style.transition='opacity 300ms ease 0ms';
				if (me._screentint_phone.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone.style.visibility=me._screentint_phone.ggVisible?'inherit':'hidden';
					me._screentint_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone.style.opacity == 0.0) { me._screentint_phone.style.visibility="hidden"; } }, 305);
					me._screentint_phone.style.opacity=0;
				}
			}
		}
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.onmouseenter=function (e) {
			me._btn_close_popup_phone__img.style.visibility='hidden';
			me._btn_close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone']=true;
		}
		me._btn_close_popup_phone.onmouseleave=function (e) {
			me._btn_close_popup_phone__img.style.visibility='inherit';
			me._btn_close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone']=false;
		}
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		me._safe_area_phone.appendChild(me._close_popup_phone);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 80px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 80px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+='line-height: 1.5;';
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._safe_area_phone.appendChild(me._info_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 40px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 40px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = 'rgba(0,0,0,0)';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-9px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggActivate=function () {
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility=(Number(me._video_controller_button_pause_phone.style.opacity)>0||!me._video_controller_button_pause_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_pause_phone.ggVisible=true;
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility='hidden';
			me._video_controller_button_play_phone.ggVisible=false;
		}
		me._video_controller_seekbar_phone.ggDeactivate=function () {
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility=(Number(me._video_controller_button_play_phone.style.opacity)>0||!me._video_controller_button_play_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_play_phone.ggVisible=true;
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility='hidden';
			me._video_controller_button_pause_phone.ggVisible=false;
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		el=me._video_controller_button_pause_phone=document.createElement('div');
		els=me._video_controller_button_pause_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_controller_button_pause_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_controller_button_pause_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_controller_button_pause_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_controller_button_pause_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_button_pause_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_button_pause_phone.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_phone_video_file') == true))
				)
			) {
				if (me._video_file_popup_phone.ggApiPlayer) {
					if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						};
						if (me._video_file_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_file_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_file_popup_phone.ggApiPlayer.pause();
					}
				} else {
					player.pauseSound("video_file_popup_phone");
				}
			}
			if (
				(
					((player.getVariableValue('vis_phone_video_url') == true))
				)
			) {
				if (me._video_url_popup_phone.ggApiPlayer) {
					if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						};
						if (me._video_url_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_url_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_url_popup_phone.ggApiPlayer.pause();
					}
				} else {
					player.pauseSound("video_url_popup_phone");
				}
			}
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility='hidden';
			me._video_controller_button_pause_phone.ggVisible=false;
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility=(Number(me._video_controller_button_play_phone.style.opacity)>0||!me._video_controller_button_play_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_play_phone.ggVisible=true;
		}
		me._video_controller_button_pause_phone.onmouseenter=function (e) {
			me._video_controller_button_pause_phone__img.style.visibility='hidden';
			me._video_controller_button_pause_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['video_controller_button_pause_phone']=true;
		}
		me._video_controller_button_pause_phone.onmouseleave=function (e) {
			me._video_controller_button_pause_phone__img.style.visibility='inherit';
			me._video_controller_button_pause_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['video_controller_button_pause_phone']=false;
		}
		me._video_controller_button_pause_phone.ggUpdatePosition=function (useTransition) {
		}
		me._video_controller_phone.appendChild(me._video_controller_button_pause_phone);
		el=me._video_controller_button_play_phone=document.createElement('div');
		els=me._video_controller_button_play_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_controller_button_play_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_controller_button_play_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_controller_button_play_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_controller_button_play_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_button_play_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_button_play_phone.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_phone_video_file') == true))
				)
			) {
				if (me._video_file_popup_phone.ggApiPlayer) {
					if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						};
						if (me._video_file_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_file_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_file_popup_phone.ggApiPlayer.play();
					}
				} else {
					player.playSound("video_file_popup_phone","1");
				}
			}
			if (
				(
					((player.getVariableValue('vis_phone_video_url') == true))
				)
			) {
				if (me._video_url_popup_phone.ggApiPlayer) {
					if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						};
						if (me._video_url_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_url_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_url_popup_phone.ggApiPlayer.play();
					}
				} else {
					player.playSound("video_url_popup_phone","1");
				}
			}
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility='hidden';
			me._video_controller_button_play_phone.ggVisible=false;
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility=(Number(me._video_controller_button_pause_phone.style.opacity)>0||!me._video_controller_button_pause_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_pause_phone.ggVisible=true;
		}
		me._video_controller_button_play_phone.onmouseenter=function (e) {
			me._video_controller_button_play_phone__img.style.visibility='hidden';
			me._video_controller_button_play_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['video_controller_button_play_phone']=true;
		}
		me._video_controller_button_play_phone.onmouseleave=function (e) {
			me._video_controller_button_play_phone__img.style.visibility='inherit';
			me._video_controller_button_play_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['video_controller_button_play_phone']=false;
		}
		me._video_controller_button_play_phone.ggUpdatePosition=function (useTransition) {
		}
		me._video_controller_phone.appendChild(me._video_controller_button_play_phone);
		me._safe_area_phone.appendChild(me._video_controller_phone);
		me._screentint_phone.appendChild(me._safe_area_phone);
		me.divSkin.appendChild(me._screentint_phone);
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
		hs+='bottom : 32px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
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
					me._model_load_spinner.style.width='80px';
					me._model_load_spinner.style.height='80px';
					skin.updateSize(me._model_load_spinner);
				}
				else {
					me._model_load_spinner.style.width='120px';
					me._model_load_spinner.style.height='120px';
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
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px 4px 4px 4px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		el.userData=el;
		hs ='';
		hs+='height : 86px;';
		hs+='left : 257px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 35px;';
		hs+='left : 399px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 172px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>Tours 360\xb0<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_1);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 24px;';
		hs+='left : 419px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 138px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFwZXJ0dXJlIiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPgogPGxpbmUgeDE9IjE0LjMxIiB4Mj0iMjAuMDUiIHkxPSI4IiB5Mj0iMTcuOTQiLz4KIDxsaW5lIHgxPSI5LjY5IiB4Mj0iMjEuMTciIHkxPSI4IiB5Mj'+
			'0iOCIvPgogPGxpbmUgeDE9IjcuMzgiIHgyPSIxMy4xMiIgeTE9IjEyIiB5Mj0iMi4wNiIvPgogPGxpbmUgeDE9IjkuNjkiIHgyPSIzLjk1IiB5MT0iMTYiIHkyPSI2LjA2Ii8+CiA8bGluZSB4MT0iMTQuMzEiIHgyPSIyLjgzIiB5MT0iMTYiIHkyPSIxNiIvPgogPGxpbmUgeDE9IjE2LjYyIiB4Mj0iMTAuODgiIHkxPSIxMiIgeTI9IjIxLjk0Ii8+Cjwvc3ZnPgo=';
		me._svg_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._svg_5);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWZhY2Vib29rIiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNMTggMmgtM2E1IDUgMCAwIDAtNSA1djNIN3Y0aDN2OGg0di04aDNsMS00aC00VjdhMSAxIDAgMCAxIDEtMWgzeiIvPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 24px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._svg_2);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXBob25lLWNhbGwiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0xNS4wNSA1QTUgNSAwIDAgMSAxOSA4Ljk1TTE1LjA1IDFBOSA5IDAgMCAxIDIzIDguOTRtLTEgNy45OHYzYTIgMiAwIDAgMS0yLjE4IDIgMTkuNzkgMTkuNzkgMCAwIDEtOC42My0zLjA3ID'+
			'E5LjUgMTkuNSAwIDAgMS02LTYgMTkuNzkgMTkuNzkgMCAwIDEtMy4wNy04LjY3QTIgMiAwIDAgMSA0LjExIDJoM2EyIDIgMCAwIDEgMiAxLjcyIDEyLjg0IDEyLjg0IDAgMCAwIC43IDIuODEgMiAyIDAgMCAxLS40NSAyLjExTDguMDkgOS45MWExNiAxNiAwIDAgMCA2IDZsMS4yNy0xLjI3YTIgMiAwIDAgMSAyLjExLS40NSAxMi44NCAxMi44NCAwIDAgMCAyLjgxLjdBMiAyIDAgMCAxIDIyIDE2LjkyeiIvPgo8L3N2Zz4K';
		me._svg_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 24px;';
		hs+='left : 29px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._svg_3);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWluc3RhZ3JhbSIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHJlY3QgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiB3aWR0aD0iMjAiIHg9IjIiIHk9IjIiLz4KIDxwYXRoIGQ9Ik0xNiAxMS4zN0E0IDQgMCAxIDEgMTIuNjMgOCA0IDQgMCAwIDEgMTYgMTEuMzd6Ii8+Ci'+
			'A8bGluZSB4MT0iMTcuNSIgeDI9IjE3LjUxIiB5MT0iNi41IiB5Mj0iNi41Ii8+Cjwvc3ZnPgo=';
		me._svg_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 24px;';
		hs+='left : 61px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._svg_4);
		me.divSkin.appendChild(me._container_1);
		me._menu.logicBlock_size();
		me._menu.logicBlock_visible();
		me._menu.logicBlock_alpha();
		me._gyro_toggle.logicBlock_visible();
		me.elementMouseOver['gyro_on']=false;
		me._gyro_on.logicBlock_visible();
		me.elementMouseOver['gyro_off']=false;
		me._gyro_off.logicBlock_visible();
		me.elementMouseOver['btn_vr']=false;
		me._btn_vr.logicBlock_visible();
		me.elementMouseOver['btn_languages']=false;
		me._btn_languages.logicBlock_visible();
		me._hotspots_on_disabled.logicBlock_visible();
		me.elementMouseOver['hotspots_on_enabled']=false;
		me._hotspots_on_enabled.logicBlock_visible();
		me._hotspots_off_disabled.logicBlock_visible();
		me.elementMouseOver['hotspots_off_enabled']=false;
		me._hotspots_off_enabled.logicBlock_visible();
		me._audio_toggle.logicBlock_visible();
		me.elementMouseOver['audio_on']=false;
		me._audio_on.logicBlock_visible();
		me.elementMouseOver['audio_off']=false;
		me._audio_off.logicBlock_visible();
		me._fullscreen_toggle.logicBlock_visible();
		me.elementMouseOver['fullscreen_exit']=false;
		me._fullscreen_exit.logicBlock_visible();
		me.elementMouseOver['fullscreen_enter']=false;
		me._fullscreen_enter.logicBlock_visible();
		me._languages_scroller.logicBlock_position();
		me._languages_scroller.logicBlock_size();
		me._languages_scroller.logicBlock_visible();
		me._nodes_menu_phone_landscape.logicBlock_visible();
		me._nodes_menu.logicBlock_size();
		me._nodes_menu.logicBlock_visible();
		me._categories_menu_phone_landscape.logicBlock_visible();
		me._categories_menu.logicBlock_size();
		me._categories_menu.logicBlock_visible();
		me._menu_toggle_bg.logicBlock_visible();
		me._menu_toggle_bg.logicBlock_alpha();
		me._menu_toggle.logicBlock_position();
		me._menu_toggle.logicBlock_visible();
		me._menu_toggle.logicBlock_alpha();
		me.elementMouseOver['back_to_close_anim']=false;
		me._menu_toggle_back.logicBlock_visible();
		me.elementMouseOver['close_to_menu_anim']=false;
		me._menu_toggle_off_active.logicBlock_visible();
		me.elementMouseOver['menu_to_close_anim']=false;
		me._menu_toggle_on_active.logicBlock_visible();
		me._menu_toggle_timer.logicBlock_visible();
		me._node_title.logicBlock_position();
		me._node_title.logicBlock_size();
		me._node_title.logicBlock_visible();
		me._node_title.logicBlock_alpha();
		me._project_title.logicBlock_size();
		me._project_title.logicBlock_visible();
		me._project_title.logicBlock_alpha();
		me._screen_tint.logicBlock_visible();
		me.elementMouseOver['screen_tint_close']=false;
		me._video_popup.logicBlock_alpha();
		me._video_popup_vimeo.ggVideoSource = '';
		me._video_popup_vimeo.ggVideoNotLoaded = true;
		me._video_popup_vimeo.logicBlock_visible();
		me._video_popup_youtube.ggVideoSource = '';
		me._video_popup_youtube.ggVideoNotLoaded = true;
		me._video_popup_youtube.logicBlock_visible();
		me._video_popup_url_controller.logicBlock_visible();
		me.elementMouseOver['video_popup_url_controller_button_pause']=false;
		me.elementMouseOver['video_popup_url_controller_button_play']=false;
		me._video_popup_url.ggVideoSource = '';
		me._video_popup_url.ggVideoNotLoaded = true;
		me._video_popup_url.logicBlock_visible();
		me._video_popup_file_controller.logicBlock_visible();
		me.elementMouseOver['video_popup_file_controller_button_pause']=false;
		me.elementMouseOver['video_popup_file_controller_button_play']=false;
		me._video_popup_file.ggVideoSource = 'media/';
		me._video_popup_file.ggVideoNotLoaded = true;
		me._video_popup_file.logicBlock_visible();
		me._url_popup.logicBlock_visible();
		me._sounds_splashscreen.logicBlock_visible();
		me.elementMouseOver['sounds_off']=false;
		me.elementMouseOver['sounds_on']=false;
		me._screentint_phone.logicBlock_alpha();
		me.elementMouseOver['btn_close_popup_phone']=false;
		me._info_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me.elementMouseOver['video_controller_button_pause_phone']=false;
		me.elementMouseOver['video_controller_button_play_phone']=false;
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
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url__3d'][i].ggEvent_activehotspotchanged();
				}
			}
			me._node_title.logicBlock_position();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner_pl.ggInstances.length; i++) {
				me._node_cloner_pl.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url__3d'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._menu.logicBlock_size();
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._gyro_toggle.logicBlock_visible();
			me._gyro_on.logicBlock_visible();
			me._gyro_off.logicBlock_visible();
			me._hotspots_on_disabled.logicBlock_visible();
			me._hotspots_on_enabled.logicBlock_visible();
			me._hotspots_off_disabled.logicBlock_visible();
			me._hotspots_off_enabled.logicBlock_visible();
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
			me._fullscreen_toggle.logicBlock_visible();
			me._languages_scroller.logicBlock_position();
			me._languages_scroller.logicBlock_size();
			me._languages_scroller.logicBlock_visible();
			me._languages_cloner.ggUpdateConditionNodeChange();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._node_cloner_pl.ggUpdateConditionNodeChange();
			me._nodes_menu.logicBlock_size();
			me._nodes_menu.logicBlock_visible();
			me._node_cloner.ggUpdateConditionNodeChange();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_cloner_pl.ggUpdateConditionNodeChange();
			me._categories_menu.logicBlock_size();
			me._categories_menu.logicBlock_visible();
			me._categories_cloner.ggUpdateConditionNodeChange();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_bg.logicBlock_alpha();
			if (me._menu_toggle.ggLastIsActive!=me._menu_toggle.ggIsActive()) {
				me._menu_toggle.ggLastIsActive=me._menu_toggle.ggIsActive();
				if (me._menu_toggle.ggIsActive()) {
					if (me._menu_toggle.ggActivate) me._menu_toggle.ggActivate();
				} else {
					if (me._menu_toggle.ggDeactivate) me._menu_toggle.ggDeactivate();
				}
			}
			me._menu_toggle.logicBlock_position();
			me._menu_toggle.logicBlock_visible();
			me._menu_toggle.logicBlock_alpha();
			me._menu_toggle_back.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
			me._menu_toggle_timer.logicBlock_visible();
			me._node_title.logicBlock_position();
			me._node_title.logicBlock_size();
			me._node_title.logicBlock_visible();
			me._node_title.logicBlock_alpha();
			me._project_title.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._project_title.logicBlock_alpha();
			me._screen_tint.logicBlock_visible();
			me._video_popup.logicBlock_alpha();
			me._video_popup_vimeo.logicBlock_visible();
			me._video_popup_youtube.logicBlock_visible();
			me._video_popup_url_controller.logicBlock_visible();
			me._video_popup_url_controller_seekbar.ggConnectToMediaEl();
			me._video_popup_url.logicBlock_visible();
			me._video_popup_file_controller.logicBlock_visible();
			me._video_popup_file_controller_seekbar.ggConnectToMediaEl();
			me._video_popup_file.logicBlock_visible();
			me._url_popup.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._model_load_spinner.logicBlock_size();
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url__3d'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._variable_resp_phone_landscape.logicBlock();
			me._menu.logicBlock_size();
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._gyro_toggle.logicBlock_visible();
			me._btn_languages.logicBlock_visible();
			me._hotspots_on_disabled.logicBlock_visible();
			me._hotspots_on_enabled.logicBlock_visible();
			me._hotspots_off_disabled.logicBlock_visible();
			me._hotspots_off_enabled.logicBlock_visible();
			me._audio_toggle.logicBlock_visible();
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
			me._fullscreen_toggle.logicBlock_visible();
			me._languages_scroller.ggUpdatePosition();
			me._languages_scroller.logicBlock_position();
			me._languages_scroller.logicBlock_size();
			me._languages_scroller.logicBlock_visible();
			me._languages_cloner.ggTranslations = player.getProjectTranslations();
			me._languages_cloner.ggUpdate();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_scroller_pl.ggUpdatePosition();
			me._nodes_menu.logicBlock_size();
			me._nodes_menu.logicBlock_visible();
			me._nodes_scroller.ggUpdatePosition();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_scroller_pl.ggUpdatePosition();
			if (
				(
					((skin._categories_cloner_pl.ggNodeCount > 1))
				)
			) {
				player.setVariableValue('has_categories', true);
			}
			me._categories_menu.logicBlock_size();
			me._categories_menu.logicBlock_visible();
			me._categories_scroller.ggUpdatePosition();
			if (
				(
					((skin._categories_cloner.ggNodeCount > 1))
				)
			) {
				player.setVariableValue('has_categories', true);
			}
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_bg.logicBlock_alpha();
			if (
				(
					((player.getVariableValue('vis_menu') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('hide_lottie_index', Number("1.00"));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_menu', false);
			}
			me._menu_toggle.logicBlock_position();
			me._menu_toggle.logicBlock_visible();
			me._menu_toggle.logicBlock_alpha();
			me._menu_toggle_back.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
			me._node_title.logicBlock_position();
			me._node_title.logicBlock_size();
			me._node_title.logicBlock_visible();
			me._node_title.logicBlock_alpha();
			me._project_title.logicBlock_size();
			me._project_title.logicBlock_visible();
			me._project_title.logicBlock_alpha();
			me._screen_tint.logicBlock_visible();
			me._video_popup.logicBlock_alpha();
			me._video_popup_vimeo.logicBlock_visible();
			me._video_popup_youtube.logicBlock_visible();
			me._video_popup_url_controller.logicBlock_visible();
			me._video_popup_url.logicBlock_visible();
			me._video_popup_file_controller.logicBlock_visible();
			me._video_popup_file.logicBlock_visible();
			me._url_popup.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
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
			me._gyro_toggle.logicBlock_visible();
		});
		player.addListener('gyrochanged', function(event) {
			me._gyro_on.logicBlock_visible();
			me._gyro_off.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url__3d'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('playerstatechanged', function(event) {
			player.setVariableValue('pos_menu_button', Number("0.00"));
			player.setVariableValue('pos_menu_button_vert', Number("0.00"));
			player.setVariableValue('num_button_rows', Number("1.00"));
			if (
				(
					((player.getVariableValue('opt_fullscreen') == true)) && 
					((player.getVariableValue('has_fullscreen') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			me._audio_toggle.style.transition='none';
			me._audio_toggle.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._audio_toggle.ggParameter.ry=0;
			me._audio_toggle.style.transform=parameterToTransform(me._audio_toggle.ggParameter);
			if (
				(
					((player.getHasSounds() == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			me._hotspots_toggle.style.transition='none';
			me._hotspots_toggle.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._hotspots_toggle.ggParameter.ry=0;
			me._hotspots_toggle.style.transform=parameterToTransform(me._hotspots_toggle.ggParameter);
			player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			me._btn_languages.style.transition='none';
			me._btn_languages.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._btn_languages.ggParameter.ry=0;
			me._btn_languages.style.transform=parameterToTransform(me._btn_languages.ggParameter);
			if (
				(
					((player.getProjectTranslations().length > 1))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156"))) && 
					((player.getVariableValue('resp_phone_landscape') == false))
				)
			) {
				player.setVariableValue('pos_menu_button_vert', player.getVariableValue('pos_menu_button_vert') - Number("42.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156")))
				)
			) {
				player.setVariableValue('pos_menu_button', Number("0.00"));
			}
			me._btn_vr.style.transition='none';
			me._btn_vr.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._btn_vr.ggParameter.ry=player.getVariableValue('pos_menu_button_vert', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._btn_vr.style.transform=parameterToTransform(me._btn_vr.ggParameter);
			if (
				(
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156"))) && 
					((player.getVariableValue('resp_phone_landscape') == false))
				)
			) {
				player.setVariableValue('pos_menu_button_vert', player.getVariableValue('pos_menu_button_vert') - Number("42.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button') > Number("156")))
				)
			) {
				player.setVariableValue('pos_menu_button', Number("0.00"));
			}
			me._gyro_toggle.style.transition='none';
			me._gyro_toggle.ggParameter.rx=player.getVariableValue('pos_menu_button', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._gyro_toggle.ggParameter.ry=player.getVariableValue('pos_menu_button_vert', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._gyro_toggle.style.transform=parameterToTransform(me._gyro_toggle.ggParameter);
			if (
				(
					((player.getGyroAvailable() == true)) && 
					((player.getVariableValue('opt_gyro') == true))
				)
			) {
				player.setVariableValue('pos_menu_button', player.getVariableValue('pos_menu_button') + Number("52.00"));
			}
			if (
				(
					((player.getVariableValue('pos_menu_button_vert') < Number("0"))) && 
					((player.getVariableValue('pos_menu_button') > Number("0")))
				)
			) {
				player.setVariableValue('num_button_rows', player.getVariableValue('num_button_rows') + Number("1.00"));
			}
			if (
				(
					((player.getVariableValue('num_button_rows') > Number("1")))
				)
			) {
				me._button_container.style.transition='none';
				me._button_container.style.width = '188px';
				me._button_container.style.height = '74px';
				me._button_container.ggUpdatePosition();
				skin.updateSize(me._button_container);
			}
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
			me._variable_resp_phone_landscape.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_has_categories', function(event) {
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._fullscreen_toggle.logicBlock_visible();
		});
		player.addListener('varchanged_hide_lottie_index', function(event) {
			me._menu_toggle_back.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
		});
		player.addListener('varchanged_model_loading', function(event) {
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('varchanged_num_button_rows', function(event) {
			me._languages_scroller.logicBlock_position();
			me._languages_scroller.logicBlock_size();
			me._nodes_menu.logicBlock_size();
			me._categories_menu.logicBlock_size();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._fullscreen_toggle.logicBlock_visible();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._gyro_toggle.logicBlock_visible();
		});
		player.addListener('varchanged_opt_proj_title', function(event) {
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._model_load_spinner.logicBlock_size();
		});
		player.addListener('varchanged_resp_phone_landscape', function(event) {
			me._menu.logicBlock_size();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
			me._menu_toggle.logicBlock_position();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url__3d'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			me._hotspots_on_disabled.logicBlock_visible();
			me._hotspots_on_enabled.logicBlock_visible();
			me._hotspots_off_disabled.logicBlock_visible();
			me._hotspots_off_enabled.logicBlock_visible();
		});
		player.addListener('varchanged_vis_languages', function(event) {
			me._languages_scroller.logicBlock_visible();
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
			me._menu_toggle.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu', function(event) {
			me._menu.logicBlock_alpha();
			me._menu_toggle_bg.logicBlock_alpha();
			me._menu_toggle.logicBlock_position();
			me._node_title.logicBlock_size();
			me._project_title.logicBlock_size();
		});
		player.addListener('varchanged_vis_nodes', function(event) {
			me._nodes_menu_phone_landscape.logicBlock_visible();
			me._nodes_menu.logicBlock_visible();
			me._categories_menu_phone_landscape.logicBlock_visible();
			me._categories_menu.logicBlock_visible();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_url__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_url__3d'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_bg.logicBlock_alpha();
			me._menu_toggle.logicBlock_visible();
			me._menu_toggle.logicBlock_alpha();
			me._node_title.logicBlock_visible();
			me._node_title.logicBlock_alpha();
			me._project_title.logicBlock_visible();
			me._project_title.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._url_popup.logicBlock_visible();
			if (
				(
					((player.getVariableValue('vis_url_popup') == false))
				)
			) {
					me._url_popup_iframe.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._url_popup_iframe.ggUpdateText();
				me._url_popup_iframe.ggTextDiv.scrollTop = 0;
			}
		});
		player.addListener('varchanged_vis_video_popup_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._video_popup.logicBlock_alpha();
			me._video_popup_file_controller.logicBlock_visible();
			me._video_popup_file.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._video_popup.logicBlock_alpha();
			me._video_popup_url_controller.logicBlock_visible();
			me._video_popup_url.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._video_popup.logicBlock_alpha();
			me._video_popup_vimeo.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._video_popup.logicBlock_alpha();
			me._video_popup_youtube.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._languages_cloner.ggUpdate();
			me._node_cloner_pl.ggUpdate();
			me._node_cloner.ggUpdate();
			me._categories_cloner_pl.ggUpdate();
			me._categories_cloner.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._btn_vr.logicBlock_visible();
		});
	};
	function SkinCloner_categories_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='calc(100% - 15px)';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._category_container=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_container;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="category_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._category_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_thumbnail=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_thumbnail;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_thumbnail__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="category_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_thumbnail.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._category_thumbnail.onclick=function (e) {
			if (me._category_thumbnail.isDragging()) return;
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			skin._node_cloner_pl.ggText=me.ggTag;
			if (skin._node_cloner_pl.ggText=='') {
				skin._node_cloner_pl.ggUpdate([]);
			} else {
				skin._node_cloner_pl.ggUpdate(skin._node_cloner_pl.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('vis_nodes', true);
			skin._close_to_menu_anim.style.transition='none';
			skin._close_to_menu_anim.style.visibility='hidden';
			skin._close_to_menu_anim.ggVisible=false;
			skin._close_to_back_anim.style.transition='none';
			skin._close_to_back_anim.style.visibility=(Number(skin._close_to_back_anim.style.opacity)>0||!skin._close_to_back_anim.style.opacity)?'inherit':'hidden';
			skin._close_to_back_anim.ggVisible=true;
			skin._close_to_back_anim.ggLottie.loop = 0;
			skin._close_to_back_anim.ggLottie.play();
			skin._back_to_close_anim.ggLottie.goToAndStop(skin._back_to_close_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("3.00"));
			skin._menu_toggle_timer.ggTimeout=Number("0.5") * 1000.0;
			skin._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._category_thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._category_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._category_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._category_title.ggUpdateText();
		});
		el.appendChild(els);
		me._category_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me._category_thumbnail.ggNodeId;
		}
		me._category_title.ggUpdatePosition=function (useTransition) {
		}
		me._category_thumbnail.appendChild(me._category_title);
		me._category_container.appendChild(me._category_thumbnail);
		me.__div.appendChild(me._category_container);
	};
	function SkinCloner_categories_cloner_pl_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='calc(100% - 15px)';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._category_container0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_container0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="category_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_container0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._category_container0.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_thumbnail0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_thumbnail0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_thumbnail0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="category_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_thumbnail0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._category_thumbnail0.onclick=function (e) {
			if (me._category_thumbnail0.isDragging()) return;
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			skin._node_cloner_pl.ggText=me.ggTag;
			if (skin._node_cloner_pl.ggText=='') {
				skin._node_cloner_pl.ggUpdate([]);
			} else {
				skin._node_cloner_pl.ggUpdate(skin._node_cloner_pl.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('vis_nodes', true);
			skin._close_to_menu_anim.style.transition='none';
			skin._close_to_menu_anim.style.visibility='hidden';
			skin._close_to_menu_anim.ggVisible=false;
			skin._close_to_back_anim.style.transition='none';
			skin._close_to_back_anim.style.visibility=(Number(skin._close_to_back_anim.style.opacity)>0||!skin._close_to_back_anim.style.opacity)?'inherit':'hidden';
			skin._close_to_back_anim.ggVisible=true;
			skin._close_to_back_anim.ggLottie.loop = 0;
			skin._close_to_back_anim.ggLottie.play();
			skin._back_to_close_anim.ggLottie.goToAndStop(skin._back_to_close_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("3.00"));
			skin._menu_toggle_timer.ggTimeout=Number("0.5") * 1000.0;
			skin._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._category_thumbnail0.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_title0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_title0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._category_title0.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._category_title0.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._category_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._category_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me._category_thumbnail0.ggNodeId;
		}
		me._category_title0.ggUpdatePosition=function (useTransition) {
		}
		me._category_thumbnail0.appendChild(me._category_title0);
		me._category_container0.appendChild(me._category_thumbnail0);
		me.__div.appendChild(me._category_container0);
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope, ggParent, parameter) {
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
			me.__div.style.width='calc(100% - 15px)';
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
		el.isDragging = function() {
			let scrollerParent = me._node_container;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
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
		me._node_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_thumbnail=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumbnail;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_thumbnail__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumbnail.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_thumbnail.onclick=function (e) {
			if (me._node_thumbnail.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._back_to_close_anim.style.transition='none';
				skin._back_to_close_anim.style.visibility='hidden';
				skin._back_to_close_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._close_to_menu_anim.style.transition='none';
				skin._close_to_menu_anim.style.visibility=(Number(skin._close_to_menu_anim.style.opacity)>0||!skin._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				skin._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._close_to_menu_anim.onclick.call(skin._close_to_menu_anim);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_nodes', false);
			}
		}
		me._node_thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_cloner_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_cloner_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_cloner_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_cloner_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_cloner_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_cloner_title.ggUpdateText();
		});
		el.appendChild(els);
		me._node_cloner_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me._node_thumbnail.ggNodeId;
		}
		me._node_cloner_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me._node_cloner_title.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._node_cloner_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._node_cloner_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._node_cloner_title.style.transition='color 0s';
				if (me._node_cloner_title.ggCurrentLogicStateTextColor == 0) {
					me._node_cloner_title.style.color="rgba(255,255,255,1)";
				}
				else {
					me._node_cloner_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._node_cloner_title.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumbnail.appendChild(me._node_cloner_title);
		me._node_container.appendChild(me._node_thumbnail);
		me.__div.appendChild(me._node_container);
		me._node_cloner_title.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._node_cloner_title.logicBlock_textcolor();
			};
	};
	function SkinCloner_node_cloner_pl_Class(nodeId, parentScope, ggParent, parameter) {
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
			me.__div.style.width='calc(100% - 15px)';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_container0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_container0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_container0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_container0.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_thumbnail0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumbnail0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_thumbnail0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/category_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumbnail0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_thumbnail0.onclick=function (e) {
			if (me._node_thumbnail0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._back_to_close_anim.style.transition='none';
				skin._back_to_close_anim.style.visibility='hidden';
				skin._back_to_close_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('has_categories') == true))
				)
			) {
				skin._close_to_menu_anim.style.transition='none';
				skin._close_to_menu_anim.style.visibility=(Number(skin._close_to_menu_anim.style.opacity)>0||!skin._close_to_menu_anim.style.opacity)?'inherit':'hidden';
				skin._close_to_menu_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._close_to_menu_anim.onclick.call(skin._close_to_menu_anim);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_nodes', false);
			}
		}
		me._node_thumbnail0.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_cloner_title0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_title0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_cloner_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_cloner_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_cloner_title0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_cloner_title0.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_cloner_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._node_cloner_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me._node_thumbnail0.ggNodeId;
		}
		me._node_cloner_title0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me._node_cloner_title0.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._node_cloner_title0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._node_cloner_title0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._node_cloner_title0.style.transition='color 0s';
				if (me._node_cloner_title0.ggCurrentLogicStateTextColor == 0) {
					me._node_cloner_title0.style.color="rgba(255,255,255,1)";
				}
				else {
					me._node_cloner_title0.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._node_cloner_title0.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumbnail0.appendChild(me._node_cloner_title0);
		me._node_container0.appendChild(me._node_thumbnail0);
		me.__div.appendChild(me._node_container0);
		me._node_cloner_title0.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._node_cloner_title0.logicBlock_textcolor();
			};
	};
	function SkinCloner_languages_cloner_Class(item, parentScope, ggParent, parameter) {
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
		el=me._language_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._language_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._language_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="language_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
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
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._language_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._language_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._language_title.ggUpdateText();
		});
		el.appendChild(els);
		me._language_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._language_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['language_title'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._language_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._language_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._language_title.style.transition='color 0s';
				if (me._language_title.ggCurrentLogicStateTextColor == 0) {
					me._language_title.style.color="rgba(255,255,255,1)";
				}
				else {
					me._language_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._language_title.onclick=function (e) {
			if (me._language_title.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_languages', false);
		}
		me._language_title.onmouseenter=function (e) {
			me.elementMouseOver['language_title']=true;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.onmouseleave=function (e) {
			me.elementMouseOver['language_title']=false;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._language_title);
		me.elementMouseOver['language_title']=false;
		me._language_title.logicBlock_textcolor();
	};
	function SkinHotspotClass_ht_url__3d(parentScope,hotspot) {
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
			me._ht_url.visible = (v>0 && me._ht_url.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.name = 'ht_url';
		el.userData.x = -4;
		el.userData.y = -1;
		el.translateZ(0.000);
		el.userData.z = 0.000;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 0;
		el.userData.renderOrder = 0;
		el.userData.isVisible = function() {
			let vis = me._ht_url.visible
			let parentEl = me._ht_url.parent;
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
			me._ht_url.userData.opacity = v;
			v = v * me._ht_url.userData.parentOpacity;
			if (me._ht_url.userData.setOpacityInternal) me._ht_url.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url.children.length; i++) {
				let child = me._ht_url.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url.userData.parentOpacity = v;
			v = v * me._ht_url.userData.opacity
			if (me._ht_url.userData.setOpacityInternal) me._ht_url.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url.children.length; i++) {
				let child = me._ht_url.children[i];
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
		me._ht_url = el;
		el.userData.ggId="ht_url";
		me._ht_url.userData.ggIsActive=function() {
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
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
			me._ht_url.visible=((!me._ht_url.material && Number(me._ht_url.userData.opacity>0)) || (me._ht_url.material && Number(me._ht_url.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_url.userData.visible=true;
				}
				else {
			me._ht_url.visible=false;
			player.repaint();
			me._ht_url.userData.visible=false;
				}
			}
		}
		me._ht_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_url.ggCurrentLogicStateAlpha == 0) {
					me._ht_url.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_url.userData.transitions.length; i++) {
						if (me._ht_url.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_url.userData.transitions[i].interval);
							me._ht_url.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_url.material ? me._ht_url.material.opacity : me._ht_url.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 500;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_url.userData.setOpacity(transition_alpha.startAlpha + (me._ht_url.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_url.userData.transitions.splice(me._ht_url.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_url.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_url.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_url.userData.transitions.length; i++) {
						if (me._ht_url.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_url.userData.transitions[i].interval);
							me._ht_url.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_url.material ? me._ht_url.material.opacity : me._ht_url.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 500;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_url.userData.setOpacity(transition_alpha.startAlpha + (me._ht_url.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_url.userData.transitions.splice(me._ht_url.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_url.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_url.userData.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url_popup') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_title.ggUpdateText();
				skin._url_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_iframe.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_iframe.ggUpdateText();
				skin._url_popup_iframe.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_popup', true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._ht_url_tooltip.logicBlock_alpha();
			me._ht_url_bg.logicBlock_zindex();
			me._ht_url_icon.logicBlock_visible();
			me._ht_url_icon.logicBlock_zindex();
			me._ht_url_icon_active.logicBlock_visible();
			me._ht_url_icon_active.logicBlock_zindex();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.userData.onmouseleave=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._ht_url_tooltip.logicBlock_alpha();
			me._ht_url_bg.logicBlock_zindex();
			me._ht_url_icon.logicBlock_visible();
			me._ht_url_icon.logicBlock_zindex();
			me._ht_url_icon_active.logicBlock_visible();
			me._ht_url_icon_active.logicBlock_zindex();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_url.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_url_tooltip_material';
			el.material = material;
		el.translateX(0);
		el.translateY(-0.4);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 100;
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
		el.name = 'ht_url_tooltip';
		el.userData.x = 0;
		el.userData.y = -0.4;
		el.translateZ(0.030);
		el.userData.z = 0.030;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 1;
		el.userData.renderOrder = 1;
		el.userData.isVisible = function() {
			let vis = me._ht_url_tooltip.visible
			let parentEl = me._ht_url_tooltip.parent;
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
			me._ht_url_tooltip.userData.opacity = v;
			v = v * me._ht_url_tooltip.userData.parentOpacity;
			if (me._ht_url_tooltip.userData.setOpacityInternal) me._ht_url_tooltip.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_tooltip.children.length; i++) {
				let child = me._ht_url_tooltip.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url_tooltip.userData.parentOpacity = v;
			v = v * me._ht_url_tooltip.userData.opacity
			if (me._ht_url_tooltip.userData.setOpacityInternal) me._ht_url_tooltip.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_tooltip.children.length; i++) {
				let child = me._ht_url_tooltip.children[i];
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
		me._ht_url_tooltip = el;
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
			let el = me._ht_url_tooltip;
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
			skin.rectCalcBorderRadiiInnerShape(me._ht_url_tooltip);
			if (skin.rectHasRoundedCorners(me._ht_url_tooltip)) {
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
		geometry.name = 'ht_url_tooltip_geometry';
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
				geometry.name = 'ht_url_tooltip_geometry';
			}
			el.geometry = geometry;
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._ht_url_tooltip.material.opacity = v;
			if (me._ht_url_tooltip.userData.hasScrollbar) {
				me._ht_url_tooltip.userData.scrollbar.material.opacity = v;
				me._ht_url_tooltip.userData.scrollbarBg.material.opacity = v;
			}
			if (me._ht_url_tooltip.userData.ggSubElement) {
				me._ht_url_tooltip.userData.ggSubElement.material.opacity = v
				me._ht_url_tooltip.userData.ggSubElement.visible = (v>0 && me._ht_url_tooltip.userData.visible);
			}
			me._ht_url_tooltip.visible = (v>0 && me._ht_url_tooltip.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_url_tooltip.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_url_tooltip.userData.backgroundColorAlpha = v;
			me._ht_url_tooltip.userData.setOpacity(me._ht_url_tooltip.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.backgroundColor = new THREE.Color(1, 1, 1).convertSRGBToLinear();
		el.userData.textColor = '#ffffff';
		el.userData.textColorAlpha = 1;
		el.userData.cssClasses = ['montserrat', 'shadow'];
		var canvas = document.createElement('canvas');
		canvas.width = 200;
		canvas.height = 40;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._ht_url_tooltip;
			var canv = me._ht_url_tooltip.userData.textCanvas;
			var ctx = me._ht_url_tooltip.userData.textCanvasContext;
			var tmpCanv = me._ht_url_tooltip.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._ht_url_tooltip.userData.scrollPosPercent ? tmpCanv.height * me._ht_url_tooltip.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._ht_url_tooltip.userData.boxWidthCanv / 100.0;
		height = me._ht_url_tooltip.userData.boxHeightCanv / 100.0;
		me._ht_url_tooltip.userData.width = me._ht_url_tooltip.userData.boxWidthCanv;
		me._ht_url_tooltip.userData.height = me._ht_url_tooltip.userData.boxHeightCanv;
		me._ht_url_tooltip.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._ht_url_tooltip, 0, 40);
		me._ht_url_tooltip.position.x = newPos.x;
		me._ht_url_tooltip.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'ht_url_tooltip_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._ht_url_tooltip.material.map) {
				me._ht_url_tooltip.material.map.dispose();
			}
			me._ht_url_tooltip.material.map = textTexture;
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._ht_url_tooltip, 'scrollbar');
			skin.paintTextDivToCanvas(me._ht_url_tooltip, 'box-sizing: border-box; width: auto; height: auto; font-size: 16px; font-weight: 500; color: rgba(255,255,255,1); text-align: center; white-space: pre; padding: 0px; overflow: hidden;' + '; color: ' + me._ht_url_tooltip.userData.textColor + ' !important;', false, true, false);
			me._ht_url_tooltip.userData.hasScrollbar = false;
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
			me._ht_url_tooltip.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_url_tooltip.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._ht_url_tooltip.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._ht_url_tooltip.userData.textColorAlpha = v;
		}
		el.userData.ggId="ht_url_tooltip";
		me._ht_url_tooltip.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_url_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_url_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				if (me._ht_url_tooltip.ggCurrentLogicStatePosition == 0) {
					var newPos = skin.getElementVrPosition(me._ht_url_tooltip, 0, -40);
					me._ht_url_tooltip.position.x = newPos.x;
					me._ht_url_tooltip.position.y = newPos.y;
				}
				else {
					var elPos = skin.getElementVrPosition(me._ht_url_tooltip, 0, 40);
					me._ht_url_tooltip.position.x = elPos.x;
					me._ht_url_tooltip.position.y = elPos.y;
				}
			}
		}
		me._ht_url_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_url_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_url_tooltip.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_url_tooltip.userData.transitions.length; i++) {
						if (me._ht_url_tooltip.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_url_tooltip.userData.transitions[i].interval);
							me._ht_url_tooltip.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_url_tooltip.material ? me._ht_url_tooltip.material.opacity : me._ht_url_tooltip.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_url_tooltip.userData.setOpacity(transition_alpha.startAlpha + (me._ht_url_tooltip.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_url_tooltip.userData.transitions.splice(me._ht_url_tooltip.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_url_tooltip.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_url_tooltip.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_url_tooltip.userData.transitions.length; i++) {
						if (me._ht_url_tooltip.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_url_tooltip.userData.transitions[i].interval);
							me._ht_url_tooltip.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_url_tooltip.material ? me._ht_url_tooltip.material.opacity : me._ht_url_tooltip.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_url_tooltip.userData.setOpacity(transition_alpha.startAlpha + (me._ht_url_tooltip.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_url_tooltip.userData.transitions.splice(me._ht_url_tooltip.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_url_tooltip.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_url_tooltip.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_url_tooltip.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_url_tooltip.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				if (me._ht_url_tooltip.ggCurrentLogicStateZIndex == 0) {
			me._ht_url_tooltip.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_url_tooltip, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (1 > 0) {
					if (obj == me._ht_url_tooltip) {
						obj.renderOrder = 10000 + 1000*1
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_url_tooltip.userData.renderOrder + level;
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
			me._ht_url_tooltip.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_url_tooltip, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (-10000 > 0) {
					if (obj == me._ht_url_tooltip) {
						obj.renderOrder = 10000 + 1000*-10000
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_url_tooltip.userData.renderOrder + level;
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
		me._ht_url_tooltip.userData.ggUpdatePosition=function (useTransition) {
				me._ht_url_tooltip.userData.ggUpdateText(true);
		}
		me._ht_url.add(me._ht_url_tooltip);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: new THREE.Color(1, 1, 1).convertSRGBToLinear(), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || false) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_url_bg_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
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
		el.name = 'ht_url_bg';
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
		el.userData.isVisible = function() {
			let vis = me._ht_url_bg.visible
			let parentEl = me._ht_url_bg.parent;
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
			me._ht_url_bg.userData.opacity = v;
			v = v * me._ht_url_bg.userData.parentOpacity;
			if (me._ht_url_bg.userData.setOpacityInternal) me._ht_url_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_bg.children.length; i++) {
				let child = me._ht_url_bg.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url_bg.userData.parentOpacity = v;
			v = v * me._ht_url_bg.userData.opacity
			if (me._ht_url_bg.userData.setOpacityInternal) me._ht_url_bg.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_bg.children.length; i++) {
				let child = me._ht_url_bg.children[i];
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
		me._ht_url_bg = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 25;
		el.userData.borderRadius.default.topRight = 25;
		el.userData.borderRadius.default.bottomRight = 25;
		el.userData.borderRadius.default.bottomLeft = 25;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_url_bg;
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
			skin.rectCalcBorderRadiiInnerShape(me._ht_url_bg);
			if (skin.rectHasRoundedCorners(me._ht_url_bg)) {
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
		geometry.name = 'ht_url_bg_geometry';
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
				geometry.name = 'ht_url_bg_geometry';
			}
			el.geometry = geometry;
		}
		el.userData.backgroundColorAlpha = 0.705882;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._ht_url_bg.material.opacity = v * me._ht_url_bg.userData.backgroundColorAlpha;
			if (me._ht_url_bg.userData.ggSubElement) {
				me._ht_url_bg.userData.ggSubElement.material.opacity = v
				me._ht_url_bg.userData.ggSubElement.visible = (v>0 && me._ht_url_bg.userData.visible);
			}
			me._ht_url_bg.visible = (v>0 && me._ht_url_bg.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_url_bg.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_url_bg.userData.backgroundColorAlpha = v;
			me._ht_url_bg.userData.setOpacity(me._ht_url_bg.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 25, 25, 25, 25);
		el.userData.ggId="ht_url_bg";
		me._ht_url_bg.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_url_bg.ggCurrentLogicStateVisible == 0) {
			me._ht_url_bg.visible=false;
			player.repaint();
			me._ht_url_bg.userData.visible=false;
				}
				else {
			me._ht_url_bg.visible=((!me._ht_url_bg.material && Number(me._ht_url_bg.userData.opacity>0)) || (me._ht_url_bg.material && Number(me._ht_url_bg.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_url_bg.userData.visible=true;
				}
			}
		}
		me._ht_url_bg.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_url_bg.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				if (me._ht_url_bg.ggCurrentLogicStateZIndex == 0) {
			me._ht_url_bg.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_url_bg, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (1 > 0) {
					if (obj == me._ht_url_bg) {
						obj.renderOrder = 10000 + 1000*1
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_url_bg.userData.renderOrder + level;
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
			me._ht_url_bg.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_url_bg, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (-10000 > 0) {
					if (obj == me._ht_url_bg) {
						obj.renderOrder = 10000 + 1000*-10000
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_url_bg.userData.renderOrder + level;
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
		me._ht_url_bg.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_url_bg']=true;
		}
		me._ht_url_bg.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_url_bg']=false;
		}
		me._ht_url_bg.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.add(me._ht_url_bg);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_url_icon';
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
			let vis = me._ht_url_icon.visible
			let parentEl = me._ht_url_icon.parent;
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
			me._ht_url_icon.userData.opacity = v;
			v = v * me._ht_url_icon.userData.parentOpacity;
			if (me._ht_url_icon.userData.setOpacityInternal) me._ht_url_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_icon.children.length; i++) {
				let child = me._ht_url_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url_icon.userData.parentOpacity = v;
			v = v * me._ht_url_icon.userData.opacity
			if (me._ht_url_icon.userData.setOpacityInternal) me._ht_url_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_icon.children.length; i++) {
				let child = me._ht_url_icon.children[i];
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
		me._ht_url_icon = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_url_icon.userData.materialNormal) me._ht_url_icon.userData.materialNormal.opacity = v;
			if (me._ht_url_icon.userData.materialOver) me._ht_url_icon.userData.materialOver.opacity = v;
			if (me._ht_url_icon.userData.materialActive) me._ht_url_icon.userData.materialActive.opacity = v;
			me._ht_url_icon.visible = (v>0 && me._ht_url_icon.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAJoklEQVR4nO1cb4xUVxX/nftmWNnuEsoKxRArVgUl/WIhHXfmve2ACBmxFLBodUNiLLXW1FharH9i/VK/WFohLQmWlNY0BdtCoRboBqgy7HtvNruyfmqIxT9pbLUtusufWRfYmbnHDzs0y3DPe29nZ2HB+SX7Ye8595zfO3PvnXfvOXeAOuqoo4466rhaQZfbYTqdbioWizaA+QDmAJgLYCaA5vIfE1Fea51XSr0H4LjW+i0AR8+dO+f39vYOXk6+lyVAjuN8TGvdTkQrANwKIF6lqSEA3cy8m5l35HK5E7Vjaca4BqitrW2R1no9gCUArBqbLxLR61rrDb7vezW2/SHGJUCpVGohEf0CQHI87FeCmTsB/Mz3fbfWtmsaoNbW1lmWZf0KwNdqaTcqiG'+
	'i7ZVnrs9ns+zWzWStDjuPcxcxbMbzQXkmcIqK1ruu+UgtjYw5QJpNpGBgY2MTM3x0zGaIuZiYAX6iBrc19fX0PHTt2bGhMdsbSOZFITInH468CWBhBvQBgJ4A7AFxnkGtmTgAAEfUI3AYA7AWwGkAsgs83YrHYymw2OxBB1whVbUfHcabHYrEswoNzEsAvS6XSJwHsgjk4APCc7/tHfd8/CuA5QaeJiF5WSt1ERI8DOBPie3GxWDycTqc/GqInoqoAJRKJKVrrA0T0+RDVbYVCYbbneT/u6ur6J4CHTUrMfFpr/dML/2utf8LMpwWbD3d2dr7juu4PY7HYJwA8H8JhQbFY7Ein000hekaMeoplMpmGfD7fgeCR8z6AezzP23ehIZVKOUTUaSRB9KDruhtHttm2/SCAJ0z6zOyMfPdxHGdF+QtiegCnN/r7+5eNdk0a'+
	'9QgaGBjYhIDgENHBoaGhm0cGp9xuHD0A/jw4OLi5svHs2bNPAXhL8HGRLdd1X9Va38zMfwigvrilpcUY8CCMKkCpVOrrId9W+5uampb39PT0jWxsa2v7DIBlQp/Hent7C5WN5bbHhD5faW1t/fTIhlwudyIejy8DcEAix8z3O47z1QD+lyBygFpbW2cR0VZJTkSv9ff3r+ro6DhvILYa5ul8orm5eYdks7m5eTuAf5vcKaVWVzZms9lzzc3NdxDR65JNZn4mnU7PlOSViByg8hvyFEF8YHBw8E5pfjPzSlM7ET1tCugFlGVPm2RKKaPNjo6O8319fSsBHBLMTi2VSo9LPi/xE0XJcZwvQt4+fEBEa0zTBADa2to+DmCBScbMvwnzrbU26jDzgrLtS3Ds2LGhQqGwBubRB2ZudxzntjDfQPQR9KgkIKK7Xdc1EgEArb'+
	'XxkwbQ7Xne38Mc53K5vwHoMblm5hVSv+7u7g8AfFuSM7P4TCMRGiDHcW5j5lbByRbXdfeHmDAGiJlfjMDvgu5vhfZVQf08z9tHRL8WxE4qlXLCfIe+B9m2/RqA28P0rlLs9TxveZBCYIASicQN8Xj8XUTb91yNKGqtZwWdTAZOsXg83o5rNzgAELMsqz1IIWwNkhbYawZh65g4xZYsWXLd4ODgSVR/wH61YOjs2bPXS9kScQQNDAykcO0HBwAmNTQ02JJQXF+IaL4g2uN5XuCwBIZfELXW/zCI+j3Pawnrb4Jt230AplW2K6Vu7OzsfCdC/z0ALnl3IqJbABw09RFHkFJqriD6UxgRANBaX/IgZZiCFhXGIAT4ugjMLHGXnlUOEDMbOzFzb0QyRtJENJYAGftKvgwwcg8YDIEBMu54Lct6OwoTpZSRNDP/J0p/Aca+'+
	'ki+D3tsCJ3F3HzTFjOkbpdTJKGRgWCvKqPoAnZmlvlFHkMRdTFUFjSCp06koTKRhH/CQoVBKGftGnWKWZUkBko5xqs9q/L9ADBAR5QXR1CiGiahfaK8quwAAWmtjX8lXJUql0vWCSEwfiQHSWhsDpLWWnFRCIl11gAKCGylAACTu0mAIHEHGAoBSqTQ7ChOttUQ6KDUTBmMCMMBXpd5sU7v0rEBwgKSUi/SGXaknkTYek0bEjaP0VQkj93IFmxFBU0zqdEsUJkopibTxISPCGNwAXxehvKUwQQyQuJtPJpNLlFJijulagtZ6aS6XG91erKmpycdwRca1jqHz58+LJXxigA4ePPhfAN3jQmlioSeocjbsRXFPjclMOBDR7iB5YIAKhcJ2AMWaMppYKJZKpe1BCoEBKiffOmpKaWKhI6zWOjRjQURPMLMxL8bMW3zf/1'+
	'5Qf9u2DwNIG/qu831/U5h/AEilUg8Q0UaDKOt5XmCFm+M4W6SKFGbeEOY7dLPquu4RADmTjIjucxxHKmu5AOM6RkR3hfkeofsNoT1w/bBt+/aAch03Sl11pN08Ef1ckjHzs8lkcoboQClpoU/Ytn1TmO9kMvkpDF9fuMS1ZVnil0gikbgBwDZJTkSPhPkGIgbIdd3fA3hZEM9QSj0/f/58YwakfJh+VCD5rVCCShl1iOhoNpt91ySbN2/epHg8/gKEfR8RbS/PjFBEPg9i5nWQjwWWNjY27po3b94kgZDxk2bmezOZTIPksyy71yTTWhttZjKZhpaWlj0AFgtmT1mWtV7yWYnIAfJ9/1/M/B1JzszLp02bttv0wES0EwAbus3I5/PflGzm8/l2mEcBa613Vjam0+mP5PP53zHzlyWbRLR2NFcVRnWi6Pv+SwHlJACw'+
	'LJ/P762sS+7s7PwLAKlM5kem6Vlukwo/93V1df11ZEMymZxRKBT2A1gqkSOizaO9ojDqI9empqYHABwOUPlSsVh807bti14NmFkqyJzb2Nh4f2Xj5MmTvw8hX1Vpy7btlUqpN4loUQCvQ319fQ8FyI2o6ipCKpVqBnAkQiH5s4VCYV13d/cZAHAcJ2cqxmLm08w858JLW7ns5jjMh+k5z/NSAJBOp6cWi8UnAawJIkFEf7Qsa1E1VxKqvqvhOM70iNX2pwBsLZVKT1qWdSsA6d1lm+d5awHAtu1tEMrniGglEfVqrX8A4B4EZCTKOBqLxTLZbLaqfNzlvsyyC8ByBFxmYWZSSnUL3AYA7ANwJ6LVLR2KxWKrxnKZpSbXoc6cObORiO4bq61aXodi5qdOnjy5/opehxqJiXShjpnv9n0/cBsSFTVLHLqu+yIzf5aIXq'+
	'qVzdGCmV+IxWKfq1VwgPG91PsogNR42DfgCDM/MuEv9VYilUotVEqtZ+alGIdr4cy8Xym1wXVdv8a2P8Rl+WGBdDo9s1gstmO4KHTMPywA4BUi2hFU4V8rXPafpigXhzrlHNUcZp7LzDOVUs3lihLGcCo4D+A9Zj6O4bxV75X4aYo66qijjjrquHrxPw5I1cWlnVA0AAAAAElFTkSuQmCC');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_url_icon_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_url_icon;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_url_icon_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_url_icon";
		me._ht_url_icon.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_url_icon.ggCurrentLogicStateVisible == 0) {
			me._ht_url_icon.visible=false;
			player.repaint();
			me._ht_url_icon.userData.visible=false;
				}
				else {
			me._ht_url_icon.visible=((!me._ht_url_icon.material && Number(me._ht_url_icon.userData.opacity>0)) || (me._ht_url_icon.material && Number(me._ht_url_icon.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_url_icon.userData.visible=true;
				}
			}
		}
		me._ht_url_icon.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_url_icon.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_url_icon.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				if (me._ht_url_icon.ggCurrentLogicStateZIndex == 0) {
			me._ht_url_icon.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_url_icon, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (1 > 0) {
					if (obj == me._ht_url_icon) {
						obj.renderOrder = 10000 + 1000*1
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_url_icon.userData.renderOrder + level;
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
			me._ht_url_icon.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_url_icon, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (-10000 > 0) {
					if (obj == me._ht_url_icon) {
						obj.renderOrder = 10000 + 1000*-10000
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_url_icon.userData.renderOrder + level;
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
		me._ht_url_icon.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_url_icon']=true;
		}
		me._ht_url_icon.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_url_icon']=false;
		}
		me._ht_url_icon.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.add(me._ht_url_icon);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 36;
		el.userData.height = 36;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_url_icon_active';
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
			let vis = me._ht_url_icon_active.visible
			let parentEl = me._ht_url_icon_active.parent;
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
			me._ht_url_icon_active.userData.opacity = v;
			v = v * me._ht_url_icon_active.userData.parentOpacity;
			if (me._ht_url_icon_active.userData.setOpacityInternal) me._ht_url_icon_active.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_icon_active.children.length; i++) {
				let child = me._ht_url_icon_active.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url_icon_active.userData.parentOpacity = v;
			v = v * me._ht_url_icon_active.userData.opacity
			if (me._ht_url_icon_active.userData.setOpacityInternal) me._ht_url_icon_active.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_icon_active.children.length; i++) {
				let child = me._ht_url_icon_active.children[i];
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
		me._ht_url_icon_active = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_url_icon_active.userData.materialNormal) me._ht_url_icon_active.userData.materialNormal.opacity = v;
			if (me._ht_url_icon_active.userData.materialOver) me._ht_url_icon_active.userData.materialOver.opacity = v;
			if (me._ht_url_icon_active.userData.materialActive) me._ht_url_icon_active.userData.materialActive.opacity = v;
			me._ht_url_icon_active.visible = (v>0 && me._ht_url_icon_active.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAFAElEQVR4nO2cT2wVVRTGzxhpTbBNQWmrWEL8x150RRuiLqWG6kITVrpX65+NLnWj0ZUkuIGFiqgbARHBNooSWqUIW8EVQRNaYlqkaGLF/lzMw4yTOeee997Mm/fKfMnb3He/e7775c19d+6cMyIVKlSoUKFCpyJqdUDgVhEZFpHNInK/iGwSkUER6al9EJHF2ueiiPwsIudE5EcRmYqi6M9Way4cwB3AK8AJYInG8RdwHBgH+sueV9MAHgG+BK41YYqGv4GDwHDZ86wbwMPAVAGmaPgOGCl73kEA64FPW2hMGnuBwbJ9yATwNHClRHOuYwF4smw//gPQDbyX0+Smge9zGmsn0FW2Ob3AN07BS8BHwFXl+3+AB2ufZaXPIrCPeIH2YJJ4W1GKOeuAMw'+
	'6R88CbxOvTmNFvd2LsPUa/7cAQ8DbwuyP+KeD2VpvT6zRnN9Cb4GmXz2US+xqgv9aWhelEvz7gfadJrfklEa85ocvqIrAtxRsx+r+YEeclo/9wqu924FJA0yStWJMIL8hfAbdl8A4p/X8CVmX0XwWcVTifZ/TvB74OaNtZlC/XRTwVEPAF0J3Buw994X3GiPeswlkG7s3ofwtwNKCxmC0A8SJrLYoHUX7CwGsKZy7L0ASvG/3SedXgHDZ0LlDEZhJ7h3yUjMskwT2l8F53xH1D4c4YnC5gwtC7t1EftICPGsFmgXUGd8jg3u2IfY/CXQaGDN4A9sK9tVE/soJNG4EeC3CfV3g/1BH/pDLGcwHeNkP3cW/8kLitRpBdDv4xhTteh4ZxZYxjDq71rxs8AQieKBL/pY4659JpOBRF0eNWB9MgYEBEfhWRm/NU1Ua4JiLr'+
	'oyi6pHW4KTDADlm55ojEc9thdQgZNJaflrbFE9aX6iUGrBaRBRFR9zcrBEsiskZ7WmL9grbIyjdHRKRL4sdQmbAM2qy0748cEJENCn/ew1fGnFfG3ODkH1D4D2gmWAZtUtrPGJwk1irtF5z8LPxSZ6w0NO3aXBsy6LRTTBEGaVyvQZr2hgzS7njPO8Voon9z8uvheg06r7Srd/eWQT1K+4JTjCb6qpNfD9drkKZdm2tDBl12iukkg3qV9uBG8YaHZdCi0t7nHFv7S27m6YLG1WKlsUZpv6IRGjFIC5JGJxmkzdU0aFZp3+gUo4lWTx8d0B4Aeg3aqLRrczUNOqe0azvsNDTR6jGpA+ru3MnXtGtzbcggdVuegnpb4ORnQTPXa5CmXTXIOuvRdp1jAE5BWVjbJD8LF5ocUr19qo47Gj3uiKLoDxE5WZSqNsKMlTkb2i'+
	'juz1lMO+Iz68vq0L6ZQ/soiuZE5EjeqtoIRyxzXLjRHxx6BVo5z+386HnU0J3Po+daICt5YQ6jLIBikxfuMnitS16oBey09JdJQ2++6S+1oHdSJVDZoErBC4NwEucEGXnJ6EmcZ1kpSZw1IZ404FlgNMUrMg14jHAa8AStKk0AevAlku/h/4nkWqZaOpF8AH29m0r06wM+cOiYodUlCfhLERaAt8i/FOEd2rUUITGReotZ9hEuZnkIu5jlY/zFLBOUVcySMKkb2OUUHEKe5VDvUnY5VBK0V0GdmRRVGog3k5+UaM6HtGtJZhLERb0nWmjMt3RCUW8aNaMOU1xZ+AFgS9nzbBrAIPAy+b1Y4AWM8oc8UcarKVaLyIjEz6jqeTXFaVmpr6aoUKFChQoVCsG/3NcIY6cKAwIAAAAASUVORK5CYII=');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_url_icon_active_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_url_icon_active;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_url_icon_active_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_url_icon_active";
		me._ht_url_icon_active.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_url_icon_active.ggCurrentLogicStateVisible == 0) {
			me._ht_url_icon_active.visible=((!me._ht_url_icon_active.material && Number(me._ht_url_icon_active.userData.opacity>0)) || (me._ht_url_icon_active.material && Number(me._ht_url_icon_active.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_url_icon_active.userData.visible=true;
				}
				else {
			me._ht_url_icon_active.visible=false;
			player.repaint();
			me._ht_url_icon_active.userData.visible=false;
				}
			}
		}
		me._ht_url_icon_active.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_url_icon_active.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_url_icon_active.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				if (me._ht_url_icon_active.ggCurrentLogicStateZIndex == 0) {
			me._ht_url_icon_active.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_url_icon_active, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (1 > 0) {
					if (obj == me._ht_url_icon_active) {
						obj.renderOrder = 10000 + 1000*1
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_url_icon_active.userData.renderOrder + level;
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
			me._ht_url_icon_active.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_url_icon_active, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (-10000 > 0) {
					if (obj == me._ht_url_icon_active) {
						obj.renderOrder = 10000 + 1000*-10000
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_url_icon_active.userData.renderOrder + level;
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
		me._ht_url_icon_active.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_url_icon_active']=true;
		}
		me._ht_url_icon_active.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_url_icon_active']=false;
		}
		me._ht_url_icon_active.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.add(me._ht_url_icon_active);
		el = new THREE.Group();
		el.translateX(0);
		el.translateY(0);
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
		el.name = 'ht_url_custom_image';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.150);
		el.userData.z = 0.150;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 5;
		el.userData.renderOrder = 5;
		el.userData.isVisible = function() {
			let vis = me._ht_url_custom_image.visible
			let parentEl = me._ht_url_custom_image.parent;
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
			me._ht_url_custom_image.userData.opacity = v;
			v = v * me._ht_url_custom_image.userData.parentOpacity;
			if (me._ht_url_custom_image.userData.setOpacityInternal) me._ht_url_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_custom_image.children.length; i++) {
				let child = me._ht_url_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_url_custom_image.userData.parentOpacity = v;
			v = v * me._ht_url_custom_image.userData.opacity
			if (me._ht_url_custom_image.userData.setOpacityInternal) me._ht_url_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_url_custom_image.children.length; i++) {
				let child = me._ht_url_custom_image.children[i];
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
		me._ht_url_custom_image = el;
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
			let el = me._ht_url_custom_image;
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
			skin.rectCalcBorderRadiiInnerShape(me._ht_url_custom_image);
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_url_custom_image.userData.ggSubElement) {
				me._ht_url_custom_image.userData.ggSubElement.material.opacity = v
				me._ht_url_custom_image.userData.ggSubElement.visible = (v>0 && me._ht_url_custom_image.userData.visible);
			}
			me._ht_url_custom_image.visible = (v>0 && me._ht_url_custom_image.userData.visible);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		currentWidth = 50;
		currentHeight = 50;
		var img = {};
		img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
		img.geometry.name = 'ht_url_custom_image_imgGeometry';
		loader = new THREE.TextureLoader();
		el.userData.ggSetUrl = function(extUrl) {
			loader.load(extUrl,
				function (texture) {
				texture.colorSpace = player.getVRTextureColorSpace();
				let tmpDepthTest = true;
				if (me._ht_url_custom_image.userData.ggSubElement.material) {
					tmpDepthTest = me._ht_url_custom_image.userData.ggSubElement.material.depthTest;
				}
				var loadedMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, depthTest: tmpDepthTest, depthWrite: tmpDepthTest });
				loadedMaterial.name = 'ht_url_custom_image_subElementMaterial';
				me._ht_url_custom_image.userData.ggSubElement.material = loadedMaterial;
				me._ht_url_custom_image.userData.ggUpdatePosition();
				me._ht_url_custom_image.userData.ggText = extUrl;
				me._ht_url_custom_image.userData.setOpacity(me._ht_url_custom_image.userData.opacity);
			});
		};
		if ((hotspot) && (hotspot.customimage)) {
			var extUrl=hotspot.customimage;
		}
		el.userData.ggSetUrl(extUrl);
		material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true } );
		material.name = 'ht_url_custom_image_subElementMaterial';
		el.userData.ggSubElement = new THREE.Mesh( img.geometry, material );
		el.userData.ggSubElement.name = 'ht_url_custom_image_subElement';
		el.userData.ggSubElement.position.z = el.position.z + 0.005;
		el.add(el.userData.ggSubElement);
		el.userData.clientWidth = 50;
		el.userData.clientHeight = 50;
		el.userData.ggId="ht_url_custom_image";
		me._ht_url_custom_image.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_url_custom_image.ggCurrentLogicStateVisible == 0) {
			me._ht_url_custom_image.visible=((!me._ht_url_custom_image.material && Number(me._ht_url_custom_image.userData.opacity>0)) || (me._ht_url_custom_image.material && Number(me._ht_url_custom_image.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_url_custom_image.userData.visible=true;
				}
				else {
			me._ht_url_custom_image.visible=false;
			player.repaint();
			me._ht_url_custom_image.userData.visible=false;
				}
			}
		}
		me._ht_url_custom_image.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_url_custom_image']=true;
		}
		me._ht_url_custom_image.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_url_custom_image']=false;
		}
		me._ht_url_custom_image.userData.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_custom_image.userData.clientWidth;
			var parentHeight = me._ht_url_custom_image.userData.clientHeight;
			var img = me._ht_url_custom_image.userData.ggSubElement;
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
			img.geometry.name = 'ht_url_custom_image_imgGeometry';
			}
		}
		me._ht_url.add(me._ht_url_custom_image);
		me._ht_url.userData.setOpacity(1.00);
		me.elementMouseOver['ht_url']=false;
		me._ht_url.logicBlock_visible();
		me._ht_url.logicBlock_alpha();
		me._ht_url_tooltip.userData.setOpacity(0.00);
			me._ht_url_tooltip.userData.ggUpdateText(true);
		me._ht_url_tooltip.logicBlock_position();
		me._ht_url_tooltip.logicBlock_alpha();
		me._ht_url_tooltip.logicBlock_zindex();
		me._ht_url_bg.userData.setOpacity(1.00);
		me.elementMouseOver['ht_url_bg']=false;
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.logicBlock_zindex();
		me._ht_url_icon.userData.setOpacity(1.00);
		me.elementMouseOver['ht_url_icon']=false;
		me._ht_url_icon.logicBlock_visible();
		me._ht_url_icon.logicBlock_zindex();
		me._ht_url_icon_active.userData.setOpacity(1.00);
		me.elementMouseOver['ht_url_icon_active']=false;
		me._ht_url_icon_active.logicBlock_visible();
		me._ht_url_icon_active.logicBlock_zindex();
		me._ht_url_custom_image.userData.setOpacity(1.00);
		me.elementMouseOver['ht_url_custom_image']=false;
		me._ht_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
					me._ht_url_tooltip.userData.ggUpdateText();
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_tooltip.logicBlock_zindex();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_bg.logicBlock_zindex();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon.logicBlock_zindex();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_zindex();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
				me._ht_url_tooltip.logicBlock_position();
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_url_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_url.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
			};
			me.__obj = me._ht_url;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
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
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		el.userData=el;
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
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
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
				else {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
			}
		}
		me._ht_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url.style.transition='opacity 500ms ease 0ms';
				if (me._ht_url.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_url.style.opacity == 0.0) { me._ht_url.style.visibility="hidden"; } }, 505);
					me._ht_url.style.opacity=0;
				}
				else {
					me._ht_url.style.visibility=me._ht_url.ggVisible?'inherit':'hidden';
					me._ht_url.style.opacity=1;
				}
			}
		}
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url_popup') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_title.ggUpdateText();
				skin._url_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_iframe.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_iframe.ggUpdateText();
				skin._url_popup_iframe.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_popup', true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._ht_url_tooltip.logicBlock_alpha();
			me._ht_url_bg.logicBlock_zindex();
			me._ht_url_icon.logicBlock_visible();
			me._ht_url_icon.logicBlock_zindex();
			me._ht_url_icon_active.logicBlock_visible();
			me._ht_url_icon_active.logicBlock_zindex();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._ht_url_tooltip.logicBlock_alpha();
			me._ht_url_bg.logicBlock_zindex();
			me._ht_url_icon.logicBlock_visible();
			me._ht_url_icon.logicBlock_zindex();
			me._ht_url_icon_active.logicBlock_visible();
			me._ht_url_icon_active.logicBlock_zindex();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_tooltip=document.createElement('div');
		els=me._ht_url_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_url_tooltip";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='border : 0px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_url_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_url_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_url_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_url_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_url_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_url_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_url_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_url_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_url_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_url_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -40px)';
				}
				else {
					me._ht_url_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_url_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 40px)';
				}
			}
		}
		me._ht_url_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_url_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_url_tooltip.style.visibility=me._ht_url_tooltip.ggVisible?'inherit':'hidden';
					me._ht_url_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_url_tooltip.style.opacity == 0.0) { me._ht_url_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_url_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_url_tooltip.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_url_tooltip.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_url_tooltip.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				me._ht_url_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_url_tooltip.ggCurrentLogicStateZIndex == 0) {
					me._ht_url_tooltip.style.zIndex = 1;
				}
				else {
					me._ht_url_tooltip.style.zIndex = 'auto';
				}
			}
		}
		me._ht_url_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_tooltip);
		el=me._ht_url_bg=document.createElement('div');
		el.ggId="ht_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_bg.style.transition='';
				if (me._ht_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_url_bg.style.visibility="hidden";
					me._ht_url_bg.ggVisible=false;
				}
				else {
					me._ht_url_bg.style.visibility=(Number(me._ht_url_bg.style.opacity)>0||!me._ht_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_url_bg.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_url_bg.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				me._ht_url_bg.style.transition='';
				if (me._ht_url_bg.ggCurrentLogicStateZIndex == 0) {
					me._ht_url_bg.style.zIndex = 1;
				}
				else {
					me._ht_url_bg.style.zIndex = 'auto';
				}
			}
		}
		me._ht_url_bg.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_bg);
		el=me._ht_url_icon=document.createElement('div');
		els=me._ht_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0iIzNjM2MzYyIgZmlsbC1vcGFjaXR5PSIxIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJNMCwwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0xMS45OSwyQzYuNDcsMiwyLDYuNDgsMiwxMnM0LjQ3LDEwLDkuOTksMTBDMTcuNTIsMjIsMjIsMTcuNTIsMjIsMTJTMTcuNTIsMiwxMS45OSwyeiBNMTguOTIsOGgtMi45NSBjLTAuMzItMS4yNS0wLj'+
			'c4LTIuNDUtMS4zOC0zLjU2QzE2LjQzLDUuMDcsMTcuOTYsNi4zNSwxOC45Miw4eiBNMTIsNC4wNGMwLjgzLDEuMiwxLjQ4LDIuNTMsMS45MSwzLjk2aC0zLjgyIEMxMC41Miw2LjU3LDExLjE3LDUuMjQsMTIsNC4wNHogTTQuMjYsMTRDNC4xLDEzLjM2LDQsMTIuNjksNCwxMnMwLjEtMS4zNiwwLjI2LTJoMy4zOGMtMC4wOCwwLjY2LTAuMTQsMS4zMi0wLjE0LDIgczAuMDYsMS4zNCwwLjE0LDJINC4yNnogTTUuMDgsMTZoMi45NWMwLjMyLDEuMjUsMC43OCwyLjQ1LDEuMzgsMy41NkM3LjU3LDE4LjkzLDYuMDQsMTcuNjYsNS4wOCwxNnogTTguMDMsOEg1LjA4IGMwLjk2LTEuNjYsMi40OS0yLjkz'+
			'LDQuMzMtMy41NkM4LjgxLDUuNTUsOC4zNSw2Ljc1LDguMDMsOHogTTEyLDE5Ljk2Yy0wLjgzLTEuMi0xLjQ4LTIuNTMtMS45MS0zLjk2aDMuODIgQzEzLjQ4LDE3LjQzLDEyLjgzLDE4Ljc2LDEyLDE5Ljk2eiBNMTQuMzQsMTRIOS42NmMtMC4wOS0wLjY2LTAuMTYtMS4zMi0wLjE2LTJzMC4wNy0xLjM1LDAuMTYtMmg0LjY4YzAuMDksMC42NSwwLjE2LDEuMzIsMC4xNiwyIFMxNC40MywxMy4zNCwxNC4zNCwxNHogTTE0LjU5LDE5LjU2YzAuNi0xLjExLDEuMDYtMi4zMSwxLjM4LTMuNTZoMi45NUMxNy45NiwxNy42NSwxNi40MywxOC45MywxNC41OSwxOS41NnogTTE2LjM2LDE0IGMwLjA4LTAuNj'+
			'YsMC4xNC0xLjMyLDAuMTQtMnMtMC4wNi0xLjM0LTAuMTQtMmgzLjM4QzE5LjksMTAuNjQsMjAsMTEuMzEsMjAsMTJzLTAuMSwxLjM2LTAuMjYsMkgxNi4zNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_icon.style.transition='';
				if (me._ht_url_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_url_icon.style.visibility="hidden";
					me._ht_url_icon.ggVisible=false;
				}
				else {
					me._ht_url_icon.style.visibility=(Number(me._ht_url_icon.style.opacity)>0||!me._ht_url_icon.style.opacity)?'inherit':'hidden';
					me._ht_url_icon.ggVisible=true;
				}
			}
		}
		me._ht_url_icon.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_url_icon.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_url_icon.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				me._ht_url_icon.style.transition='';
				if (me._ht_url_icon.ggCurrentLogicStateZIndex == 0) {
					me._ht_url_icon.style.zIndex = 1;
				}
				else {
					me._ht_url_icon.style.zIndex = 'auto';
				}
			}
		}
		me._ht_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_icon);
		el=me._ht_url_icon_active=document.createElement('div');
		els=me._ht_url_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJNMCwwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGQ9Ik0xMS45OSwyQzYuNDcsMiwyLDYuNDgsMiwxMnM0LjQ3LDEwLDkuOTksMTBDMTcuNTIsMjIsMjIsMTcuNTIsMjIsMTJTMTcuNTIsMiwxMS45OSwyeiBNMTguOTIsOGgtMi45NSBjLTAuMzItMS4yNS0wLj'+
			'c4LTIuNDUtMS4zOC0zLjU2QzE2LjQzLDUuMDcsMTcuOTYsNi4zNSwxOC45Miw4eiBNMTIsNC4wNGMwLjgzLDEuMiwxLjQ4LDIuNTMsMS45MSwzLjk2aC0zLjgyIEMxMC41Miw2LjU3LDExLjE3LDUuMjQsMTIsNC4wNHogTTQuMjYsMTRDNC4xLDEzLjM2LDQsMTIuNjksNCwxMnMwLjEtMS4zNiwwLjI2LTJoMy4zOGMtMC4wOCwwLjY2LTAuMTQsMS4zMi0wLjE0LDIgczAuMDYsMS4zNCwwLjE0LDJINC4yNnogTTUuMDgsMTZoMi45NWMwLjMyLDEuMjUsMC43OCwyLjQ1LDEuMzgsMy41NkM3LjU3LDE4LjkzLDYuMDQsMTcuNjYsNS4wOCwxNnogTTguMDMsOEg1LjA4IGMwLjk2LTEuNjYsMi40OS0yLjkz'+
			'LDQuMzMtMy41NkM4LjgxLDUuNTUsOC4zNSw2Ljc1LDguMDMsOHogTTEyLDE5Ljk2Yy0wLjgzLTEuMi0xLjQ4LTIuNTMtMS45MS0zLjk2aDMuODIgQzEzLjQ4LDE3LjQzLDEyLjgzLDE4Ljc2LDEyLDE5Ljk2eiBNMTQuMzQsMTRIOS42NmMtMC4wOS0wLjY2LTAuMTYtMS4zMi0wLjE2LTJzMC4wNy0xLjM1LDAuMTYtMmg0LjY4YzAuMDksMC42NSwwLjE2LDEuMzIsMC4xNiwyIFMxNC40MywxMy4zNCwxNC4zNCwxNHogTTE0LjU5LDE5LjU2YzAuNi0xLjExLDEuMDYtMi4zMSwxLjM4LTMuNTZoMi45NUMxNy45NiwxNy42NSwxNi40MywxOC45MywxNC41OSwxOS41NnogTTE2LjM2LDE0IGMwLjA4LTAuNj'+
			'YsMC4xNC0xLjMyLDAuMTQtMnMtMC4wNi0xLjM0LTAuMTQtMmgzLjM4QzE5LjksMTAuNjQsMjAsMTEuMzEsMjAsMTJzLTAuMSwxLjM2LTAuMjYsMkgxNi4zNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_icon_active.style.transition='';
				if (me._ht_url_icon_active.ggCurrentLogicStateVisible == 0) {
					me._ht_url_icon_active.style.visibility=(Number(me._ht_url_icon_active.style.opacity)>0||!me._ht_url_icon_active.style.opacity)?'inherit':'hidden';
					me._ht_url_icon_active.ggVisible=true;
				}
				else {
					me._ht_url_icon_active.style.visibility="hidden";
					me._ht_url_icon_active.ggVisible=false;
				}
			}
		}
		me._ht_url_icon_active.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_url_icon_active.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_url_icon_active.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				me._ht_url_icon_active.style.transition='';
				if (me._ht_url_icon_active.ggCurrentLogicStateZIndex == 0) {
					me._ht_url_icon_active.style.zIndex = 1;
				}
				else {
					me._ht_url_icon_active.style.zIndex = 'auto';
				}
			}
		}
		me._ht_url_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_icon_active);
		el=me._ht_url_custom_image=document.createElement('div');
		els=me._ht_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_url_custom_image.ggAltText));
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_url_custom_image.ggText_untranslated = img;
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_url_custom_image.ggSubElement.src='';
			me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_url_custom_image.ggText != player._(me._ht_url_custom_image.ggText_untranslated)) {
				me._ht_url_custom_image.ggText = player._(me._ht_url_custom_image.ggText_untranslated);
				me._ht_url_custom_image.ggUpdateImage()
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
		el.ggId="ht_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_custom_image.style.transition='';
				if (me._ht_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_custom_image.style.visibility=(Number(me._ht_url_custom_image.style.opacity)>0||!me._ht_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
					me._ht_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_url_custom_image.style.visibility="hidden";
					me._ht_url_custom_image.ggSubElement.src='';
					me._ht_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_custom_image.clientWidth;
			var parentHeight = me._ht_url_custom_image.clientHeight;
			var img = me._ht_url_custom_image__img;
			var aspectRatioDiv = me._ht_url_custom_image.clientWidth / me._ht_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentWidth < me._ht_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentHeight < me._ht_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_url_custom_image.scrollTop=currentHeight / 2 - me._ht_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_url_custom_image);
		me.elementMouseOver['ht_url']=false;
		me._ht_url.logicBlock_visible();
		me._ht_url.logicBlock_alpha();
		me._ht_url_tooltip.logicBlock_position();
		me._ht_url_tooltip.logicBlock_alpha();
		me._ht_url_tooltip.logicBlock_zindex();
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.logicBlock_zindex();
		me._ht_url_icon.logicBlock_visible();
		me._ht_url_icon.logicBlock_zindex();
		me._ht_url_icon_active.logicBlock_visible();
		me._ht_url_icon_active.logicBlock_zindex();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_tooltip.logicBlock_zindex();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_bg.logicBlock_zindex();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon.logicBlock_zindex();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_zindex();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
				me._ht_url_tooltip.logicBlock_position();
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_icon_active.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_url_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_url.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url.logicBlock_alpha();
			};
			me.__div = me._ht_url;
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
		el.userData.x = -4.5;
		el.userData.y = -1;
		el.translateZ(0.150);
		el.userData.z = 0.150;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 5;
		el.userData.renderOrder = 5;
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
		el.visible = false;
		el.userData.visible = false;
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
				((player.getVariableValue('vis_skin') == true))
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
			me._ht_node.visible=((!me._ht_node.material && Number(me._ht_node.userData.opacity>0)) || (me._ht_node.material && Number(me._ht_node.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node.userData.visible=true;
				}
				else {
			me._ht_node.visible=false;
			player.repaint();
			me._ht_node.userData.visible=false;
				}
			}
		}
		me._ht_node.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_node.ggCurrentLogicStateAlpha == 0) {
					me._ht_node.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_node.userData.transitions.length; i++) {
						if (me._ht_node.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node.userData.transitions[i].interval);
							me._ht_node.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node.material ? me._ht_node.material.opacity : me._ht_node.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 500;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node.userData.transitions.splice(me._ht_node.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_node.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_node.userData.transitions.length; i++) {
						if (me._ht_node.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node.userData.transitions[i].interval);
							me._ht_node.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node.material ? me._ht_node.material.opacity : me._ht_node.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 500;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node.userData.transitions.splice(me._ht_node.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_node.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_node_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_node_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_node_tooltip_material';
			el.material = material;
		el.translateX(0);
		el.translateY(-0.35);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 100;
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
		el.name = 'ht_node_tooltip';
		el.userData.x = 0;
		el.userData.y = -0.35;
		el.translateZ(0.030);
		el.userData.z = 0.030;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 1;
		el.userData.renderOrder = 1;
		el.userData.isVisible = function() {
			let vis = me._ht_node_tooltip.visible
			let parentEl = me._ht_node_tooltip.parent;
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
			me._ht_node_tooltip.userData.opacity = v;
			v = v * me._ht_node_tooltip.userData.parentOpacity;
			if (me._ht_node_tooltip.userData.setOpacityInternal) me._ht_node_tooltip.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_tooltip.children.length; i++) {
				let child = me._ht_node_tooltip.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_tooltip.userData.parentOpacity = v;
			v = v * me._ht_node_tooltip.userData.opacity
			if (me._ht_node_tooltip.userData.setOpacityInternal) me._ht_node_tooltip.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_tooltip.children.length; i++) {
				let child = me._ht_node_tooltip.children[i];
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
		me._ht_node_tooltip = el;
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
			let el = me._ht_node_tooltip;
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
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_tooltip);
			if (skin.rectHasRoundedCorners(me._ht_node_tooltip)) {
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
		geometry.name = 'ht_node_tooltip_geometry';
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
				geometry.name = 'ht_node_tooltip_geometry';
			}
			el.geometry = geometry;
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._ht_node_tooltip.material.opacity = v;
			if (me._ht_node_tooltip.userData.hasScrollbar) {
				me._ht_node_tooltip.userData.scrollbar.material.opacity = v;
				me._ht_node_tooltip.userData.scrollbarBg.material.opacity = v;
			}
			if (me._ht_node_tooltip.userData.ggSubElement) {
				me._ht_node_tooltip.userData.ggSubElement.material.opacity = v
				me._ht_node_tooltip.userData.ggSubElement.visible = (v>0 && me._ht_node_tooltip.userData.visible);
			}
			me._ht_node_tooltip.visible = (v>0 && me._ht_node_tooltip.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_node_tooltip.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_tooltip.userData.backgroundColorAlpha = v;
			me._ht_node_tooltip.userData.setOpacity(me._ht_node_tooltip.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.backgroundColor = new THREE.Color(1, 1, 1).convertSRGBToLinear();
		el.userData.textColor = '#ffffff';
		el.userData.textColorAlpha = 1;
		el.userData.cssClasses = ['montserrat', 'shadow'];
		var canvas = document.createElement('canvas');
		canvas.width = 200;
		canvas.height = 40;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._ht_node_tooltip;
			var canv = me._ht_node_tooltip.userData.textCanvas;
			var ctx = me._ht_node_tooltip.userData.textCanvasContext;
			var tmpCanv = me._ht_node_tooltip.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._ht_node_tooltip.userData.scrollPosPercent ? tmpCanv.height * me._ht_node_tooltip.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._ht_node_tooltip.userData.boxWidthCanv / 100.0;
		height = me._ht_node_tooltip.userData.boxHeightCanv / 100.0;
		me._ht_node_tooltip.userData.width = me._ht_node_tooltip.userData.boxWidthCanv;
		me._ht_node_tooltip.userData.height = me._ht_node_tooltip.userData.boxHeightCanv;
		me._ht_node_tooltip.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._ht_node_tooltip, 0, 35);
		me._ht_node_tooltip.position.x = newPos.x;
		me._ht_node_tooltip.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'ht_node_tooltip_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._ht_node_tooltip.material.map) {
				me._ht_node_tooltip.material.map.dispose();
			}
			me._ht_node_tooltip.material.map = textTexture;
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._ht_node_tooltip, 'scrollbar');
			skin.paintTextDivToCanvas(me._ht_node_tooltip, 'box-sizing: border-box; width: auto; height: auto; font-size: 16px; font-weight: 500; color: rgba(255,255,255,1); text-align: center; white-space: pre; padding: 0px; overflow: hidden;' + '; color: ' + me._ht_node_tooltip.userData.textColor + ' !important;', false, true, false);
			me._ht_node_tooltip.userData.hasScrollbar = false;
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
			me._ht_node_tooltip.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_tooltip.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._ht_node_tooltip.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._ht_node_tooltip.userData.textColorAlpha = v;
		}
		el.userData.ggId="ht_node_tooltip";
		me._ht_node_tooltip.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				if (me._ht_node_tooltip.ggCurrentLogicStatePosition == 0) {
					var newPos = skin.getElementVrPosition(me._ht_node_tooltip, 0, -35);
					me._ht_node_tooltip.position.x = newPos.x;
					me._ht_node_tooltip.position.y = newPos.y;
				}
				else {
					var elPos = skin.getElementVrPosition(me._ht_node_tooltip, 0, 35);
					me._ht_node_tooltip.position.x = elPos.x;
					me._ht_node_tooltip.position.y = elPos.y;
				}
			}
		}
		me._ht_node_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_node_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_tooltip.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_node_tooltip.userData.transitions.length; i++) {
						if (me._ht_node_tooltip.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_tooltip.userData.transitions[i].interval);
							me._ht_node_tooltip.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_tooltip.material ? me._ht_node_tooltip.material.opacity : me._ht_node_tooltip.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_tooltip.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_tooltip.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_tooltip.userData.transitions.splice(me._ht_node_tooltip.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_tooltip.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_node_tooltip.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_node_tooltip.userData.transitions.length; i++) {
						if (me._ht_node_tooltip.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_tooltip.userData.transitions[i].interval);
							me._ht_node_tooltip.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_tooltip.material ? me._ht_node_tooltip.material.opacity : me._ht_node_tooltip.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_tooltip.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_tooltip.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_tooltip.userData.transitions.splice(me._ht_node_tooltip.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_tooltip.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_node_tooltip.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_node_tooltip.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				if (me._ht_node_tooltip.ggCurrentLogicStateZIndex == 0) {
			me._ht_node_tooltip.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_node_tooltip, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (1 > 0) {
					if (obj == me._ht_node_tooltip) {
						obj.renderOrder = 10000 + 1000*1
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_node_tooltip.userData.renderOrder + level;
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
			me._ht_node_tooltip.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_node_tooltip, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (-10000 > 0) {
					if (obj == me._ht_node_tooltip) {
						obj.renderOrder = 10000 + 1000*-10000
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_node_tooltip.userData.renderOrder + level;
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
		me._ht_node_tooltip.userData.ggUpdatePosition=function (useTransition) {
				me._ht_node_tooltip.userData.ggUpdateText(true);
		}
		me._ht_node.add(me._ht_node_tooltip);
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._ht_node_lottie.visible = (v>0 && me._ht_node_lottie.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.translateX(0);
		el.translateY(0);
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
		el.name = 'ht_node_lottie';
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
			if (me._ht_node_lottie.material) me._ht_node_lottie.material.opacity = v;
			me._ht_node_lottie.visible = (v>0 && me._ht_node_lottie.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._ht_node_lottie.visible
			let parentEl = me._ht_node_lottie.parent;
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
			me._ht_node_lottie.userData.opacity = v;
			v = v * me._ht_node_lottie.userData.parentOpacity;
			if (me._ht_node_lottie.userData.setOpacityInternal) me._ht_node_lottie.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_lottie.children.length; i++) {
				let child = me._ht_node_lottie.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_lottie.userData.parentOpacity = v;
			v = v * me._ht_node_lottie.userData.opacity
			if (me._ht_node_lottie.userData.setOpacityInternal) me._ht_node_lottie.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_lottie.children.length; i++) {
				let child = me._ht_node_lottie.children[i];
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
		me._ht_node_lottie = el;
		el.userData.ggId="ht_node_lottie";
		me._ht_node_lottie.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_lottie.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != "")) || 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_lottie.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_lottie.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_lottie.ggCurrentLogicStateVisible == 0) {
			me._ht_node_lottie.visible=false;
			player.repaint();
			me._ht_node_lottie.userData.visible=false;
				}
				else {
			me._ht_node_lottie.visible=((!me._ht_node_lottie.material && Number(me._ht_node_lottie.userData.opacity>0)) || (me._ht_node_lottie.material && Number(me._ht_node_lottie.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_lottie.userData.visible=true;
				}
			}
		}
		me._ht_node_lottie.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_lottie']=true;
		}
		me._ht_node_lottie.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_lottie']=false;
		}
		me._ht_node_lottie.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.add(me._ht_node_lottie);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: new THREE.Color(1, 1, 1).convertSRGBToLinear(), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || false) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_node_3d_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
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
		el.name = 'ht_node_3d';
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
			let vis = me._ht_node_3d.visible
			let parentEl = me._ht_node_3d.parent;
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
			me._ht_node_3d.userData.opacity = v;
			v = v * me._ht_node_3d.userData.parentOpacity;
			if (me._ht_node_3d.userData.setOpacityInternal) me._ht_node_3d.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_3d.children.length; i++) {
				let child = me._ht_node_3d.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_3d.userData.parentOpacity = v;
			v = v * me._ht_node_3d.userData.opacity
			if (me._ht_node_3d.userData.setOpacityInternal) me._ht_node_3d.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_3d.children.length; i++) {
				let child = me._ht_node_3d.children[i];
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
		me._ht_node_3d = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 25;
		el.userData.borderRadius.default.topRight = 25;
		el.userData.borderRadius.default.bottomRight = 25;
		el.userData.borderRadius.default.bottomLeft = 25;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_3d;
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
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_3d);
			if (skin.rectHasRoundedCorners(me._ht_node_3d)) {
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
		geometry.name = 'ht_node_3d_geometry';
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
				geometry.name = 'ht_node_3d_geometry';
			}
			el.geometry = geometry;
		}
		el.userData.backgroundColorAlpha = 0.705882;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._ht_node_3d.material.opacity = v * me._ht_node_3d.userData.backgroundColorAlpha;
			if (me._ht_node_3d.userData.ggSubElement) {
				me._ht_node_3d.userData.ggSubElement.material.opacity = v
				me._ht_node_3d.userData.ggSubElement.visible = (v>0 && me._ht_node_3d.userData.visible);
			}
			me._ht_node_3d.visible = (v>0 && me._ht_node_3d.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_node_3d.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_3d.userData.backgroundColorAlpha = v;
			me._ht_node_3d.userData.setOpacity(me._ht_node_3d.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 25, 25, 25, 25);
		el.userData.ggId="ht_node_3d";
		me._ht_node_3d.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == "")) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_3d.ggCurrentLogicStateVisible == 0) {
			me._ht_node_3d.visible=((!me._ht_node_3d.material && Number(me._ht_node_3d.userData.opacity>0)) || (me._ht_node_3d.material && Number(me._ht_node_3d.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_3d.userData.visible=true;
				}
				else {
			me._ht_node_3d.visible=false;
			player.repaint();
			me._ht_node_3d.userData.visible=false;
				}
			}
		}
		me._ht_node_3d.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_node_3d'] == true)) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_node_3d.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_node_3d.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				if (me._ht_node_3d.ggCurrentLogicStateZIndex == 0) {
			me._ht_node_3d.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_node_3d, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (1 > 0) {
					if (obj == me._ht_node_3d) {
						obj.renderOrder = 10000 + 1000*1
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_node_3d.userData.renderOrder + level;
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
			me._ht_node_3d.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_node_3d, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (-10000 > 0) {
					if (obj == me._ht_node_3d) {
						obj.renderOrder = 10000 + 1000*-10000
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_node_3d.userData.renderOrder + level;
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
		me._ht_node_3d.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_3d']=true;
			me._ht_node_3d_icon.logicBlock_visible();
			me._ht_node_3d_icon_over.logicBlock_visible();
			me._ht_node_3d.logicBlock_zindex();
		}
		me._ht_node_3d.userData.ontouchend=function (e) {
			me._ht_node_3d.logicBlock_zindex();
		}
		me._ht_node_3d.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_3d']=false;
			me._ht_node_3d_icon.logicBlock_visible();
			me._ht_node_3d_icon_over.logicBlock_visible();
			me._ht_node_3d.logicBlock_zindex();
		}
		me._ht_node_3d.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
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
		el.name = 'ht_node_3d_icon';
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
			let vis = me._ht_node_3d_icon.visible
			let parentEl = me._ht_node_3d_icon.parent;
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
			me._ht_node_3d_icon.userData.opacity = v;
			v = v * me._ht_node_3d_icon.userData.parentOpacity;
			if (me._ht_node_3d_icon.userData.setOpacityInternal) me._ht_node_3d_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_3d_icon.children.length; i++) {
				let child = me._ht_node_3d_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_3d_icon.userData.parentOpacity = v;
			v = v * me._ht_node_3d_icon.userData.opacity
			if (me._ht_node_3d_icon.userData.setOpacityInternal) me._ht_node_3d_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_3d_icon.children.length; i++) {
				let child = me._ht_node_3d_icon.children[i];
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
		me._ht_node_3d_icon = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_3d_icon.userData.materialNormal) me._ht_node_3d_icon.userData.materialNormal.opacity = v;
			if (me._ht_node_3d_icon.userData.materialOver) me._ht_node_3d_icon.userData.materialOver.opacity = v;
			if (me._ht_node_3d_icon.userData.materialActive) me._ht_node_3d_icon.userData.materialActive.opacity = v;
			me._ht_node_3d_icon.visible = (v>0 && me._ht_node_3d_icon.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAG4klEQVR4nO2dzW9VRRTAfyABEdoGIqFJKUtYWHRnJJr4Wg0SMdFEkMSNAl24BPkDICREFrCBlWsgEtgIS/koEIHEhWw0fGxIRE0JkNA+KdAE62Lus4+XvnfOzJ07d+5jfsnZ9PXOOTNz7525Z86cgUQikUgkEolEIpEIy7yyDbBkFbAWWAOsAHqaBKDeJPeB28BN4K/gljoSc4csAd4DhoH3gTeYbXhb6sDvwCVgDPgZeOzBxq6nFxjFNNo0MFOQTGc6RjOdiRaGgRPAE4rrhHYylemuFV3JKvAJcI3wndBOrgKbCq1xpAwD1ym/A9rJ9czGrqcfOE75Da6VY8DKQloiAnYAjyi/kW3lUWZ7EEJMe5cC3wNfeizzCXAXuAdMAM+yvy8C+jB39SCw2K'+
	'PO48A3wD8eywzOOsyHWZ47dBq4DOzDTAIGLfQPZtfsy8rIO5W+CQxZtkE0jACTuFX8OXAe2Ia5433Rl5V5IdPhYtsEFRzwtwBPsa/sJPAdxkVSNIOZLpeb5imwOYCNXhjF/u6rA3uAZSXYuyzTXbewt/EUj5ZgrxVbsO+Mk8BAGca2MICxxbZTon1SRjCzHW1lxoGNpVjamY0Y22xeX9GNKeuwexefx3wkxko/ZuC3GfuimX0txW5qexCYX4qldswHDqGv101MW5SO1hXyL/BtSTbmYTfGdk0dj5Vk4//sQN8ZX5Vkow++Rt8pwdwsrfSj901V8cloZTe6uj6iJIek9lV1sAzjCkI7pji/ulydi8OYWYjEGPAh5nH3xWvABmA9JtihH7P+DmadfBwT3HAN+AmzIuiL+cA5dNPcYeCiR90d0SwujeNvatuL8UGdxjSw'+
	'duYzlV2zDfcAiVb60X2nXPekT2STwpgZ/Hz0LQR2YUJ6tJ3QTu4DO7My87JRqfNjD7pErioMOelBz1bgjkKXrdwBvvBg3ymFrise9HSkpjCiTj7f1ALgiEJPXjmS6XJlAJ1DspZDh8gJhQF7cpS/HDNoFt0ZDTlHPg/zXoWOH3KU35E+5LipCdwruJz8q4suciOHzcuQfXhTFBSMNyoonsEs+LiwgLBPRqucxf31dUBRfiFf72OC0ue4r/SFGDMkOexo+yCyW2XMsey2LEEOEDjvWPZWodyQstWxDpKrfprZj1cvfCQonMF8fNmykGKmtq5yBxNKZMt2RdkbHMpti/SenMYtOmSnUG4ZssuhHn3IbxDX8XVOpIDoyw5l9uLnC9y3PMTt5roslHtVU4h25U5anryoLKeZz4HXHa4rmuW4BS5cFH5XLfFqOmQV8tLkLx'+
	'plLXzmcE0oPnW4RmqDHjxF13yA/JjbhHeCcaHbeG1Dy1Rmow2rFeWOSIVonpA1wu+NwGcbNuA3ENo3i7GfFd3FhAR1Yq1UiKZDVigMsWW9wzWhsbVxBvhD+B9xzNR0iLSwc09RRivSUxcDLjZKbSEukvnokAlFGa3EHCTXwMVGqS2CdMgz4fe58OpGKAgXG6W2EL2+VYggfKnQdEhd+N3F91OFLAouNkptMSkV4KNDXNwM4w7XhMbFRqktpLb00iEuUXq3Ha4JjYuNUlt46ZD7wu+2X+lgnJWxY2vjPMzXeiceONryAsl1oiOY6+SW4n/eUvxPM1OYdexYOYd9COqbiv8R21LTIX8ib5Z/W1FOKz86XBOK0w7XSG1Qx2MitSIWqHqIc4HqARVYoLok/P4O9pWoA/strwnBfuzdQX2YNuiE1IZWvExBDi7B2MGDHF6W'+
	'MCDXIOzgYUCQAuXaUUqgHHR/KOkrjraXFkraixxsPUm+wOUUbG1Jt21HOEuFtyNAuA07hxV68sphumDDDqQtbQ2i2NIGYTd9LsIkHXio1NlJHmLidrtu0yeE3xbdh5mpnMF+W/SZ7FpfqQK126J/dSk8JQ6wI9rEAZBSa3SSUrICpeQzc0tpyWcgpWeaS0pLz9TgGPpOqeKTYpPA7GhJNr6AbYq/Q1QjQM82xd8NIorIHMIuCeYF4o7vtU2COUFESTAbjGCXzTqliQ3AZuwTKZ8ijkTKq9C5Q5rlOWavZNRUMdX4Xro01XiDzbgn4z9AuGT8B3BPxh/9k9HKMPmOq7iACR7wfVzFdoxLRzuVnWsAj3bMkBjC/4Euq9H54BqxtpU60KWqRx49xWyw7HTk0WrgVY86u+LIo2bSoWARshK9qyUGOUoXH5vXTI34D5asFV'+
	'T3qNmEbo0+lFwh4LJrzNQw4TJlbOKZynTXCq5jJenFDKBjhDm+eweRHd8d+wH37zJ7wP0Q+Q64/43ZA+6vEOnW7Jg7ZC4GMBl11mISufRk0rjLJzGNX8dsvLmF+Zj7O7iliUQikUgkEolEIlER/gPwCD7wxPugjwAAAABJRU5ErkJggg==');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_node_3d_icon_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_3d_icon;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_node_3d_icon_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_node_3d_icon";
		me._ht_node_3d_icon.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_3d_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_3d'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_3d_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_3d_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_3d_icon.ggCurrentLogicStateVisible == 0) {
			me._ht_node_3d_icon.visible=false;
			player.repaint();
			me._ht_node_3d_icon.userData.visible=false;
				}
				else {
			me._ht_node_3d_icon.visible=((!me._ht_node_3d_icon.material && Number(me._ht_node_3d_icon.userData.opacity>0)) || (me._ht_node_3d_icon.material && Number(me._ht_node_3d_icon.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_3d_icon.userData.visible=true;
				}
			}
		}
		me._ht_node_3d_icon.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_3d_icon']=true;
		}
		me._ht_node_3d_icon.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_3d_icon']=false;
		}
		me._ht_node_3d_icon.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_3d.add(me._ht_node_3d_icon);
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
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
		el.name = 'ht_node_3d_icon_over';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.150);
		el.userData.z = 0.150;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 5;
		el.userData.renderOrder = 5;
		el.userData.isVisible = function() {
			let vis = me._ht_node_3d_icon_over.visible
			let parentEl = me._ht_node_3d_icon_over.parent;
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
			me._ht_node_3d_icon_over.userData.opacity = v;
			v = v * me._ht_node_3d_icon_over.userData.parentOpacity;
			if (me._ht_node_3d_icon_over.userData.setOpacityInternal) me._ht_node_3d_icon_over.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_3d_icon_over.children.length; i++) {
				let child = me._ht_node_3d_icon_over.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_3d_icon_over.userData.parentOpacity = v;
			v = v * me._ht_node_3d_icon_over.userData.opacity
			if (me._ht_node_3d_icon_over.userData.setOpacityInternal) me._ht_node_3d_icon_over.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_3d_icon_over.children.length; i++) {
				let child = me._ht_node_3d_icon_over.children[i];
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
		me._ht_node_3d_icon_over = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_3d_icon_over.userData.materialNormal) me._ht_node_3d_icon_over.userData.materialNormal.opacity = v;
			if (me._ht_node_3d_icon_over.userData.materialOver) me._ht_node_3d_icon_over.userData.materialOver.opacity = v;
			if (me._ht_node_3d_icon_over.userData.materialActive) me._ht_node_3d_icon_over.userData.materialActive.opacity = v;
			me._ht_node_3d_icon_over.visible = (v>0 && me._ht_node_3d_icon_over.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAIB0lEQVR4nO2dz48cxRXHv2VhHMexV0Ygr2QWcYJIMXBD5oeUdUSQFSIlik0s5ZKY9SECKQnkD4ALig9wMYqlnLEFspMo5kjWuwbFdsQhFogImwsoTiIjx8K7E9ZrI/PJoZp4NLBTr6prunuW+kh72e569e33pnumq169kgqFQqFQKBQKhUKhWVzbAmIAbpd0t6S7JN0maWPfnyT1+v4uSnpf0lnn3L+aV5tGZwMCbJD0sKQdkr4t6Vu64fhYepL+LukNSfOS/uKc+ySHzlUNsAnYB8wD1xgd16o+9gGb2r7uzgHsAF4FrowwCCuxVPU93bYfWgf4PnC6hSCsxCngsbb90jj4O+JMy84fxhlgR9t+GjnAJHC4ZWfHcAjY0rbfRgIwA1xu2cEpXAZmmv'+
	'LTyH/2At+Q9DtJP8lo9oqk85I+krQg6Wr1/3WSJiRtkTQlaX3GPg9L+rlz7r8ZbX6BkQYEuEfSUfmXuVQ+lfRXSSckvSXpbefceWP/U5Luk3S/pGlJ2yWtraHlnKTdzrl3a9hoB+A7wGLiY+I6cBzYC0xk1DRR2Zyr+khhgXH7wgceB5YTLnYR+A1+iGTUGqeqvlI+NMvA7lFrzAL+7Tf209cDngU2t6B3c9V3L1LzdWBf03qjwN8ZscE4AmztgPatlZbYoHTzTsF/Z1yNuJgLwM62dQ8C7Ky0WVmma98pwD3EPYuPA5Nt614J/AvsXMT1LALb2tYtyb9nAGcjxL8ArGlbdwhgDfBixHWdxb9ztS7cOhTyGfBM23pjAX5dabdwqG2xMxHB+GmrYmsA/CwiKI0NswyKnMQ+NjV2d8Yg+DvFwmXaGJDE/qh6oXFxIwL7'+
	'd0ryoytpLAv/M2/OcOq8pEecc5+l9LNC31+X9KikB+STHSYlbagOfyLpgnxyw2lJrzvnljL2vUbSrPw8f4gdzrkTufoeCrbJpQtk+mmLn2vfCxzDT7laWara7AVSEyQGtUxie085k6M/i6DHjM6o/dIH3Aw8DVyMCMJKXAR+BdycQddOY5/fq9uXRcwpg5AjGfrZA3yQ5PrhfAD8OIO+o4a+TtbtJyRi2iCiR42xKeAm4KVkd9t5Cbiphs6t2AYkp1P7sIh41SDg2Rr2bwFm030czSw1RpiB5wx9vJJqP9T5BOG8qYXUC8QHI2YIJhfv1dC8mfAY3hIRyXgxY0qPS/pa4JyDzrmPI2xK8o8pSUdUb6o3lW9KOkLC46u61oOB09bL+y4v+NTLYVwncaaPZr4zQhxI1D5FeFhlPsX2sE43EM61PZ5oe08GZ+ZiT+I1hI'+
	'bqr+GTx4NYH1kPK5ytET1cgH8n2B/bboTsB9YltAtd+1pJD1kMWQMSGir4VNIfjbb6eVLSnQntRsWd8ppi+YO8D4aRb1aRcEL0mwk2N5HnDTw3l0hIPQLeDNg9ZbFjvUNC05MnjHb62SXp1oR2o+YWSSmJCycCx01TvMGA4H85haYm37J0NsAPE9o0xQ8S2oR8sBHDCIblDrG8G7xtOOf/4IfQvxvTpmEeqTTG8I7hnKAvLQG5K3D8ijXXto9HlTcROjfr5TXGcF7ScuCcLAG5zSAklgcS2jRNlEbnHJL+ETgt+J1pCUhoYucjg41BQnddF0jRGPJFcJIsR0AWDDYG6WySXB8pGkO+aCQgVwPHvwzTMELLpGgM+SI46tv5DMKvGpaA9ALHU8Z+xqGKQorGkC8WQwZyBCRlhdOFhDZNk6Ix5IuQL7MEJCVL7/2ENk2T'+
	'ojHkiywBuRg4PmWwMcjphDZNE6URcJLuCJz2n5AdS0BCn5T1+NWuMbwuv7S5q1yR1xjDlMJT3OdCRiwBCRqRX3pspkrv/HNMm4aZTUhBvddwTv2AOOf+KSm0WP5+g5hB/pTQpimOJbQJ+aBnKaRmfQ8JLZSfNtrp5/cyPFNb4JK8tlimA8dNxQasAXkjcHx77Cybc64n6fmYNg3xvHMuajiouvbtgdNCPpRkD0gojWWtpB8ZbfVzUNKHCe1GxYeSfpvQbpfCSSD5UoH46qQBJSVhkzENKKbT+UCnJVFuZcx3R8zg4mGDraci7PXztKSkOywTs5WGFJ5SeCVa/tW5+LSdULL1IvUSl0uytfVE59yiwr/PN0r6hdXmgP2PJT2oZu+UWUkPpiSIV/xS4fmiY5Xv8kNzC3YO1PnIGznAuC/YqYSUJW3qyJK2SkiTiz7XAc'+
	'/g0zvrcgm/gHR1LfqsBDW9LHoCX8bjNeKXRb9Wtc1SKhD7sui/pdgvhQPi+u5m4QCplNYI0HxVIErxmZVop/hMJbKUZ/oi7ZRn6hN7KCIoY3enEFfA7OW29aaU+HuR1Vni7z1yj+imAmwjrgjmHKurCOYCXSmC+Tn4MrEx1axLmdhRA+wmvpDyUbpRSPl2bMMh/VwHdrWtfSiMZ6nx51iNpcY/B3+npBbj309zxfj3k16Mv9t3xiD4fabqbFcxBzxB/u0qnsBPR1t/yg4y0u0qRr2hyzb5HKecG7q8I+l8taZvWN9OPr3zXo3Rhi7juuXRsvwCy2FbHt2hcK5tDI1sedQYlE3BugewBftQSxd4mdW6bV4/+Ln5rm8sOd22nxoHPx1smaNvipM0Ne3aZfB3zCvETc/mYqnqe7ptP3QOfDLeDM1t3z1Dx7bv7voG9w/p'+
	'xgb321Rvg/t3dWOD+5Nd3eC+swH5MvCDkHdXf7fKB2ijblRIWJR3fk9+MdA5SWedc/9uXm2hUCgUCoVCoVAojAf/A+hqxyTqM3iLAAAAAElFTkSuQmCC');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_node_3d_icon_over_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_3d_icon_over;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_node_3d_icon_over_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_node_3d_icon_over";
		me._ht_node_3d_icon_over.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_3d_icon_over.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_3d'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_3d_icon_over.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_3d_icon_over.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_3d_icon_over.ggCurrentLogicStateVisible == 0) {
			me._ht_node_3d_icon_over.visible=((!me._ht_node_3d_icon_over.material && Number(me._ht_node_3d_icon_over.userData.opacity>0)) || (me._ht_node_3d_icon_over.material && Number(me._ht_node_3d_icon_over.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_3d_icon_over.userData.visible=true;
				}
				else {
			me._ht_node_3d_icon_over.visible=false;
			player.repaint();
			me._ht_node_3d_icon_over.userData.visible=false;
				}
			}
		}
		me._ht_node_3d_icon_over.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_3d_icon_over']=true;
		}
		me._ht_node_3d_icon_over.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_3d_icon_over']=false;
		}
		me._ht_node_3d_icon_over.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_3d.add(me._ht_node_3d_icon_over);
		me._ht_node.add(me._ht_node_3d);
		el = new THREE.Group();
		el.translateX(0);
		el.translateY(0);
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
		el.name = 'ht_node_custom_image';
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
			let vis = me._ht_node_custom_image.visible
			let parentEl = me._ht_node_custom_image.parent;
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
			me._ht_node_custom_image.userData.opacity = v;
			v = v * me._ht_node_custom_image.userData.parentOpacity;
			if (me._ht_node_custom_image.userData.setOpacityInternal) me._ht_node_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_custom_image.children.length; i++) {
				let child = me._ht_node_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_custom_image.userData.parentOpacity = v;
			v = v * me._ht_node_custom_image.userData.opacity
			if (me._ht_node_custom_image.userData.setOpacityInternal) me._ht_node_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_custom_image.children.length; i++) {
				let child = me._ht_node_custom_image.children[i];
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
		me._ht_node_custom_image = el;
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
			let el = me._ht_node_custom_image;
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
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_custom_image);
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_custom_image.userData.ggSubElement) {
				me._ht_node_custom_image.userData.ggSubElement.material.opacity = v
				me._ht_node_custom_image.userData.ggSubElement.visible = (v>0 && me._ht_node_custom_image.userData.visible);
			}
			me._ht_node_custom_image.visible = (v>0 && me._ht_node_custom_image.userData.visible);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		currentWidth = 50;
		currentHeight = 50;
		var img = {};
		img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
		img.geometry.name = 'ht_node_custom_image_imgGeometry';
		loader = new THREE.TextureLoader();
		el.userData.ggSetUrl = function(extUrl) {
			loader.load(extUrl,
				function (texture) {
				texture.colorSpace = player.getVRTextureColorSpace();
				let tmpDepthTest = true;
				if (me._ht_node_custom_image.userData.ggSubElement.material) {
					tmpDepthTest = me._ht_node_custom_image.userData.ggSubElement.material.depthTest;
				}
				var loadedMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, depthTest: tmpDepthTest, depthWrite: tmpDepthTest });
				loadedMaterial.name = 'ht_node_custom_image_subElementMaterial';
				me._ht_node_custom_image.userData.ggSubElement.material = loadedMaterial;
				me._ht_node_custom_image.userData.ggUpdatePosition();
				me._ht_node_custom_image.userData.ggText = extUrl;
				me._ht_node_custom_image.userData.setOpacity(me._ht_node_custom_image.userData.opacity);
			});
		};
		if ((hotspot) && (hotspot.customimage)) {
			var extUrl=hotspot.customimage;
		}
		el.userData.ggSetUrl(extUrl);
		material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true } );
		material.name = 'ht_node_custom_image_subElementMaterial';
		el.userData.ggSubElement = new THREE.Mesh( img.geometry, material );
		el.userData.ggSubElement.name = 'ht_node_custom_image_subElement';
		el.userData.ggSubElement.position.z = el.position.z + 0.005;
		el.add(el.userData.ggSubElement);
		el.userData.clientWidth = 50;
		el.userData.clientHeight = 50;
		el.userData.ggId="ht_node_custom_image";
		me._ht_node_custom_image.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
			me._ht_node_custom_image.visible=((!me._ht_node_custom_image.material && Number(me._ht_node_custom_image.userData.opacity>0)) || (me._ht_node_custom_image.material && Number(me._ht_node_custom_image.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_custom_image.userData.visible=true;
				}
				else {
			me._ht_node_custom_image.visible=false;
			player.repaint();
			me._ht_node_custom_image.userData.visible=false;
				}
			}
		}
		me._ht_node_custom_image.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_custom_image']=true;
		}
		me._ht_node_custom_image.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_custom_image']=false;
		}
		me._ht_node_custom_image.userData.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.userData.clientWidth;
			var parentHeight = me._ht_node_custom_image.userData.clientHeight;
			var img = me._ht_node_custom_image.userData.ggSubElement;
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
			img.geometry.name = 'ht_node_custom_image_imgGeometry';
			}
		}
		me._ht_node.add(me._ht_node_custom_image);
		me._ht_node.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node']=false;
		me._ht_node.logicBlock_visible();
		me._ht_node.logicBlock_alpha();
		me._ht_node_tooltip.userData.setOpacity(0.00);
			me._ht_node_tooltip.userData.ggUpdateText(true);
		me._ht_node_tooltip.logicBlock_position();
		me._ht_node_tooltip.logicBlock_alpha();
		me._ht_node_tooltip.logicBlock_zindex();
		me.elementMouseOver['ht_node_lottie']=false;
		me._ht_node_lottie.logicBlock_visible();
		me._ht_node_3d.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_3d']=false;
		me._ht_node_3d.logicBlock_visible();
		me._ht_node_3d.logicBlock_zindex();
		me._ht_node_3d_icon.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_3d_icon']=false;
		me._ht_node_3d_icon.logicBlock_visible();
		me._ht_node_3d_icon_over.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_3d_icon_over']=false;
		me._ht_node_3d_icon_over.logicBlock_visible();
		me._ht_node_custom_image.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_custom_image']=false;
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
					me._ht_node_tooltip.userData.ggUpdateText();
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_tooltip.logicBlock_zindex();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_3d.logicBlock_zindex();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
				me._ht_node_tooltip.logicBlock_position();
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_node_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_node.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
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
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		el.userData=el;
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
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
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
				else {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
			}
		}
		me._ht_node.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_hotspots') == false)) || 
				((player.getVariableValue('vis_skin') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node.style.transition='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_node.style.opacity == 0.0) { me._ht_node.style.visibility="hidden"; } }, 505);
					me._ht_node.style.opacity=0;
				}
				else {
					me._ht_node.style.visibility=me._ht_node.ggVisible?'inherit':'hidden';
					me._ht_node.style.opacity=1;
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_node_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_node_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_tooltip=document.createElement('div');
		els=me._ht_node_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_tooltip";
		el.ggDx=0;
		el.ggDy=35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 35px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='border : 0px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_tooltip.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_tooltip.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_node_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_node_tooltip.ggCurrentLogicStatePosition == 0) {
					me._ht_node_tooltip.style.left = 'calc(50% - (0px / 2))';
					me._ht_node_tooltip.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -35px)';
				}
				else {
					me._ht_node_tooltip.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_node_tooltip.style.top='calc(50% - ((0px + 0px) / 2) + 35px)';
				}
			}
		}
		me._ht_node_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_node_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_tooltip.style.visibility=me._ht_node_tooltip.ggVisible?'inherit':'hidden';
					me._ht_node_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_tooltip.style.opacity == 0.0) { me._ht_node_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_node_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_node_tooltip.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_node_tooltip.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				me._ht_node_tooltip.style.transition='left 0s, top 0s, opacity 200ms ease 0ms';
				if (me._ht_node_tooltip.ggCurrentLogicStateZIndex == 0) {
					me._ht_node_tooltip.style.zIndex = 1;
				}
				else {
					me._ht_node_tooltip.style.zIndex = 'auto';
				}
			}
		}
		me._ht_node_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_tooltip);
		el=me._ht_node_lottie=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/ht_node_lottie.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="ht_node_lottie";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_lottie.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_lottie.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != "")) || 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_lottie.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_lottie.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_lottie.style.transition='';
				if (me._ht_node_lottie.ggCurrentLogicStateVisible == 0) {
					me._ht_node_lottie.style.visibility="hidden";
					me._ht_node_lottie.ggVisible=false;
				}
				else {
					me._ht_node_lottie.style.visibility=(Number(me._ht_node_lottie.style.opacity)>0||!me._ht_node_lottie.style.opacity)?'inherit':'hidden';
					me._ht_node_lottie.ggVisible=true;
				}
			}
		}
		me._ht_node_lottie.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_lottie);
		el=me._ht_node_3d=document.createElement('div');
		el.ggId="ht_node_3d";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == "")) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_3d.style.transition='';
				if (me._ht_node_3d.ggCurrentLogicStateVisible == 0) {
					me._ht_node_3d.style.visibility=(Number(me._ht_node_3d.style.opacity)>0||!me._ht_node_3d.style.opacity)?'inherit':'hidden';
					me._ht_node_3d.ggVisible=true;
				}
				else {
					me._ht_node_3d.style.visibility="hidden";
					me._ht_node_3d.ggVisible=false;
				}
			}
		}
		me._ht_node_3d.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_node_3d'] == true)) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_node_3d.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_node_3d.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				me._ht_node_3d.style.transition='';
				if (me._ht_node_3d.ggCurrentLogicStateZIndex == 0) {
					me._ht_node_3d.style.zIndex = 1;
				}
				else {
					me._ht_node_3d.style.zIndex = 'auto';
				}
			}
		}
		me._ht_node_3d.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_3d']=true;
			me._ht_node_3d_icon.logicBlock_visible();
			me._ht_node_3d_icon_over.logicBlock_visible();
			me._ht_node_3d.logicBlock_zindex();
		}
		me._ht_node_3d.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_3d']=false;
			me._ht_node_3d_icon.logicBlock_visible();
			me._ht_node_3d_icon_over.logicBlock_visible();
			me._ht_node_3d.logicBlock_zindex();
		}
		me._ht_node_3d.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_3d_icon=document.createElement('div');
		els=me._ht_node_3d_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0xMiA3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNXptMC01QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHoiLz4KPC9zdmc+Cg==';
		me._ht_node_3d_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_3d_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_3d_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_3d_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_3d'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_3d_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_3d_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_3d_icon.style.transition='';
				if (me._ht_node_3d_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_node_3d_icon.style.visibility="hidden";
					me._ht_node_3d_icon.ggVisible=false;
				}
				else {
					me._ht_node_3d_icon.style.visibility=(Number(me._ht_node_3d_icon.style.opacity)>0||!me._ht_node_3d_icon.style.opacity)?'inherit':'hidden';
					me._ht_node_3d_icon.ggVisible=true;
				}
			}
		}
		me._ht_node_3d_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_3d.appendChild(me._ht_node_3d_icon);
		el=me._ht_node_3d_icon_over=document.createElement('div');
		els=me._ht_node_3d_icon_over__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0xMiA3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNXptMC01QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._ht_node_3d_icon_over__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_3d_icon_over";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_3d_icon_over.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_3d_icon_over.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_3d'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_3d_icon_over.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_3d_icon_over.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_3d_icon_over.style.transition='';
				if (me._ht_node_3d_icon_over.ggCurrentLogicStateVisible == 0) {
					me._ht_node_3d_icon_over.style.visibility=(Number(me._ht_node_3d_icon_over.style.opacity)>0||!me._ht_node_3d_icon_over.style.opacity)?'inherit':'hidden';
					me._ht_node_3d_icon_over.ggVisible=true;
				}
				else {
					me._ht_node_3d_icon_over.style.visibility="hidden";
					me._ht_node_3d_icon_over.ggVisible=false;
				}
			}
		}
		me._ht_node_3d_icon_over.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_3d.appendChild(me._ht_node_3d_icon_over);
		me._ht_node.appendChild(me._ht_node_3d);
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
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
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image.scrollTop=currentHeight / 2 - me._ht_node_custom_image.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_custom_image);
		me.elementMouseOver['ht_node']=false;
		me._ht_node.logicBlock_visible();
		me._ht_node.logicBlock_alpha();
		me._ht_node_tooltip.logicBlock_position();
		me._ht_node_tooltip.logicBlock_alpha();
		me._ht_node_tooltip.logicBlock_zindex();
		me._ht_node_lottie.logicBlock_visible();
		me.elementMouseOver['ht_node_3d']=false;
		me._ht_node_3d.logicBlock_visible();
		me._ht_node_3d.logicBlock_zindex();
		me._ht_node_3d_icon.logicBlock_visible();
		me._ht_node_3d_icon_over.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_tooltip.logicBlock_zindex();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_3d.logicBlock_zindex();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
				me._ht_node_tooltip.logicBlock_position();
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_node_tooltip.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_node.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				hotspotTemplates['SkinHotspotClass_ht_node'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_node'].push(hsinst);
		} else
		{
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url')) {
				hotspotTemplates['SkinHotspotClass_ht_url'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_url'].push(hsinst);
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
			if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node__3d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				hotspotTemplates['SkinHotspotClass_ht_node__3d'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_node__3d'].push(hsinst);
		} else
		{
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url__3d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_url__3d')) {
				hotspotTemplates['SkinHotspotClass_ht_url__3d'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_url__3d'].push(hsinst);
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
		me._menu_toggle_timer.ggUpdateConditionTimer();
		if (me._menu_toggle_timer.ggLastIsActive!=me._menu_toggle_timer.ggIsActive()) {
			me._menu_toggle_timer.ggLastIsActive=me._menu_toggle_timer.ggIsActive();
			if (me._menu_toggle_timer.ggLastIsActive) {
			} else {
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("1")))
					)
				) {
					me._close_to_menu_anim.style.transition='none';
					me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
					me._close_to_menu_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("1")))
					)
				) {
					me._menu_to_close_anim.style.transition='none';
					me._menu_to_close_anim.style.visibility='hidden';
					me._menu_to_close_anim.ggVisible=false;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("2")))
					)
				) {
					me._menu_to_close_anim.style.transition='none';
					me._menu_to_close_anim.style.visibility=(Number(me._menu_to_close_anim.style.opacity)>0||!me._menu_to_close_anim.style.opacity)?'inherit':'hidden';
					me._menu_to_close_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("2")))
					)
				) {
					me._close_to_menu_anim.style.transition='none';
					me._close_to_menu_anim.style.visibility='hidden';
					me._close_to_menu_anim.ggVisible=false;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("3")))
					)
				) {
					me._back_to_close_anim.style.transition='none';
					me._back_to_close_anim.style.visibility=(Number(me._back_to_close_anim.style.opacity)>0||!me._back_to_close_anim.style.opacity)?'inherit':'hidden';
					me._back_to_close_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("3")))
					)
				) {
					me._close_to_back_anim.style.transition='none';
					me._close_to_back_anim.style.visibility='hidden';
					me._close_to_back_anim.ggVisible=false;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("4")))
					)
				) {
					me._close_to_menu_anim.style.transition='none';
					me._close_to_menu_anim.style.visibility=(Number(me._close_to_menu_anim.style.opacity)>0||!me._close_to_menu_anim.style.opacity)?'inherit':'hidden';
					me._close_to_menu_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("4")))
					)
				) {
					me._back_to_close_anim.style.transition='none';
					me._back_to_close_anim.style.visibility='hidden';
					me._back_to_close_anim.ggVisible=false;
				}
			}
		}
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
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #aaa; } .ggdefaulthotspot { font-family: "Montserrat", sans-serif; font-size: 16px; -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); will-change: transform; } .shadow_title { -webkit-filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); will-change: transform; } .montserrat { font-family: "Montserrat", sans-serif; } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/montserrat-latin-600.woff2") format("woff2"); }';
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
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		skin.ggYoutubeApiLoaded = true;
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}