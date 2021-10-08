import { Schema, Model, model, Document } from "mongoose";

/**
 * Model attrs during creation.
 */
interface Attrs {
  name: String;
  email: String;
  phone: String;
  photo?: String;
  user_type?: String;
  password: String;
}

interface UserModel extends Model<UserDoc> {
  build(attrs: Attrs): UserDoc;
}

interface UserDoc extends Document {
  name: string;
  email: string;
  country?: string;
  phone: string;
  photo?: string;
  password: string;
  user_type?: string;
  created_at?: Date;
  password_changed?: boolean;
  password_change_User?: string;
  is_admin?: boolean;
  is_approved?: boolean;
  is_active?: boolean;
  activation_code?: string;
}

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    country: { type: String },
    phone: { type: String },
    photo: { type: String },
    password: { type: String },
    user_type: { type: String },
    password_changed: { type: Boolean },
    password_change_User: { type: String },
    is_admin: { type: Boolean },
    is_approved: { type: Boolean },
    activation_code: { type: String },
    created_at: {
      type: Date,
      default: Date.now,
    },
    is_active: { type: Boolean, default: true },
  },
  {
    toJSON: {
      virtuals: true,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
      versionKey: false,
    },
  }
);

userSchema.statics.build = (attrs: Attrs) => {
  return new User(attrs);
};

const User = model<UserDoc, UserModel>("User", userSchema);
export { User };
