import {
  addNewContact,
  deleteContact,
  getContacts,
  getContactWithID,
  updateContact,
} from '../controllers/crmController';

const routes = app => {
  app
    .route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type ${req.method}`);
      next();
    }, getContacts)

    // Post endpoint
    .post(addNewContact);

  app
    .route('/contact/:contactID')

    // get a specyfic contact
    .get(getContactWithID)

    // update specyfic contact
    .put(updateContact)

    // delete specyfic contact
    .delete(deleteContact);
};

export default routes;
