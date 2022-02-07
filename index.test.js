class PersonDataAccessObject {
  constructor(database) {
    this.database = database
  }

  saveToDatabase(person) {
    this.database.save(person)
  }
}

// do not modify the above PersonDataAccessObject
// TODO: Wow. No Cow
describe('the PersonDataAccessObject', () => {
  it('calls the function that would save Ada Lovelace to the database', () => {
    /* Arrange */
    const mockSaveMethod = jest.fn( x => this.database = x );
    const mockDatabase = undefined;
    const personDataAccessObject = new PersonDataAccessObject(undefined)

    const expectedArgument = {firstName: 'Ada', lastName: 'Lovelace'}

    /* Act */
    personDataAccessObject.saveToDatabase(expectedArgument);

    /* Assert */
    expect(mockSaveMethod).toHaveBeenCalledWith(expectedArgument);
  })
})