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
  const buttonLabel: Record<FollowButtonProps["accountFollowStatus"], string> =
    {
      notFollowing: isFollowed ? t("followBack") : t("follow"),
      following: t("following"),
      self: t("editProfile"),
      blocking: t("blocking")
    };

  return (
    <Button color={accountFollowStatus === "blocking" ? "ruby" : "indigo"}>
      {buttonLabel[accountFollowStatus]}
    </Button>
  );
};
