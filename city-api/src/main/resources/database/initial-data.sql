INSERT INTO IMAGES (id, file_name, media_type, size)
VALUES ('378b58f7-16c0-4d2f-8e03-f1e6344dbbd5',
        'sportas', 'image/png', 6595);


INSERT INTO ARTICLES (id, name, description, content, timestamp, image)
VALUES ('acf49189-e872-48b0-949e-63d455f4fd86',
        'Pirmas straipsnis',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
        ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
        ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
        ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
        'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
        ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
        ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
        ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
        'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
        'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
        ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
        'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
        'sed tempor mauris. Suspendisse.',
        '2020-04-25',
        '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');
--        ('7a580a64-a414-40dc-8861-52aa79ff2259',
--         'Antras straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2021-05-25'),
--        ('7a580a64-a414-40dc-8861-52aa79ff2251',
--         'Trečias straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2021-01-25'),
--        ('7a580a64-a414-40dc-8861-52aa79ff2252',
--         'Ketvirtas straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2021-04-22'),
--        ('7a580a64-a414-40dc-8861-52aa79ff2253',
--         'Penkstas straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2021-02-25'),
--        ('7a580a64-a414-40dc-8861-52aa79ff2254',
--         'Šeštas straipsnis', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2020-05-25'),
--        ('7a580a64-a414-40dc-8861-52aa79ff2255',
--         'Septintas straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2020-10-25'),
--        ('7a580a64-a414-40dc-8861-52aa79ff2256',
--         'Aštuntas straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2021-03-25'),
--        ('7a580a64-a414-40dc-8861-52aa79ff2257',
--         'Devintas straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2020-09-25'),
--        ('7a580a64-a414-40dc-8861-52aa79ff2217',
--         'Dešimtas straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2019-04-25'),
--        ('7a580a64-a414-40dc-8861-52aa79ff2227',
--         'Vienuoliktas straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2021-05-05'),
--        ('7a580a64-a414-40dc-8861-52aa79ff1227',
--         'Dviliktas straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2018-04-25'),
--        ('7a580a64-a414-40dc-8861-52aa79ff3227',
--         'Tryliktas straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2019-08-25'),
--        ('7a580a64-a414-40dc-8861-52aa79ff4227',
--         'Keturiokliktas straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2021-01-15'),
--        ('7a580a64-a414-40dc-8861-52aa79ff2258',
--         'Penkioliktas straipsnis',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non.',
--         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi commodo,' ||
--         ' lacinia leo vel, condimentum ligula. Etiam tincidunt metus fermentum nisl faucibus' ||
--         ' facilisis quis quis metus. Vivamus ornare, purus in cursus consequat, nulla lacus' ||
--         ' egestas velit, sed pharetra elit velit id eros. Nunc sit amet ornare mauris, quis ' ||
--         'vulputate velit. Nam non lacinia libero. Aenean ac enim lobortis, lacinia dolor ac,' ||
--         ' laoreet nunc. Ut interdum tincidunt ligula in tristique. Morbi scelerisque blandit' ||
--         ' erat vitae vestibulum. Phasellus in massa posuere, vehicula libero at, iaculis urna.' ||
--         ' Mauris in est consequat, ullamcorper felis eget, hendrerit massa. Nunc a urna id leo ' ||
--         'scelerisque condimentum volutpat ac augue. Vivamus consectetur vehicula vestibulum. ' ||
--         'Proin cursus neque vel nisi rutrum, vitae convallis lectus vulputate. Maecenas accumsan' ||
--         ' eros nec neque tempus aliquam. Fusce molestie, enim nec ullamcorper consectetur, risus ' ||
--         'massa molestie odio, id elementum sem purus interdum risus. In sed tempor erat. Aenean ' ||
--         'sed tempor mauris. Suspendisse.',
--         '2021-04-01');

INSERT INTO USERS (id, username, password, name, surname, phone, email) VALUES
('acf49189-e872-48b0-949e-63d455f4fd86', 'user',
 '{bcrypt}$2y$12$Asaa8kGQMLq5IQ2LNb2VEeF6zKX4larg/rvALtrzLlJhczyl6teWC', 'Vardenis', 'Pavardenis', '+37037066555', 'vard@vard.lt'), /*pass*/
('7a580a64-a414-40dc-8861-52aa79ff2258', 'admin',
 '{bcrypt}$2y$12$RZ77B8lWhj..N1EA5Z2Q5.LnQ5YcwjhNaA13EljO6BvGMVeQeD4yO', 'Adminas', 'Adminauskas','+37037033333', 'admin@admin.com'); /*admin*/

INSERT INTO ROLES (id, name) VALUES
('acf49189-e872-48b0-949e-63d455f4fd86', 'USER'),
('7a580a64-a414-40dc-8861-52aa79ff2258', 'ADMIN');

INSERT INTO USERS_ROLES (user_id, roles_id) VALUES
('acf49189-e872-48b0-949e-63d455f4fd86', 'acf49189-e872-48b0-949e-63d455f4fd86'), /* user -> USER ROLE */
('7a580a64-a414-40dc-8861-52aa79ff2258', 'acf49189-e872-48b0-949e-63d455f4fd86'),
('7a580a64-a414-40dc-8861-52aa79ff2258', '7a580a64-a414-40dc-8861-52aa79ff2258'); /* admin -> USER, ADMIN ROLES */

INSERT INTO COMMENTS (comment_id, timestamp, content, article_id, user_id)
VALUES ('9f650ee7-da8c-430d-99e5-a771aa98c64a', '2021-04-03', 'Bandau irašyti pirmą komentarą',
        'acf49189-e872-48b0-949e-63d455f4fd86', 'acf49189-e872-48b0-949e-63d455f4fd86'),
       ('9f650ee7-da8c-430d-99e5-a771aa98c65a', '2021-04-04', 'Bandau irašyti pirmą komentarą pakartotinai',
        '7a580a64-a414-40dc-8861-52aa79ff2259', '7a580a64-a414-40dc-8861-52aa79ff2258');
