import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import { MyORM } from '../orm';

/**
 * Generates and inserts fake users into the database with hashed passwords.
 * @param orm The ORM instance to use for database operations.
 * @param numUsers The number of fake users to generate.
 * @returns A promise that resolves when users are successfully generated.
 */
export async function generateFakeUsers(
  orm: MyORM,
  numUsers: number = 10,
): Promise<void> {
  if (!(await orm.isDatabaseEmpty())) {
    console.log('database has already been seeded');
    return;
  }

  for (let i = 0; i < numUsers; i++) {
    const plainPassword = faker.internet.password();
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const userData = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: hashedPassword,
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      gender: faker.helpers.arrayElement(['male', 'female']),
      biography: `${faker.lorem.sentence()}. Password: ${plainPassword}`, // For testing purposes
      fame_rating: faker.number.int({ min: 1, max: 100 }),
      gps_latitude: faker.location.latitude(),
      gps_longitude: faker.location.longitude(),
      is_email_verified: faker.datatype.boolean(),
    };

    const insertedUser = await orm.insert({
      tableName: 'users',
      record: userData,
    });

    const avatarData = {
      url: faker.image.avatar(),
      is_profile_picture: true,
      user_id: insertedUser.id, // Assuming the ID is returned from the insert operation
    };

    await orm.insert({
      tableName: 'user_avatar',
      record: avatarData,
    });
  }
}
