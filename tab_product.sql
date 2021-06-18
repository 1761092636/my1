/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80025
 Source Host           : localhost:3306
 Source Schema         : dz

 Target Server Type    : MySQL
 Target Server Version : 80025
 File Encoding         : 65001

 Date: 18/06/2021 22:07:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tab_product
-- ----------------------------
DROP TABLE IF EXISTS `tab_product`;
CREATE TABLE `tab_product`  (
  `product_id` int(0) NULL DEFAULT NULL,
  `product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `product_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `product_classify` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `product_price` decimal(10, 0) NULL DEFAULT NULL,
  `product_img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_product
-- ----------------------------
INSERT INTO `tab_product` VALUES (1, 'Dickes', 'Finding Perfect Pants', 'Pants', 300, '1623852010670.jpg');
INSERT INTO `tab_product` VALUES (2, 'Vance', 'Finding Perfect Shoes', 'Shoes', 200, '1623852010670.jpg');
INSERT INTO `tab_product` VALUES (3, 'Iphone 12', 'Finding Perfect Phone', 'Phone', 10000, '1623852010670.jpg');
INSERT INTO `tab_product` VALUES (4, 'Leven', 'Finding Perfect Computer', 'Computer', 20000, '1623852010670.jpg');
INSERT INTO `tab_product` VALUES (5, 'MI', 'Are You Ok?', 'Shoes', 1999, '1623852010670.jpg');
INSERT INTO `tab_product` VALUES (6, 'Kanya', 'Kanya No.1', 'Computer', 9999999999, '1623852010670.jpg');
INSERT INTO `tab_product` VALUES (8, 'kanya2', '222222222222', 'T-shirt', 1, '1623852010670.jpg');

SET FOREIGN_KEY_CHECKS = 1;
