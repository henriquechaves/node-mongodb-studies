import { Router } from 'express';
import * as PostController from '../controllers/message.controller';

const router = new Router();

// Get all messages
router.route('/messages').get(PostController.getMessages);

// Get one message by cuid
router.route('/messages/:cuid').get(PostController.getMessage);

// Add a new message
router.route('/messages').post(PostController.addMessage);

// Delete a message by cuid
router.route('/messages/:cuid').delete(PostController.deleteMessage);

export default router;
