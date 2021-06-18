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

 Date: 18/06/2021 22:10:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tab_cart_product
-- ----------------------------
DROP TABLE IF EXISTS `tab_cart_product`;
CREATE TABLE `tab_cart_product`  (
  `cart_id` int(0) NOT NULL,
  `product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `product_price` decimal(10, 2) NULL DEFAULT NULL,
  `product_count` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `product_img` blob NULL,
  `product_identify` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`cart_id`) USING BTREE,
  INDEX `cart_id`(`cart_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_cart_product
-- ----------------------------
INSERT INTO `tab_cart_product` VALUES (1, 'Tank Top', 20.00, '1', NULL, 'T-shirt');
INSERT INTO `tab_cart_product` VALUES (2, 'HuangZeseng', 1.00, '2', NULL, 'Shoes');

-- ----------------------------
-- Table structure for tab_commander
-- ----------------------------
DROP TABLE IF EXISTS `tab_commander`;
CREATE TABLE `tab_commander`  (
  `commander_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `commander_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_commander
-- ----------------------------
INSERT INTO `tab_commander` VALUES ('dz@dz', '12345');

-- ----------------------------
-- Table structure for tab_desc
-- ----------------------------
DROP TABLE IF EXISTS `tab_desc`;
CREATE TABLE `tab_desc`  (
  `desc_Id` int(0) NOT NULL,
  `desc_contury` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc_fn` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc_n` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc_cn` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc_adress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`desc_Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

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

-- ----------------------------
-- Table structure for tab_user
-- ----------------------------
DROP TABLE IF EXISTS `tab_user`;
CREATE TABLE `tab_user`  (
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_user
-- ----------------------------
INSERT INTO `tab_user` VALUES ('aa', '123456');
INSERT INTO `tab_user` VALUES ('bb', '123456');
INSERT INTO `tab_user` VALUES ('cc', '123456');
INSERT INTO `tab_user` VALUES ('dddd', '123');
INSERT INTO `tab_user` VALUES ('dxz', '1234');
INSERT INTO `tab_user` VALUES ('123', '123');

-- ----------------------------
-- Table structure for tab_user1
-- ----------------------------
DROP TABLE IF EXISTS `tab_user1`;
CREATE TABLE `tab_user1`  (
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` int(0) NOT NULL,
  `desc_id` int(0) NULL DEFAULT NULL,
  `cart_id` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `desc_id`(`desc_id`) USING BTREE,
  INDEX `cart_id`(`cart_id`) USING BTREE,
  CONSTRAINT `tab_user1_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `tab_cart_product` (`cart_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `tab_user1_ibfk_2` FOREIGN KEY (`desc_id`) REFERENCES `tab_desc` (`desc_Id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_user1
-- ----------------------------
INSERT INTO `tab_user1` VALUES ('aa', '123456', 1, NULL, 1);

SET FOREIGN_KEY_CHECKS = 1;
