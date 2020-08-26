import { runQuery } from "~/node_common/data/utilities";

export default async ({ subscriberUserId, slateId, userId }) => {
  return await runQuery({
    label: "CREATE_SUBSCRIPTION",
    queryFn: async (DB) => {
      const query = await DB.insert({
        owner_user_id: subscriberUserId,
        target_slate_id: slateId,
        target_user_id: userId,
      })
        .into("subscriptions")
        .returning("*");

      const index = query ? query.pop() : null;
      return JSON.parse(JSON.stringify(index));
    },
    errorFn: async (e) => {
      return {
        error: "CREATE_SUBSCRIPTION",
        source: e,
      };
    },
  });
};