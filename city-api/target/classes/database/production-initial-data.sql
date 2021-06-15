
INSERT INTO users (id, username, password, name, surname, phone, email) VALUES
('acf49189-e872-48b0-949e-63d455f4fd86', 'user',
 '{bcrypt}$2y$12$Asaa8kGQMLq5IQ2LNb2VEeF6zKX4larg/rvALtrzLlJhczyl6teWC', 'Vardenis', 'Pavardenis', '+37037066555', 'vard@vard.lt'), /*pass*/
('7a580a64-a414-40dc-8861-52aa79ff2258', 'admin',
 '{bcrypt}$2y$12$RZ77B8lWhj..N1EA5Z2Q5.LnQ5YcwjhNaA13EljO6BvGMVeQeD4yO', 'Adminas', 'Adminauskas','+37037033333', 'admin@admin.com'); /*admin*/

INSERT INTO roles (id, name) VALUES
('acf49189-e872-48b0-949e-63d455f4fd86', 'USER'),
('7a580a64-a414-40dc-8861-52aa79ff2258', 'ADMIN');

INSERT INTO users_roles (user_id, roles_id) VALUES
('acf49189-e872-48b0-949e-63d455f4fd86', 'acf49189-e872-48b0-949e-63d455f4fd86'), /* user -> USER ROLE */
('7a580a64-a414-40dc-8861-52aa79ff2258', 'acf49189-e872-48b0-949e-63d455f4fd86'),
('7a580a64-a414-40dc-8861-52aa79ff2258', '7a580a64-a414-40dc-8861-52aa79ff2258'); /* admin -> USER, ADMIN ROLES */

