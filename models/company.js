const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักตารางข้อมูลบริษัท",
      primaryKey: true
    },
    company_id: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "รหัสบริษัทจากกรมพัฒนาธุรกิจการค้า(DBD)"
    },
    company_tax_id: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "หมายเลขภาษีประจำตัวธุรกิจ"
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ชื่อบริษัท\/นิติบุคคล"
    },
    company_type_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ประเภทการจดทะเบียนธุรกิจ"
    },
    business_type_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสประเภทลักษณะการประกอบธุรกิจ"
    },
    business_subtype_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสลักษณะการประกอบธุรกิจย่อย"
    },
    com_hq_address1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ที่อยู่สำนักงานใหญ่ (Head Quaoter)"
    },
    com_hq_address2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ที่อยู่สำนักงานใหญ่ (Head Quaoter)"
    },
    com_hq_province: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "รหัสจังหวัดที่ตั้งธุรกิจ"
    },
    com_hq_distric: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "รหัส อำเภอ\/เขต ที่ตั้งธุรกิจ"
    },
    com_hq_subdistric: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "รหัส ตำบล\/แขวง ที่ตั้งธุรกิจ"
    },
    com_hq_postcode: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "รหัสไปรษณี"
    },
    com_hq_phoneNo: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "โทรศัพท์"
    },
    numberof_employee: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "เช่น 1-10 คน , 11-30 คน "
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "เว็ปไซต์"
    },
    facebook: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Url facebook"
    },
    official_line_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Line ID"
    },
    instragram: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "instragram"
    },
    company_email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "E-Mail สถานประกอบการ"
    },
    company_lat: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "พิกัด Lat ,Long ของบริษัท"
    },
    company_long: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    linkin: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "linkin"
    },
    legal_capital: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ทุนจดทะเบียน\n"
    },
    hr_connext_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "เช่น www.hrconnext.co\/ibmm"
    },
    is_active_in_hr_connext: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "True or False"
    },
    com_hq_country: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รัหสประเทศ (Thailand = TH)"
    }
  }, {
    sequelize,
    tableName: 'company',
    schema: 'hrconn_data',
    timestamps: false,
    indexes: [
      {
        name: "company_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
