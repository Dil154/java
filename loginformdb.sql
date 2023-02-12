create database LoginForm

create table tbl_login
(
id int primary key identity(1,1) ,
EmailId varchar(50),
password varchar(50)
)


insert into tbl_login([EmailId], [password])
                values('dhaveed154@gmail.com','dil154'),('senapathidhaveed@gmail.com','dil123'),('sdhaveed@gmail.com','dil567')

select * from tbl_login

create table tbl_gmail
(
id int primary key identity(1,1),
Emailid varchar(50),
password varchar(50)
)

insert into tbl_gmail([Emailid],[password])
                  values('muneer4a7@gmail.com','123456'),('nagraj@gamil.com','456789'),('basha@gmail.com','0123456')
select*from tbl_gmail