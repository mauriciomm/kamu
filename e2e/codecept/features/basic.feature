Feature: Borrow and return book
  In order to borrow a book
  As an user
  I want to be able to navigate throught the book list

  Scenario: borrow a book
    Given I am logged in as an user
    And I choose an library
    When I open a book information
    Then I can borrow it
    # When I check the books I borrowed
    # Then I can see that the book is there
    # And I can return it


  Scenario: return a book
    Given I am logged in as an user
    And I choose an library
    And I have a borrowed book
    When I open this book information
    Then I can return it


  Scenario: add a book to a library
    Given I am logged in as an admin
    When I go to the books page
    Then I can add a book
    And I can add a book copy to a library

  Scenario: delete a book from a library
    Given I am logged in as an admin
    When I go to the books page
    Then I can search for a specific book
    And I can delete it
