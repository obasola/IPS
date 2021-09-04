SELECT * FROM IPS.Page;
SELECT * FROM IPS.Permission
SELECT * FROM IPS.Permission_Group
SELECT * FROM IPS.Permission_Group_Permission

INSERT INTO `IPS`.`Permission_Group`
(`name`,`effective_date`,`expiration_date`)
VALUES
('Admin','2021-09-04','2027-09-04'),
('Supervisor','2021-09-04','2022-09-04'),
('Aalyst','2021-09-04','2022-09-04'),
('Clerk','2021-09-04','2022-09-04'),
('QA Analyst','2021-09-04','2022-09-04')

INSERT INTO `IPS`.`Permission`
(`a`,`effective_date`,`expiration_date`)
VALUES
('Create','2021-09-04','2027-09-04'),
('Read','2021-09-04','2027-09-04'),
('Update','2021-09-04','2027-09-04'),
('Delete','2021-09-04','2027-09-04')



INSERT INTO `IPS`.`Permission_Group_Permission`
(`permission_group_id`,`permission_id`)
VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(2,1),
(2,2),
(2,3),
(2,4),
(3,2),
(3,3),
(4,2)
(5,1),
(5,2),
(5,3),
(5,4)

INSERT INTO `IPS`.`Page`
(`name`,`effective_date`,`expiration_date`,`permission_id`,`permission_group_id`)
VALUES
('Login Page','2021-09-04','2027-09-04',1,1),
('Login Page','2021-09-04','2027-09-04',2,1),
('Login Page','2021-09-04','2027-09-04',1,2),
('Login Page','2021-09-04','2027-09-04',2,2),
('Login Page','2021-09-04','2027-09-04',1,3),
('Login Page','2021-09-04','2027-09-04',2,3),
('Login Page','2021-09-04','2027-09-04',1,4),
('Login Page','2021-09-04','2027-09-04',2,4),
('Login Page','2021-09-04','2027-09-04',1,5),
('Login Page','2021-09-04','2027-09-04',2,5);


INSERT INTO `IPS`.`Page_Element`
(`name`,`type`,`editable`,`visible`,`enabled`,
`effective_date`,`expiration_date`,`Page_id`)
VALUES
(<{name: }>,<{type: }>,<{editable: }>,<{visible: }>,
<{enabled: }>,<{effective_date: }>,<{expiration_date: }>,<{Page_id: }>);
