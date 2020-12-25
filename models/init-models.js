var DataTypes = require("sequelize").DataTypes;
var _company = require("./company");
var _company_creator = require("./company_creator");
var _company_module = require("./company_module");
var _confirms = require("./confirms");
var _department = require("./department");
var _emloyee_leave_history = require("./emloyee_leave_history");
var _employee = require("./employee");
var _employee_Leave = require("./employee_Leave");
var _employee_payroll = require("./employee_payroll");
var _failed_jobs = require("./failed_jobs");
var _hr_module = require("./hr_module");
var _logs = require("./logs");
var _master_business_subtypes = require("./master_business_subtypes");
var _master_business_types = require("./master_business_types");
var _master_company_types = require("./master_company_types");
var _master_district = require("./master_district");
var _master_number_of_employee_types = require("./master_number_of_employee_types");
var _master_provinces = require("./master_provinces");
var _master_reg_map_prov = require("./master_reg_map_prov");
var _master_region = require("./master_region");
var _master_subdistrict = require("./master_subdistrict");
var _master_tb_leave = require("./master_tb_leave");
var _migrations = require("./migrations");
var _migrations = require("./migrations");
var _oauth_access_tokens = require("./oauth_access_tokens");
var _oauth_access_tokens = require("./oauth_access_tokens");
var _oauth_auth_codes = require("./oauth_auth_codes");
var _oauth_auth_codes = require("./oauth_auth_codes");
var _oauth_clients = require("./oauth_clients");
var _oauth_clients = require("./oauth_clients");
var _oauth_personal_access_clients = require("./oauth_personal_access_clients");
var _oauth_personal_access_clients = require("./oauth_personal_access_clients");
var _oauth_refresh_tokens = require("./oauth_refresh_tokens");
var _oauth_refresh_tokens = require("./oauth_refresh_tokens");
var _password_resets = require("./password_resets");
var _person = require("./person");
var _sysm_access_levels = require("./sysm_access_levels");
var _sysm_app_func_status_type = require("./sysm_app_func_status_type");
var _sysm_application = require("./sysm_application");
var _sysm_domains = require("./sysm_domains");
var _sysm_maptb_user_group = require("./sysm_maptb_user_group");
var _sysm_password_resets = require("./sysm_password_resets");
var _sysm_role = require("./sysm_role");
var _sysm_user_groups = require("./sysm_user_groups");
var _sysm_users = require("./sysm_users");
var _users = require("./users");

function initModels(sequelize) {
  var company = _company(sequelize, DataTypes);
  var company_creator = _company_creator(sequelize, DataTypes);
  var company_module = _company_module(sequelize, DataTypes);
  var confirms = _confirms(sequelize, DataTypes);
  var department = _department(sequelize, DataTypes);
  var emloyee_leave_history = _emloyee_leave_history(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var employee_Leave = _employee_Leave(sequelize, DataTypes);
  var employee_payroll = _employee_payroll(sequelize, DataTypes);
  var failed_jobs = _failed_jobs(sequelize, DataTypes);
  var hr_module = _hr_module(sequelize, DataTypes);
  var logs = _logs(sequelize, DataTypes);
  var master_business_subtypes = _master_business_subtypes(sequelize, DataTypes);
  var master_business_types = _master_business_types(sequelize, DataTypes);
  var master_company_types = _master_company_types(sequelize, DataTypes);
  var master_district = _master_district(sequelize, DataTypes);
  var master_number_of_employee_types = _master_number_of_employee_types(sequelize, DataTypes);
  var master_provinces = _master_provinces(sequelize, DataTypes);
  var master_reg_map_prov = _master_reg_map_prov(sequelize, DataTypes);
  var master_region = _master_region(sequelize, DataTypes);
  var master_subdistrict = _master_subdistrict(sequelize, DataTypes);
  var master_tb_leave = _master_tb_leave(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var oauth_access_tokens = _oauth_access_tokens(sequelize, DataTypes);
  var oauth_access_tokens = _oauth_access_tokens(sequelize, DataTypes);
  var oauth_auth_codes = _oauth_auth_codes(sequelize, DataTypes);
  var oauth_auth_codes = _oauth_auth_codes(sequelize, DataTypes);
  var oauth_clients = _oauth_clients(sequelize, DataTypes);
  var oauth_clients = _oauth_clients(sequelize, DataTypes);
  var oauth_personal_access_clients = _oauth_personal_access_clients(sequelize, DataTypes);
  var oauth_personal_access_clients = _oauth_personal_access_clients(sequelize, DataTypes);
  var oauth_refresh_tokens = _oauth_refresh_tokens(sequelize, DataTypes);
  var oauth_refresh_tokens = _oauth_refresh_tokens(sequelize, DataTypes);
  var password_resets = _password_resets(sequelize, DataTypes);
  var person = _person(sequelize, DataTypes);
  var sysm_access_levels = _sysm_access_levels(sequelize, DataTypes);
  var sysm_app_func_status_type = _sysm_app_func_status_type(sequelize, DataTypes);
  var sysm_application = _sysm_application(sequelize, DataTypes);
  var sysm_domains = _sysm_domains(sequelize, DataTypes);
  var sysm_maptb_user_group = _sysm_maptb_user_group(sequelize, DataTypes);
  var sysm_password_resets = _sysm_password_resets(sequelize, DataTypes);
  var sysm_role = _sysm_role(sequelize, DataTypes);
  var sysm_user_groups = _sysm_user_groups(sequelize, DataTypes);
  var sysm_users = _sysm_users(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  master_district.belongsTo(master_provinces, { foreignKey: "province_id"});
  master_provinces.hasMany(master_district, { foreignKey: "province_id"});
  master_reg_map_prov.belongsTo(master_provinces, { foreignKey: "prov_id"});
  master_provinces.hasMany(master_reg_map_prov, { foreignKey: "prov_id"});
  master_reg_map_prov.belongsTo(master_region, { foreignKey: "reg_id"});
  master_region.hasMany(master_reg_map_prov, { foreignKey: "reg_id"});
  master_subdistrict.belongsTo(master_district, { foreignKey: "district_id"});
  master_district.hasMany(master_subdistrict, { foreignKey: "district_id"});
  sysm_application.belongsTo(sysm_access_levels, { foreignKey: "access"});
  sysm_access_levels.hasMany(sysm_application, { foreignKey: "access"});
  sysm_application.belongsTo(sysm_application, { foreignKey: "parent_menu"});
  sysm_application.hasMany(sysm_application, { foreignKey: "parent_menu"});
  sysm_maptb_user_group.belongsTo(sysm_user_groups, { foreignKey: "group_id"});
  sysm_user_groups.hasMany(sysm_maptb_user_group, { foreignKey: "group_id"});
  sysm_maptb_user_group.belongsTo(sysm_users, { foreignKey: "user_id"});
  sysm_users.hasMany(sysm_maptb_user_group, { foreignKey: "user_id"});
  sysm_role.belongsTo(sysm_application, { foreignKey: "application_id"});
  sysm_application.hasMany(sysm_role, { foreignKey: "application_id"});
  sysm_role.belongsTo(sysm_users, { foreignKey: "created_by"});
  sysm_users.hasMany(sysm_role, { foreignKey: "created_by"});
  sysm_role.belongsTo(sysm_user_groups, { foreignKey: "group_id"});
  sysm_user_groups.hasMany(sysm_role, { foreignKey: "group_id"});
  sysm_role.belongsTo(sysm_users, { foreignKey: "updated_by"});
  sysm_users.hasMany(sysm_role, { foreignKey: "updated_by"});
  sysm_user_groups.belongsTo(sysm_user_groups, { foreignKey: "parent_id"});
  sysm_user_groups.hasMany(sysm_user_groups, { foreignKey: "parent_id"});

  return {
    company,
    company_creator,
    company_module,
    confirms,
    department,
    emloyee_leave_history,
    employee,
    employee_Leave,
    employee_payroll,
    failed_jobs,
    hr_module,
    logs,
    master_business_subtypes,
    master_business_types,
    master_company_types,
    master_district,
    master_number_of_employee_types,
    master_provinces,
    master_reg_map_prov,
    master_region,
    master_subdistrict,
    master_tb_leave,
    migrations,
    migrations,
    oauth_access_tokens,
    oauth_access_tokens,
    oauth_auth_codes,
    oauth_auth_codes,
    oauth_clients,
    oauth_clients,
    oauth_personal_access_clients,
    oauth_personal_access_clients,
    oauth_refresh_tokens,
    oauth_refresh_tokens,
    password_resets,
    person,
    sysm_access_levels,
    sysm_app_func_status_type,
    sysm_application,
    sysm_domains,
    sysm_maptb_user_group,
    sysm_password_resets,
    sysm_role,
    sysm_user_groups,
    sysm_users,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
