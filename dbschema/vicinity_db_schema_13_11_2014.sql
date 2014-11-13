drop database if exists vicinity;
create database vicinity;
use vicinity;
drop table if exists apartment;
        	  create table apartment(
        	        apartment_id bigint null auto_increment,
        	        apartment_name varchar(255),
        	        apartment_address_line_1 varchar(255),
        	        apartment_address_line_2 varchar(255),
        	        apartment_address_line_3 varchar(255),
        	        apartment_city varchar(100),
        	        apartment_state varchar(100),
        	        apartment_country varchar(100),
        	        apartment_pincode varchar(50),
        	        apartment_primary_contact_name varchar(255),
        	        apartment_primary_contact_email varchar(100),
        	        apartment_primary_phone varchar(50),
        	        apartment_alternate_contact_name varchar(255),
        	        apartment_alternate_contact_email varchar(100),
        	        apartment_alternate_phone varchar(50),
        	        primary key (apartment_id));

drop table if exists owner_tenant;
			create table owner_tenant(
					sno bigint null auto_increment,
					owner_id varchar(100),
					tenant_id varchar(100),
					primary key (sno));
drop table if exists emergency;
			create table emergency(
					sno bigint null auto_increment,
					apartment_id bigint,
					member_id varchar(100),
					emer_first_name varchar(255),
					emer_last_name varchar(255),
					emer_address_line_1 varchar(255),
					emer_address_line_2 varchar(255),
					emer_address_line_3 varchar(255),
					emer_address_city varchar(50),
					emer_address_state varchar(50),
					emer_address_country varchar(50),
					emer_address_pincode varchar(50),
					emer_address_telephone varchar(50),
					emer_address_mobile_primary varchar(50),
					emer_address_mobile_alternate varchar(50),
					emer_address_email_primary varchar(100),
					emer_address_email_alternate varchar(100),
					primary key (sno));
drop table if exists family;
			create table family(
					sno bigint null auto_increment,
					apartment_id bigint,
					member_id varchar(100),
					dependent_first_name varchar(255),
					dependent_last_name varchar(255),
					dependent_dob date,
					dependent_mob_number varchar(50),
					dependent_email varchar(100),
					primary key (sno));
drop table if exists member_assets;
			create table member_assets(
					sno bigint null auto_increment,
					apartment_id bigint,
					member_id varchar(100),
					asset_name varchar(200),
					asset_identification_parameter varchar(200),
					asset_identification varchar(200),
					asset_make varchar(100),
					asset_model varchar(100),
					primary key (sno));
drop table if exists member_vendor;
			create table member_vendor(
					sno bigint null auto_increment,
					apartment_id bigint,
					member_id varchar(100),
					vendor_type varchar(200),
					vendor_name varchar(255),
					vendor_contact_number varchar(50),
					primary key (sno));
drop table if exists monthly_maintainence;
			create table monthly_maintainence(
					sno bigint null auto_increment,
					apartment_id bigint,
					flat_number varchar(50),
					payment_for_month varchar(25),
					payment_due_date date,
					amount_due bigint,
					amount_paid bigint,
					amount_paid_by varchar(100),
					amount_paid_on date,
					primary key (sno));
drop table if exists roles;
			create table roles(
					sno bigint null auto_increment,
					role_id varchar(20),
					role_name varchar(30),
					primary key (sno));
drop table if exists member_credentials;
			create table member_credentials(
					sno bigint null auto_increment,
					member_id varchar(100),
					member_pwd varchar(100),
					role_id varchar(20),
					primary key (sno));
drop table if exists apartment_assets;
			create table apartment_assets(
					sno bigint null auto_increment,
					apartment_id bigint,
					asset_id varchar(50),
					asset_name varchar(100),
					asset_make varchar(100),
					asset_date_of_purchase date,
					under_amc varchar(5),
					primary key (sno));
drop table if exists assets_amc;
			create table assets_amc(
					sno bigint null auto_increment,
					apartment_id bigint,
					asset_id varchar(50),
					amc_amount_paid bigint,
					amc_amount_paid_date date,
					amc_type varchar(100),
					amc_start_date date,
					amc_end_date date,
					amc_renewal_date date,
					amc_org_id varchar(100),
					primary key (sno));
drop table if exists amc_organization;
			create table amc_organization(
					sno bigint null auto_increment,
					apartment_id bigint,
					amc_org_id varchar(100),
					amc_organization varchar(255),
					amc_organization_address_line_1 varchar(255),
					amc_organization_address_line_2 varchar(255),
					amc_organization_city varchar(50),
					amc_organization_state varchar(50),
					amc_organization_country varchar(50),
					amc_organization_pin varchar(25),
					amc_organization_telephone varchar(50),
					amc_organization_contact_1 varchar(100),
					amc_organization_contact_2 varchar(100),
					amc_organization_contact_1_mobile varchar(100),
					amc_organization_contact_2_mobile varchar(100),
					primary key (sno));					
drop table if exists amc_service;
			create table amc_service(
					sno bigint null auto_increment,
					apartment_id bigint,
					asset_id varchar(50),
					breakdown_reported_on date,
					breakdown_attended_on date,
					problem_rectified_status varchar(20),
					primary key (sno));
drop table if exists dashboard;
			create table dashboard(
					sno bigint null auto_increment,
					dashboard_id varchar(20),
					dashboard_name varchar(255),
					primary key (sno));					
drop table if exists dashboard_config;
			create table dashboard_config(
					sno bigint null auto_increment,
					apartment_id bigint,
					role_id varchar(20),
					dashboard_id varchar(20),
					primary key (sno));
drop table if exists complaints;
			create table complaints(
					complaint_id bigint null auto_increment,
					apartment_id bigint,
					complaint_title varchar(255),
					complaint_description text,
					member_id varchar(100),
					date_of_complaint date,
					complaint_status varchar(50),
					complaint_resolution text,
					complaint_resolved_by varchar(100),
					complaint_resolved_date date,
					primary key(complaint_id));	
drop table if exists member;
			create table member(
					member_id varchar(100),
					member_first_name varchar(255),
					member_last_name varchar(255),
					member_gender varchar(10),
					member_dob date,
					member_communication_address_line_1 varchar(255),
					member_communication_address_line_2 varchar(255),
					member_communication_address_line_3 varchar(255),
					member_communication_address_city varchar(50),
					member_communication_address_state varchar(50),
					member_communication_address_country varchar(50),
					member_communication_address_pincode varchar(50),
					member_communication_address_telephone varchar(50),
					member_communication_address_mobile_primary varchar(50),
					member_communication_address_mobile_alternate varchar(50),
					member_communication_address_email_primary varchar(100),
					member_communication_address_email_alternate varchar(100),
					member_photo_file_id varchar(255),
					primary key(member_id));
drop table if exists flat;
			create table flat(sno bigint null auto_increment,
					apartment_id bigint,
					flat_number varchar(50),
					primary_ownership_id varchar(50),
					primary_tenancy_id varchar(50),
					primary key (sno));
drop table if exists member_apartment_flat;
			create table member_ apartment_flat(
					sno bigint null auto_increment,
					apartment_id bigint,
					flat_number varchar(50),
					primary_status_id varchar(50),
					member_id varchar(100),
					member_type varchar(25),
					member_status varchar(25),
					member_status_start_date date,
					member_status_end_date date,
					primary key(sno));
