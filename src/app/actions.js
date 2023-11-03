'use server';

export async function createTodo(prevState, formData) {
  try {
    console.log(formData.get('todo'));
    return revalidatePath('/');
  } catch (e) {
    return { message: 'Failed to create' };
  }
}
