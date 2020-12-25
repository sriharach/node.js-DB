const config = require("../config");
const {body,validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const models = require("../models/index"); //connect db get data model
const sysm_users = require("../models/sysm_users");

exports.users = async (req, res, next) => {
    const {id} = req.params;
    const company = await models.sysm_users.findByPk(id);
    res.status(200).json({
        item: company,
    });
}

exports.usersEiei = async (req, res, next) => {
    const model = req.body;
    let company = await models.sysm_users.findAll();
    let ty = company.filter(e => e.id === model.id)
    let pp = ty.map(e => {
        return {
            "id": e.id,
            "user_name": e.user_name,
            "Inw_pond": "สุดหล่อ",
        }
    });

    res.status(200).json({
        item: pp,
    });
}

exports.login = async (req, res, next) => {
    try {
        const {
            user_name,
            password
        } = req.body;
        const sysm_users = await models.sysm_users.findOne({
            where: {
                user_name: user_name,
                password: password
            }
        });
        if (sysm_users === null) {
            res.status(400).json({
                item: "ไม่เจอ"
            })
        } else {
    
            const model = {
                user_name: sysm_users.user_name,
            }
    
            const Token = await jwt.sign(model, config.JWT_SECRET, {
                expiresIn: "3h"
            }); //โค้ดหมดอายุ
    
            const expires_in = jwt.decode(Token);
    
            res.status(200).json({
                access_token: Token,
                expires_In: expires_in.exp
            })
    
        }
 
    } catch (error) {
        res.status(400).json({
            item: error
        })
    }
   


}