# Stage 1: build con Maven
FROM maven:3.9.4-eclipse-temurin-17 AS build
WORKDIR /app

# Copia i file di progetto
COPY pom.xml .
COPY src ./src

# Compila l'app senza test
RUN mvn clean package -DskipTests

# Stage 2: runtime con JDK leggero
FROM eclipse-temurin:17-jdk
WORKDIR /app

# Copia il .jar dalla fase di build
COPY --from=build /app/target/*.jar app.jar

# Espone la porta usata da Spring Boot
EXPOSE 8080

# Comando per avviare l'applicazione
ENTRYPOINT ["java", "-jar", "app.jar"]
