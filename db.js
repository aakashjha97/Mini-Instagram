const Sequelize=require('sequelize');

const db=new Sequelize(
	'edu',
	'eduuser',
	'Aakash9@',
	{
		dialect: 'mysql',
		host: 'localhost'
	}
	)

const Users=db.define('users',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement: true,
        primaryKey: true
	},
	email:{
		type:Sequelize.STRING,
		allowNull:false,
        unique:true
	},
	username:{
		type:Sequelize.STRING,
		allowNull:false,
		unique:true
	},
	phone_number:{
		type:Sequelize.STRING,
		allowNull:false,
        unique:true
	},
	password:{
		type:Sequelize.STRING,
		allowNull:false
	}
})

const Posts=db.define('posts',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement: true,
        primaryKey: true
	},
	name:{
		type:Sequelize.STRING,
		allowNull:false,
		unique:true
	},
	auther:{
		type:Sequelize.STRING,
		allowNull:false,
        unique:true
	},
	genre:{
		type:Sequelize.STRING,
		allowNull:false,
        unique:true
	},
	image:{
		type:Sequelize.STRING,
		allowNull:false	
	}
})

db.sync().then(()=>console.log("Database is readys"))

exports=module.exports={
	db,
	Users,
	Posts,
}