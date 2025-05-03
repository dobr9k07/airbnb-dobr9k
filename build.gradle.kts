plugins {
	java
	war
	id("org.springframework.boot") version "3.4.4"
	id("io.spring.dependency-management") version "1.1.7"
	id("org.flywaydb.flyway") version "11.8.0"
}

group = "com.itstep"
version = "0.0.1-SNAPSHOT"

java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(21)
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa:3.4.5")
	implementation("org.springframework.boot:spring-boot-starter-security:3.4.5")
	implementation("org.springframework.boot:spring-boot-starter-web:3.4.5")

	implementation("org.flywaydb:flyway-core:11.8.0")
	implementation("org.flywaydb:flyway-mysql:11.8.0")
	//implementation("org.hibernate:hibernate-spatial:6.6.13.Final")

	implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.8.6")

	runtimeOnly("org.mariadb.jdbc:mariadb-java-client:3.5.3")

	providedRuntime("org.springframework.boot:spring-boot-starter-tomcat:3.4.5")

	testImplementation("org.springframework.boot:spring-boot-starter-test:3.4.5")
	testImplementation("org.springframework.security:spring-security-test:6.4.5")
	testRuntimeOnly("org.junit.platform:junit-platform-launcher:1.13.0-M2")

	compileOnly("org.projectlombok:lombok:1.18.38")
	annotationProcessor("org.projectlombok:lombok:1.18.38")
}

tasks.withType<Test> {
	useJUnitPlatform()
}
