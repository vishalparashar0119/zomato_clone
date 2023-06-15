import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  menu: [{
    name: { type: String, required: true },
    items: [{
      type: mongoose.Types.ObjectId,
      ref: 'foods',
    }]
  }],
  recomended: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'food',
    unique: true,
  }]
}, {
  timestamps: true
});

export const MenuModel = mongoose.model('menus', menuSchema);
