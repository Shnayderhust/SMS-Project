CREATE TABLE student(
    student_id INT PRIMARY KEY,
    f_name VARCHAR(50) NOT NULL,
    m_name VARCHAR(50) NOT NULL,
    l_name VARCHAR(50) NOT NULL,
    dob TIMESTAMP NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone INT(10) NOT NULL,
    password VARCHAR(70) NOT NULL,
    profile_pic VARCHAR(500) NOT NULL,
);
CREATE TABLE courses(
    course_id INT PRIMARY KEY,
    course_name VARCHAR NOT NUll,
    course_code INT(5) NOT NULL,
    course_descrption VARCHAR NOT NULL
);
CREATE TABLE enrollment(
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date TIMESTAMP,
    FOREIGN KEY(student_id) REFERENCES student(student_id),
    FOREIGN KEY(course_id) REFERENCES courses(course_id)
);
CREATE TABLE result(
    result_id INT PRIMARY KEY,
    assignment INT,
    test_one INT,
    test_two INT,
    coursework INT,
    ue INT,
    grade VARCHAR(2),
    student_id INT,
    course_id INT,
    FOREIGN KEY(student_id) REFERENCES student(student_id),
    FOREIGN KEY(course_id) REFERENCES courses(course_id)
);
CREATE TABLE gpa(
    gpa_id INT PRIMARY KEY,
    student_id INT,
    gpa FLOAT(3),
    FOREIGN KEY(student_id) REFERENCES student(student_id)
);
CREATE TABLE activities(
    activity_id INT PRIMARY KEY,
    student_id INT NOT NULL,
    activity_name VARCHAR(50) NOT NULL,
    activity_date TIMESTAMP NOT NULL,
    activity_description VARCHAR(200) NOT NULL,
    activity_status TINYINT(0),
    FOREIGN KEY(student_id) REFERENCES student(student_id)
);