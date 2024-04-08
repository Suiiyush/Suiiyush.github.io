"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[136],{9936:function(e,t,n){var r=n(9703),o=n(3827),i=n(4090),a=n(3343),l=n(5361),s=(0,i.forwardRef)(function(e,t){var n=e.overrides,i=e.children,s=(0,r._T)(e,["overrides","children"]),u=(0,r.CR)((0,a.Q)((void 0===n?{}:n).Root,l.PV),2),c=u[0],d=u[1];return(0,o.jsx)(c,(0,r.pi)({"data-spaceweb":"banner-item",role:"listitem"},d,s,{ref:t},{children:i}),void 0)});s.displayName="BannerItem",t.Z=(0,i.memo)(s)},6711:function(e,t,n){n.d(t,{Z:function(){return $}});var r=n(9703),o=n(3827),i=n(4090),a=n(3343),l=n(5361),s=n(4102),u=n(8956),c=(0,u.Z)("svg","inline-block fill-current",function(e,t){var n=(0,e.px2rem)(t.$size);return{height:n,width:n}}),d=(0,i.forwardRef)(function(e,t){var n=e.children,i=e.intent,a=e.title,l=e.size,s=e.className,u=(0,r._T)(e,["children","intent","title","size","className"]);return(0,o.jsxs)(c,(0,r.pi)({className:["ai"===i?{fill:"url(#aiGradientID)"}:"",s],"data-spaceweb":"icon",ref:t},{$size:l},u,{children:[a?(0,o.jsx)("title",{children:a},void 0):null,n]}),void 0)});function f(e){var t=(0,s.Z)();return t.theme,t.isRTL,(0,o.jsxs)(d,(0,r.pi)({viewBox:"0 0 14 14","data-icon-name":"ErrorClr"},e,{children:[(0,o.jsx)("path",{fill:"#FF6060",d:"M6.304 1.636c.385-.63 1.008-.63 1.391-.002l2.147 3.52 3.987 6.541c.385.63.097 1.142-.64 1.142H.81c-.737 0-1.024-.51-.639-1.142l6.133-10.06z"},void 0),(0,o.jsx)("path",{fill:"#FFF",d:"M6.69 9.895h.843v.841H6.69zm0-4.624h.843v3.783H6.69z"},void 0)]}),void 0)}function p(e){var t=(0,s.Z)();return t.theme,t.isRTL,(0,o.jsx)(d,(0,r.pi)({viewBox:"0 0 14 14","data-icon-name":"AlertSolid"},e,{children:(0,o.jsx)("path",{d:"M7.063.012a6.994 6.994 0 1 0 6.994 6.994A6.996 6.996 0 0 0 7.063.012zm0 7.693a.701.701 0 0 1-.7-.699V4.21a.701.701 0 0 1 .7-.7.701.701 0 0 1 .7.7v2.797a.701.701 0 0 1-.7.7zm0 2.798a.701.701 0 0 1-.7-.7.701.701 0 0 1 .7-.699.701.701 0 0 1 .7.7.701.701 0 0 1-.7.699z"},void 0)}),void 0)}function h(e){var t=(0,s.Z)();return t.theme,t.isRTL,(0,o.jsx)(d,(0,r.pi)({viewBox:"0 0 14 14","data-icon-name":"TickCircleSolid"},e,{children:(0,o.jsx)("path",{d:"m9.53 4.44-3.64 3.6-1.42-1.4a.72.72 0 1 0-1 1.03l1.92 1.9a.72.72 0 0 0 1.01 0l4.14-4.11a.72.72 0 1 0-1.01-1.02zM7 0a7 7 0 1 1-7 7 7 7 0 0 1 7-7z",fillRule:"evenodd"},void 0)}),void 0)}d.defaultProps={size:12},d.displayName="Icon";var m=["inline-flex items-center justify-center","m-0 p-0 border-0 rounded-0 border-none","cursor-pointer no-underline appearance-none select-none spr-text-01",{backgroundColor:"transparent",fontSize:"inherit"},"focus-visible:outline-01"];u.Z.apply(void 0,(0,r.ev)(["button"],(0,r.CR)(m),!1));var g=["cursor-pointer spr-link no-underline hover:underline",function(e){return{fontSize:e.theme.link.fontSize}},["focus-visible:rounded-2 focus-visible:underline","focus-visible:outline-01 focus-visible:outline-offset-1"]];(0,u.Z)("a",g);var b=(0,u.Z)("button",m,g),v=n(2243),y=function(){var e=(0,r.CR)((0,i.useState)(null),2),t=e[0],n=e[1],o=(0,r.CR)((0,i.useState)(!1),2),a=o[0],l=o[1];return(0,i.useEffect)(function(){var e=new IntersectionObserver(function(e){var t=(0,r.CR)(e,1)[0];0===t.intersectionRatio&&l(!0),1===t.intersectionRatio&&l(!1)},{threshold:[0,1]});return null!==t&&e.observe(t),function(){null!==t&&e.unobserve(t)}},[t]),{isSticky:a,setStickySentinelRef:n}};function x(e,t){return(x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var E=n(9542),S={disabled:!1},R=i.createContext(null),C="unmounted",P="exited",w="entering",j="entered",O="exiting",L=function(e){function t(t,n){r=e.call(this,t,n)||this;var r,o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=P,r.appearStatus=w):o=j:o=t.unmountOnExit||t.mountOnEnter?C:P,r.state={status:o},r.nextCallback=null,r}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,x(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===C?{status:P}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==w&&n!==j&&(t=w):(n===w||n===j)&&(t=O)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===w?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===P&&this.setState({status:C})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[E.findDOMNode(this),r],i=o[0],a=o[1],l=this.getTimeouts(),s=r?l.appear:l.enter;if(!e&&!n||S.disabled){this.safeSetState({status:j},function(){t.props.onEntered(i)});return}this.props.onEnter(i,a),this.safeSetState({status:w},function(){t.props.onEntering(i,a),t.onTransitionEnd(s,function(){t.safeSetState({status:j},function(){t.props.onEntered(i,a)})})})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:E.findDOMNode(this);if(!t||S.disabled){this.safeSetState({status:P},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:O},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:P},function(){e.props.onExited(r)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:E.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===C)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(R.Provider,{value:null},"function"==typeof n?n(e,r):i.cloneElement(i.Children.only(n),r))},t}(i.Component);function k(){}L.contextType=R,L.propTypes={},L.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:k,onEntering:k,onEntered:k,onExit:k,onExiting:k,onExited:k},L.UNMOUNTED=C,L.EXITED=P,L.ENTERING=w,L.ENTERED=j,L.EXITING=O;var _=function(e){e.scrollTop},M=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,i.useCallback)(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.forEach(function(e){return e&&e.apply(void 0,(0,r.ev)([],(0,r.CR)(t),!1))})},(0,r.ev)([],(0,r.CR)(e),!1))},T=(0,u.Z)("div","overflow-hidden m-0 p-0",function(e,t){var n,o,i=t.$state,a=t.$duration,l=t.$timingFunction,s=t.$dimension,u=t.$collapsedSize;return(0,r.pi)({},((n={})[P]=((o={})[s]="".concat(u,"px"),o.visibility=u?"visible":"hidden",o),n[O]={transition:"".concat(s," ").concat(a.exit,"ms ").concat(l)},n[w]={transition:"".concat(s," ").concat(a.enter,"ms ").concat(l)},n[j]={},n)[i])});function N(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){e.forEach(function(e){e&&("function"==typeof e?e(t):e.current=t)})}}var D=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,i.useCallback)(N.apply(void 0,(0,r.ev)([],(0,r.CR)(e),!1)),(0,r.ev)([],(0,r.CR)(e),!1))},I=function(e){var t=e.visible,n=void 0===t||t,l=e.timingFunction,s=e.children,u=e.onEnter,c=e.onEntering,d=e.onEntered,f=e.onExit,p=e.onExited,h=e.onExiting,m=e.disableExitTransition,g=e.disableEnterTransition,b=e.enableAppearTransition,v=e.containerRef,y=e.duration,x=void 0===y?{enter:150,exit:150}:y,E=e.dimension,S=void 0===E?"height":E,R=e.overrides,C=e.collapsedSize,P=void 0===C?0:C,w=e.unmountOnExit,j=(0,r._T)(e,["visible","timingFunction","children","onEnter","onEntering","onEntered","onExit","onExited","onExiting","disableExitTransition","disableEnterTransition","enableAppearTransition","containerRef","duration","dimension","overrides","collapsedSize","unmountOnExit"]),O=(0,i.useMemo)(function(){return"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion: reduce)").matches},[]),k=(0,i.useRef)(null),N=D(k,void 0===v?null:v);w&&(P=0);var I="height"===S?"scrollHeight":"scrollWidth",A="number"==typeof x?{enter:x,exit:x}:x,z=M(function(){k.current&&(k.current.style[S]=P?"".concat(P,"px"):"0px")},u),U=M(function(){k.current&&(k.current.style[S]="".concat(k.current[I],"px"))},c),$=M(function(){k.current&&(k.current.style[S]="")},d),B=M(function(){k.current&&(k.current.style[S]="".concat(k.current[I],"px"),_(k.current))},f),H=M(function(){k.current&&(k.current.style[S]="".concat(P,"px"))},h),W=M(function(){k.current&&(k.current.style[S]="".concat(P,"px"))},p),Z=(0,r.CR)((0,a.Q)(null==R?void 0:R.Container,T),2),F=Z[0],Q=Z[1],K={$duration:A,$timingFunction:void 0===l?"linear":l,$dimension:S,$collapsedSize:P};return O?(0,o.jsx)(F,(0,r.pi)({},Q,K,{children:n?s:null}),void 0):(0,o.jsx)(L,(0,r.pi)({in:n},j,{unmountOnExit:w,timeout:A,nodeRef:k,onEnter:z,onEntering:U,onEntered:$,onExit:B,onExiting:H,onExited:W,enter:!(void 0!==g&&g),exit:!(void 0!==m&&m),appear:void 0!==b&&b},{children:function(e){return(0,o.jsx)(F,(0,r.pi)({ref:N,$state:e},K,Q,{children:s}),void 0)}}),void 0)};function A(e){var t=e.className,n=e.intent,i=(0,r._T)(e,["className","intent"]),a=(0,s.Z)().theme,l={error:{BaseIcon:f,prop:[{fill:a.spr.supportError}]},warning:{BaseIcon:p,prop:[{fill:a.spr.supportWarning}]},success:{BaseIcon:h,prop:[{fill:a.spr.supportSuccess}]}}[void 0===n?"error":n],u=l.BaseIcon,c=l.prop;return(0,o.jsx)(u,(0,r.pi)({className:["mt-1 mr-1.5 flex-shrink-0",c,t]},i,{size:14}),void 0)}function z(e){var t=e.show,n=e.className,i=e.onToggle,a=(0,r._T)(e,["show","className","onToggle"]),l=(0,v.bU)(),s=t?l.banner.toggleButtonHideLabel:l.banner.toggleButtonShowLabel,u=t?l.banner.toggleButtonHideAriaLabel:l.banner.toggleButtonShowAriaLabel;return(0,o.jsx)(b,(0,r.pi)({"data-testid":"banner-toggle-button","aria-label":u,className:["typography-l2 pl-2",n],onClick:function(){return i(!t)},$show:t},a,{children:s}),void 0)}I.displayName="Collapse";var U=(0,i.forwardRef)(function(e,t){var n=e.intent,s=void 0===n?"error":n,u=e.collapsible,c=e.title,d=e.children,f=e.overrides,p=void 0===f?{}:f,h=e.$as,m=e.role,g=e.maxItemContainerHeight,b=(0,r._T)(e,["intent","collapsible","title","children","overrides","$as","role","maxItemContainerHeight"]),v=(0,r.CR)((0,a.Q)(p.Root,l.P),2),x=v[0],E=v[1],S=(0,r.CR)((0,a.Q)(p.BannerItemContainer,l.K7),2),R=S[0],C=S[1],P=(0,r.CR)((0,a.Q)(p.HeaderContainer,l.jO),2),w=P[0],j=P[1],O=(0,r.CR)((0,a.Q)(p.TitleContainer,l.mH),2),L=O[0],k=O[1],_=(0,r.CR)((0,a.Q)(p.HeaderTitle,l.X0),2),M=_[0],T=_[1],N=(0,r.CR)((0,a.Q)(p.HeaderIcon,A),2),D=N[0],U=N[1],$=(0,r.CR)((0,a.Q)(p.ToggleButton,z),2),B=$[0],H=$[1],W=(0,r.CR)((0,i.useState)(!0),2),Z=W[0],F=W[1],Q=y(),K=Q.isSticky,Y=Q.setStickySentinelRef;return(0,o.jsxs)(x,(0,r.pi)({"data-spaceweb":"banner","data-testid":"banner",intent:s,collapsible:u},b,E,{ref:t},{children:[(0,o.jsx)("div",{ref:Y},void 0),(0,o.jsxs)(w,(0,r.pi)({},j,{$sticky:K},{children:[(0,o.jsxs)(L,(0,r.pi)({},k,{children:[(0,o.jsx)(D,(0,r.pi)({intent:s},U),void 0),(0,o.jsx)(M,(0,r.pi)({},T,{children:c}),void 0)]}),void 0),u&&(0,o.jsx)(B,(0,r.pi)({show:Z,onToggle:F},H),void 0)]}),void 0),d&&(0,o.jsx)(I,(0,r.pi)({unmountOnExit:!0,visible:Z},{children:(0,o.jsx)(R,(0,r.pi)({$as:h,role:"ol"===h||"ul"===h?"list":m,$maxHeight:g},C,{children:d}),void 0)}),void 0)]}),void 0)});U.displayName="Banner";var $=(0,i.memo)(U)},5361:function(e,t,n){n.d(t,{K7:function(){return l},P:function(){return a},PV:function(){return d},X0:function(){return c},jO:function(){return u},mH:function(){return s}});var r=n(710),o=n.n(r),i=n(8956),a=(0,i.Z)("div","box-border w-full rounded-8 border-solid border-1 font-medium overflow-auto pb-2",function(e,t){var n=e.theme;switch(t.intent){case"error":default:return{borderColor:n.spr.supportError};case"warning":return{borderColor:n.spr.supportWarning};case"success":return{borderColor:n.spr.supportSuccess}}}),l=(0,i.Z)("div","box-border list-inside list-none typography-bl1 px-2 mt-0.5",function(e,t){e.theme;var n=e.getStyle,r=t.$as,i=t.$maxHeight;return n(o()({"list-decimal":"ol"===r,"list-disc":"ul"===r}),{maxHeight:i})}),s=(0,i.Z)("div","flex flex-row justify-center items-start"),u=(0,i.Z)("div","flex flex-row justify-between sticky top-0 spr-ui-01 px-2 pt-2",function(e,t){var n=e.theme;return{boxShadow:t.$sticky?n.spr.shadow01:"none"}}),c=(0,i.Z)("div","typography-bl1 font-600"),d=(0,i.Z)("li","typography-bl1")},5758:function(e,t,n){var r=n(9703),o=n(3827),i=n(4090),a=n(3343),l=(0,n(8956).Z)("div"),s=(0,i.forwardRef)(function(e,t){var n=e.overrides,i=(0,r._T)(e,["overrides"]),s=(0,r.CR)((0,a.Q)((void 0===n?{}:n).Box,l),2),u=s[0],c=s[1];return(0,o.jsx)(u,(0,r.pi)({"data-spaceweb":"box","data-testid":"box"},i,c,{ref:t}),void 0)});s.displayName="Box",t.Z=s},2243:function(e,t,n){n.d(t,{Iw:function(){return d},bU:function(){return c}});var r=n(9703),o=n(3827),i=n(4090),a=n(3957),l=n.n(a),s={colorPicker:{resetButtonLabel:"Reset Color",colorLibraryLabel:"Color Library",solidColorLabel:"Solid Color",gradientColorLabel:"Gradient Color",selectColorLabel:"Select Color"},select:{noResultsMsg:"No Results",selectAllLabel:"Select All",hideButtonAriaLabel:"Hide",create:"Create",selectPlaceholder:"Select...",clearOptionLabel:"Unassign",selectedValuesPrefix:"Selected ${values}",item:"item",items:"items",collapsibleMenuDescription:"You are currently using a collapsible grouped menu. To move to next group press Shift and down arrow. To move to previous group press Shift and up arrow."},asyncSelect:{searchingText:"Searching",emptyInputMsg:"Type to Search"},calendar:{timePickerStartLabel:"Start Time",dateInputStartLabel:"Start Date",timePickerEndLabel:"End Time",dateInputEndLabel:"End Date",calendarButtonAriaLabel:"Open Calendar"},datePicker:{ariaLabelCalendar:"Calendar.",popoverAriaLabel:"Select a date",nextMonth:"Next Month",previousMonth:"Previous Month",timezonePickerLabel:"Timezone",timezonePickerPlaceholder:"Select a timezone",ariaRoleDescCalMonth:"Calendar Month",selectedStartDateLabel:"Selected start date",selectedEndDateLabel:"Selected end date",dateNotAvailableLabel:"Not available",dateAvailableLabel:"It's available",selectedLabel:"Selected",chooseLabel:"Choose"},timeRangePicker:{today:"Today",yesterday:"Yesterday",lastOneHour:"Last 1 Hour",lastTwelveHour:"Last 12 Hours",lastTwentyFourHour:"Last 24 Hours",thisWeek:"This Week",lastWeek:"Last Week",lastSevenDays:"Last 7 Days",thisMonth:"This Month",lastMonth:"Last Month",lastTwentyEightDays:"Last 28 Days",lastThirtyDays:"Last 30 Days",lastSixtyDays:"Last 60 Days",lastNinetyDays:"Last 90 Days",lastOneTwentyDays:"Last 120 Days",lastOneEightyDays:"Last 180 Days",thisYear:"This Year",lastYear:"Last Year",lastThreeSixtyFiveDays:"Last 365 Days",nextSevenDays:"Next 7 Days",nextFourteenDays:"Next 14 Days",nextMonth:"Next Month",customRange:"Custom Range",headerLabel:"Date Range",timezoneLabel:"Timezone",cancelBtnLabel:"Cancel",saveBtnLabel:"Save",timeSelectStartLabel:"Start Time",timeSelectEndLabel:"End Time",screenReaderMessageInput:"Press down arrow key to navigate quick select options and tab key to navigate to calendar. Press the down arrow key to interact with the calendar and select a date. Press the escape button to close the calendar.",ariaLabelRange:"Select a time range.",ariaLabel:"Select a date.",selectedDate:"Selected date is ${date}.",selectedDateRange:"Selected date range is from ${startDate} to ${endDate}.",selectSecondDatePrompt:"Select the second date.",timezonePlaceholder:"Search",rangeErrorMsg:"Please select valid range.",presetMenuAriaLabel:"Select a duration",popoverAriaLabel:"Select a date range",maxDateErrorMessage:"Please select a date earlier than ${maxDate}",minDateErrorMessage:"Please select a date later than ${minDate}",minMaxDateErrorMessage:"Please select a date range between ${minDate} & ${maxDate}",timePickerAriaLabel12Hour:"Select a time, 12-hour format.",timePickerAriaLabel24Hour:"Select a time, 24-hour format."},phoneInput:{countrySelectPlaceholder:"Search",inputAriaLabel:"Please enter a phone number without the country dial code.",flagContainerAriaLabel:"Press the enter key to navigate country select dropdown. Press the up or down arrow key to interact with the dropdown and select a country. Press the escape button to close the dropdown."},menu:{nestedMenuItemAriaDescription:"You are currently at an item that opens a nested menu. Press right arrow or spacebar to enter that element and left arrow or escape to return."},banner:{toggleButtonShowLabel:"Show",toggleButtonHideLabel:"Hide",toggleButtonShowAriaLabel:"Show Alerts",toggleButtonHideAriaLabel:"Hide Alerts"},input:{clearAriaLabel:"Clear Value"},modal:{closeAriaLabel:"Close Modal"},snackbar:{closeAriaLabel:"Hide Snackbar"},tag:{closeAriaLabel:"Remove Tag"},search:{searchPlaceholder:"Search"},accordion:{collapse:"Collapse",expand:"Expand"},langCode:"en-US"},u=(0,i.createContext)(s);u.displayName="LocaleContext",u.Consumer;var c=function(){return(0,i.useContext)(u)},d=function(e){var t=u.Provider,n=c(),a=(0,i.useMemo)(function(){return l()({},s,n,e.locale)},[e.locale,n]);return(0,o.jsx)(t,(0,r.pi)({value:a},{children:e.children}),void 0)};d.displayName="LocaleProvider"},3343:function(e,t,n){n.d(t,{Q:function(){return i}});var r=n(6228),o=n(4090),i=function(e,t){return(0,o.useMemo)(function(){var n;return void 0===(n=e)&&(n={}),(0,r.jb)(n,t)},[e,t])}},4102:function(e,t,n){var r=n(9703),o=n(4090),i=n(2637),a=n(8262),l=n(5968);t.Z=function(){var e=(0,i.Fg)(),t=(0,r.CR)((0,l.Z)(),1)[0];return(0,o.useMemo)(function(){return(0,a.Z)(e,t)},[e,t])}},8792:function(e,t,n){n.d(t,{default:function(){return o.a}});var r=n(5250),o=n.n(r)},2956:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}}),n(2139);let r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6406:function(e,t,n){function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2139),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5250:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let r=n(6921),o=n(3827),i=r._(n(4090)),a=n(4542),l=n(7434),s=n(1030),u=n(6874),c=n(2956),d=n(6993),f=n(8599),p=n(5291),h=n(6406),m=n(5786),g=n(1414),b=new Set;function v(e,t,n,r,o,i){if(i||(0,l.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let x=i.default.forwardRef(function(e,t){let n,r;let{href:s,as:b,children:x,prefetch:E=null,passHref:S,replace:R,shallow:C,scroll:P,locale:w,onClick:j,onMouseEnter:O,onTouchStart:L,legacyBehavior:k=!1,..._}=e;n=x,k&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let M=i.default.useContext(d.RouterContext),T=i.default.useContext(f.AppRouterContext),N=null!=M?M:T,D=!M,I=!1!==E,A=null===E?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:z,as:U}=i.default.useMemo(()=>{if(!M){let e=y(s);return{href:e,as:b?y(b):e}}let[e,t]=(0,a.resolveHref)(M,s,!0);return{href:e,as:b?(0,a.resolveHref)(M,b):t||e}},[M,s,b]),$=i.default.useRef(z),B=i.default.useRef(U);k&&(r=i.default.Children.only(n));let H=k?r&&"object"==typeof r&&r.ref:t,[W,Z,F]=(0,p.useIntersection)({rootMargin:"200px"}),Q=i.default.useCallback(e=>{(B.current!==U||$.current!==z)&&(F(),B.current=U,$.current=z),W(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[U,H,z,F,W]);i.default.useEffect(()=>{N&&Z&&I&&v(N,z,U,{locale:w},{kind:A},D)},[U,z,Z,w,I,null==M?void 0:M.locale,N,D,A]);let K={ref:Q,onClick(e){k||"function"!=typeof j||j(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,o,a,s,u,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let f=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?i.default.startTransition(f):f()}(e,N,z,U,R,C,P,w,D)},onMouseEnter(e){k||"function"!=typeof O||O(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(I||!D)&&v(N,z,U,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:A},D)},onTouchStart(e){k||"function"!=typeof L||L(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(I||!D)&&v(N,z,U,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:A},D)}};if((0,u.isAbsoluteUrl)(U))K.href=U;else if(!k||S||"a"===r.type&&!("href"in r.props)){let e=void 0!==w?w:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,h.getDomainLocale)(U,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);K.href=t||(0,m.addBasePath)((0,c.addLocale)(U,e,null==M?void 0:M.defaultLocale))}return k?i.default.cloneElement(r,K):(0,o.jsx)("a",{..._,...K,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2185:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4542:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return d}});let r=n(5770),o=n(1030),i=n(4544),a=n(6874),l=n(2139),s=n(7434),u=n(2360),c=n(6735);function d(e,t,n){let d;let f="string"==typeof t?t:(0,o.formatWithValidation)(t),p=f.match(/^[a-zA-Z]{1,}:\/\//),h=p?f.slice(p[0].length):f;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+f+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(h);f=(p?p[0]:"")+t}if(!(0,s.isLocalURL)(f))return n?[f]:f;try{d=new URL(f.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){d=new URL("/","http://n")}try{let e=new URL(f,d);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,u.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:a,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,n);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,i.omit)(n,l)}))}let a=e.origin===d.origin?e.href.slice(e.origin.length):e.href;return n?[a,t||a]:a}catch(e){return n?[f]:f}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5291:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let r=n(4090),o=n(2185),i="function"==typeof IntersectionObserver,a=new Map,l=[];function s(e){let{rootRef:t,rootMargin:n,disabled:s}=e,u=s||!i,[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(u||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,n,t,c,f.current]),[p,c,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2202:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},6993:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(6921)._(n(4090)).default.createContext(null)},1030:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return i},urlObjectKeys:function(){return a},formatWithValidation:function(){return l}});let r=n(1884)._(n(5770)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:n}=e,i=e.protocol||"",a=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:n&&(u=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(r.urlQueryToSearchParams(s)));let c=e.search||s&&"?"+s||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==u?(u="//"+(u||""),a&&"/"!==a[0]&&(a="/"+a)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+i+u+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return i(e)}},2360:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let r=n(7409),o=n(1305)},6735:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let r=n(2395),o=n(9935);function i(e,t,n){let i="",a=(0,o.getRouteRegex)(e),l=a.groups,s=(t!==e?(0,r.getRouteMatcher)(a)(t):"")||n;i=e;let u=Object.keys(l);return u.every(e=>{let t=s[e]||"",{repeat:n,optional:r}=l[e],o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in s)&&(i=i.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:u,result:i}}},1305:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return i}});let r=n(4749),o=/\/\[[^/]+?\](?=\/|$)/;function i(e){return(0,r.isInterceptionRouteAppPath)(e)&&(e=(0,r.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},7434:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let r=n(6874),o=n(7379);function i(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},4544:function(e,t){function n(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},5770:function(e,t){function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o},assign:function(){return i}})},2395:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let r=n(6874);function o(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},a={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(a[e]=~r.indexOf("/")?r.split("/").map(e=>i(e)):t.repeat?[i(r)]:i(r))}),a}}},9935:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getRouteRegex:function(){return s},getNamedRouteRegex:function(){return d},getNamedMiddlewareRegex:function(){return f}});let r=n(4749),o=n(2202),i=n(5868);function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function l(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),n={},l=1;return{parameterizedRoute:t.map(e=>{let t=r.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:r,repeat:s}=a(i[1]);return n[e]={pos:l++,repeat:s,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:r}=a(i[1]);return n[e]={pos:l++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function s(e){let{parameterizedRoute:t,groups:n}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function u(e){let{interceptionMarker:t,getSafeRouteKey:n,segment:r,routeKeys:i,keyPrefix:l}=e,{key:s,optional:u,repeat:c}=a(r),d=s.replace(/\W/g,"");l&&(d=""+l+d);let f=!1;(0===d.length||d.length>30)&&(f=!0),isNaN(parseInt(d.slice(0,1)))||(f=!0),f&&(d=n()),l?i[d]=""+l+s:i[d]=s;let p=t?(0,o.escapeStringRegexp)(t):"";return c?u?"(?:/"+p+"(?<"+d+">.+?))?":"/"+p+"(?<"+d+">.+?)":"/"+p+"(?<"+d+">[^/]+?)"}function c(e,t){let n;let a=(0,i.removeTrailingSlash)(e).slice(1).split("/"),l=(n=0,()=>{let e="",t=++n;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),s={};return{namedParameterizedRoute:a.map(e=>{let n=r.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(n&&i){let[n]=e.split(i[0]);return u({getSafeRouteKey:l,interceptionMarker:n,segment:i[1],routeKeys:s,keyPrefix:t?"nxtI":void 0})}return i?u({getSafeRouteKey:l,segment:i[1],routeKeys:s,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:s}}function d(e,t){let n=c(e,t);return{...s(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function f(e,t){let{parameterizedRoute:n}=l(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/"+(r?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},7409:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let n=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let n=o.slice(1,-1),a=!1;if(n.startsWith("[")&&n.endsWith("]")&&(n=n.slice(1,-1),a=!0),n.startsWith("...")&&(n=n.substring(3),r=!0),n.startsWith("[")||n.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+n+"').");if(n.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+n+"').");function i(e,n){if(null!==e&&e!==n)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach(e=>{if(e===n)throw Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')}),t.push(n)}if(r){if(a){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');i(this.optionalRestSlugName,n),this.optionalRestSlugName=n,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');i(this.restSlugName,n),this.restSlugName=n,o="[...]"}}else{if(a)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');i(this.slugName,n),this.slugName=n,o="[]"}}this.children.has(o)||this.children.set(o,new n),this.children.get(o)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){let t=new n;return e.forEach(e=>t.insert(e)),t.smoosh()}},6874:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{WEB_VITALS:function(){return n},execOnce:function(){return r},isAbsoluteUrl:function(){return i},getLocationOrigin:function(){return a},getURL:function(){return l},getDisplayName:function(){return s},isResSent:function(){return u},normalizeRepeatedSlashes:function(){return c},loadGetInitialProps:function(){return d},SP:function(){return f},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return m},PageNotFoundError:function(){return g},MissingStaticPage:function(){return b},MiddlewareNotFoundError:function(){return v},stringifyError:function(){return y}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function l(){let{href:e}=window.location,t=a();return e.substring(t.length)}function s(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function d(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await d(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&u(n))return r;if(!r)throw Error('"'+s(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let f="undefined"!=typeof performance,p=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class b extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);