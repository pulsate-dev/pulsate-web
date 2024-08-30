import { Button } from "@radix-ui/themes";
import { t } from "i18next";

type FollowButtonProps = {
  /** account following status.
   * - notFollowing: not following this account
   * - following: following this account
   * - self: account is self
   * - blocking: blocking this account
   */
  accountFollowStatus: "notFollowing" | "following" | "self" | "blocking";
  /** is followed by this account */
  isFollowed: boolean;
};

export const FollowButton = ({
  accountFollowStatus,
  isFollowed
}: FollowButtonProps) => {
  let buttonLabel: string;
  switch (accountFollowStatus) {
    case "notFollowing":
      buttonLabel = isFollowed ? t("followBack") : t("follow");
      break;
    case "following":
      buttonLabel = t("following");
      break;
    case "self":
      buttonLabel = t("editProfile");
      break;
    case "blocking":
      buttonLabel = t("blocking");
      break;
  }

  return (
    <Button color={accountFollowStatus === "blocking" ? "ruby" : "indigo"}>
      {buttonLabel}
    </Button>
  );
};
