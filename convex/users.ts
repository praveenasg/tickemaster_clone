import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const updateUser = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, { userId, name, email }) => {
    const exisitingUser = await ctx.db
      .query("users")
      .withIndex("by_user_id", (q) => q.eq("userId", userId))
      .first();

    if (exisitingUser) {
      await ctx.db.patch(exisitingUser._id, {
        name,
        email,
      });
      return exisitingUser._id;
    }

    const newUserId = await ctx.db.insert("users", {
      userId,
      name,
      email,
      stripeConnectId: undefined,
    });

    return newUserId;
  },
});
