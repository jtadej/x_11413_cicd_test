/* 
 * Application : CICD Test Application
 * ClassName   : sys_script_include
 * Created On  : 2019-02-28 13:45:57
 * Created By  : admin
 * Updated On  : 2020-04-12 05:32:16
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=1b9ed113dbf32300fcf41780399619fc
 */
/**
 * Class Description
 * 
 * @class 
 * @author System Administrator [admin]
 * @memberof x_11413_cicd_test.module:sys_script_include
 */
var tst = Class.create();
tst.prototype = /** @lends x_11413_cicd_test.module:sys_script_include.tst.prototype */ {
	/**
	 * Description
	 * 
	 * @returns {undefined}
	 */
	initialize: function() {
	},
	
	/**
	 * Description
	 * 
	 * @returns {boolean}
	 */
	dummy: function(){
		return true;
	},
	
	/**
	 * Description
	 * Does something testing function 1
	 * @returns {string}
	 */
	testFunction1: function() {
		return 'string';
	},
	
	/**
	 * Description
	 * 
	 * @returns {boolean} 
	 */
	testFunction3: function() {
		return false;
	},
		
	type: 'tst'
};
