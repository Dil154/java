import java.util.Scanner;

public class Login {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String email, password;

    System.out.print("Enter email: ");
    email = sc.nextLine();

    System.out.print("Enter password: ");
    password = sc.nextLine();

    if (email.equals("example@email.com") && password.equals("password123")) {
      System.out.println("Login successful!");
    } else {
      System.out.println("Login failed. Incorrect email or password.");
    }
  }
}

