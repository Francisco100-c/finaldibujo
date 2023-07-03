CREATE TABLE usuarios (id SERIAL, Email VARCHAR(50), password
VARCHAR(50), rol VARCHAR(50), Programa VARCHAR(50));
INSERT INTO usuarios values
(DEFAULT, 'francisco.100@hotmail.com','Profesor','admin','Autocad'),
(DEFAULT, 't.contreras@colegiorauli.cl','Estudiante','trini','Autocad');

CREATE TABLE usuarios1 (id SERIAL primary key, Email VARCHAR(50), password
VARCHAR(200), rol VARCHAR(50), Programa VARCHAR(50));

INSERT INTO usuarios1 values
(DEFAULT, 'francisco.100@hotmail.com','admin','Profesor','Autocad'),
(DEFAULT, 't.contreras@colegiorauli.cl','trini','Estudiante','Autocad');

CREATE TABLE portadas (id SERIAL primary key, imagen VARCHAR(200), dificultad
VARCHAR(10), nombre VARCHAR (70));

INSERT INTO portadas values
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1JJLYhR98Qyw6sshO8snf3DM0mIZS1DT9','Alta', 'Bomba de 2 Pistones'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1lVRu0e9O9TX4IEj7CY_33-DE_DInchCX','Alta', 'Rueda de Vagoneta'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1MIAL7QNrz-AzNYLKqbLKutrwG62_JE0P','Media','Cortador de Tubos'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1lqv8SPa8O51LctqS_4DV16JRvmfuopaA','Baja', 'Excentrica'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1XF_6jkCaJWYfB7EyNhFhfZmGSb_MjpL2','Alta','Patin'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1-K_9NQQndfjYguOkoKLdlBRXSeAvi-uD','Alta', 'Rueda Portante Grua'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1CyiHEiOICkg_kTo13gnNH4ENWZ4K7PdX','Baja', 'Trocola'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1TG5PRLx1tjHuWrRHzDOnJX3FevbaYgBV','Media', 'Válvula de bola de 3 vias'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=19ttNObn_guvyyF0ndkBd1lX2JKhIfOc4','Media', 'Volante de Transmisión'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1O1rZNTshVN9ANjG9qiGPW1X5K1v-VCjv','Media', 'Bomba de engranajes'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1Uo0L9Bn2WxPWZoNbYqkHa6w36rNV4Mm_','Alta', 'Cinta Transportadora');

CREATE TABLE VerMas (id SERIAL primary key, img1 VARCHAR(200), img2 VARCHAR(200), img3 VARCHAR(200));

INSERT INTO VerMas values
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1T4GMHTtxv8ICG0C04LyjZ0NcDZhZa8lt','https://drive.google.com/uc?export=view&id=1ETHVfw10lsJVlQBC6XyATPfl0eo-1I9h','https://drive.google.com/uc?export=view&id=12NfZsA7EkCNSJgfAB_GDNKjerwFKRkfQ'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1dX2hoqfelZYGzCpk2yXc9cfi2Zq_IJQR','https://drive.google.com/uc?export=view&id=1xxvc5kp_xm6kvuUAqHNHq4KOZJ9oW2_A', 'https://drive.google.com/uc?export=view&id=1X6Cp69NLcsIKlx0fIunxo6ebK49qDeC3'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1hfIJyp7aGthLQzYFuR97XUZR6tPkg2Uu','https://drive.google.com/uc?export=view&id=1re3owqEgKdqiXRjHUESCR1DJbWs3yVck',''),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1s2TOoeGm6y1FLLJqqDFaT3VmWQW6npoB','https://drive.google.com/uc?export=view&id=1FZXcY0rhrBSpPqH24gnVYuZyXWdXdLtY',''),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=10_FzGKKya6wtYeBKhjCqlAefNXJZyo70','https://drive.google.com/uc?export=view&id=1EC459VEgkfnJLBONJWCA-g5u2N1l_wbQ','https://drive.google.com/uc?export=view&id=1XFOeGxG6QHYD0UxfEF5ywl0yTZkNJshZ'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=16akmahVx7xZ4XdVVAU0NvF6eAiPxumQM','https://drive.google.com/uc?export=view&id=13YRp9pqQDrJsBZfO9td0t-ffi9Zj2Lpo', 'https://drive.google.com/uc?export=view&id=1eOnbCUIUABUBeO9CH1IZToZCBxMtmMVT'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1i9mulLqPYFbQO2t8cBNZEfhkNoc75xn6','https://drive.google.com/uc?export=view&id=1bjyPlaYAR3hVCAFSbI1w2kSb9a4-EEZo', 'https://drive.google.com/uc?export=view&id=1Q-g09d9ncnYJgPHhWXXlUAue7IfxEtNz'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1TChRBU2mQb-GJrSWAOPdYv5Hg1Wli7BJ','https://drive.google.com/uc?export=view&id=1j9biFaK5D0wBQsL4iNjEV7y7acGA0oIy', 'https://drive.google.com/uc?export=view&id=1RFUqF6AJpogMdMU3NkdLKPc2x-WTkqSl'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1Hs830yprmZEROXkM663tkwNbpMrA4CkM','https://drive.google.com/uc?export=view&id=1w8i30lw7IMB25JUr8T6fiSjRiORWqyiw', 'https://drive.google.com/uc?export=view&id=1noIeW0O0PpEumrRfrMlQmvFutvFoYrjN'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1j6Jjb6Y8CzKmb8n8jKpk05fG-IPM7e3Q','https://drive.google.com/uc?export=view&id=1kj3lZjduW7N6HooHRhreWXhd9vt_gtsc', 'https://drive.google.com/uc?export=view&id=16Bh30UsBSAYwP_VL4aYgQrVAu3TZ3_0f'),
(DEFAULT, 'https://drive.google.com/uc?export=view&id=1_NfiUwK6mz-lKCYhUGGzdQkrI7enRDfP','https://drive.google.com/uc?export=view&id=1C5x_LWV9ZADH46n1VNdSNh6vHbRqZPGc', 'https://drive.google.com/uc?export=view&id=1AlW3mYELnhcwDACJNDR7tdKvTFDVVkHm');

CREATE TABLE proyectos (id SERIAL primary key, proyect VARCHAR(200), nombre VARCHAR(200));

INSERT INTO proyectos values
(DEFAULT,'https://drive.google.com/uc?export=view&id=1rptWYwyIxdyISjneAv7Mgzy63hFbukTS', 'Bomba de 2 Pistones'),
(DEFAULT,'https://drive.google.com/uc?export=view&id=1_iP07_aNZbcLDCYhC8ORz0Kv77q00iaz', 'Rueda de Vagoneta'),
(DEFAULT,'https://drive.google.com/uc?export=view&id=126mwrwi2ovd3a9nuAT9ULM112zoXS68y','Cortador de Tubos'),
(DEFAULT,'https://drive.google.com/uc?export=view&id=1ER7o3XFqMtzwAlupmkWzQsuXFxFmY_-S', 'Excentrica'),
(DEFAULT,'https://drive.google.com/uc?export=view&id=1u-z7nzvS1naAfYFE3ppXXbZTFHFUnVdn','Patin'),
(DEFAULT,'https://drive.google.com/uc?export=view&id=1E4hdFumj7jvOFUMXDciTsjgZQehy0VD3', 'Rueda Portante Grua'),
(DEFAULT,'https://drive.google.com/uc?export=view&id=1QVzZLO-8rR1gaSrCJK_lqXxX4IHRuaiN', 'Trocola'),
(DEFAULT,'https://drive.google.com/uc?export=view&id=1AGI2Yout0zpvXx9YWfU-V1dWWiBeMNBl', 'Válvula de bola de 3 vias'),
(DEFAULT,'https://drive.google.com/uc?export=view&id=1PeCHiLgG1AE3s1Gwu_Jfzw_R3gw9KNOO', 'Volante de Transmisión'),
(DEFAULT,'https://drive.google.com/uc?export=view&id=16lkvC6S8v1luEgfRGZBCLHka6_PHwqUb', 'Bomba de engranajes'),
(DEFAULT,'https://drive.google.com/uc?export=view&id=1eW2WCgKQ_znBm10TIz7fy8l_2fR5nG3H', 'Cinta Transportadora');