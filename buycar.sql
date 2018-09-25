/*
Navicat MySQL Data Transfer

Source Server         : xiaowei
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : zengjianjun

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-25 20:58:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for buycar
-- ----------------------------
DROP TABLE IF EXISTS `buycar`;
CREATE TABLE `buycar` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `star` varchar(255) DEFAULT NULL,
  `commentCount` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of buycar
-- ----------------------------
INSERT INTO `buycar` VALUES ('G003', '2018新款加厚加绒棉袄冬季男士外套个性棉', '../images/goodslist/g3.jpg', '178', '4', '10002', '31');
INSERT INTO `buycar` VALUES ('G0019', '夏季薄款亚麻短裤男夏天潮流宽松休闲运分沙滩裤子男士五分裤 白色 M', '../images/goodslist/g19.jpg', '67', '4', '10002', '20');
INSERT INTO `buycar` VALUES ('G0014', '男士爽肤水补水保湿控油收缩毛孔滋润紧肤喷雾护肤化妆品须后', '../images/goodslist/g14.jpg', '58', '4', '10002', '10');
INSERT INTO `buycar` VALUES ('G002', '春季2018新款马甲韩版棉衣背心男士修身棉服', '../images/goodslist/g2.jpg', '118', '4', '10002', '168');
INSERT INTO `buycar` VALUES ('G0020', '2017秋冬装男士毛呢大衣韩版英伦男风衣中长款过膝呢子外套西装领 褐色 M', '../images/goodslist/g20.jpg', '77', '4', '10002', '10');
INSERT INTO `buycar` VALUES ('G008', '牛仔裤男修身小脚韩版潮流宽松夏季薄款直筒裤男士休闲裤子九分裤 浅蓝M', '../images/goodslist/g8.jpg', '69', '4', '10002', '24');
INSERT INTO `buycar` VALUES ('G0012', '春季2018新款马甲韩版棉衣背心男士修身棉服', '../images/goodslist/g12.jpg', '118', '4', '10002', '1');
INSERT INTO `buycar` VALUES ('G001', '斯潮港风原宿情侣简约圆领字母印花短袖', '../images/goodslist/g1.jpg', '68', '4', '10002', '221');
