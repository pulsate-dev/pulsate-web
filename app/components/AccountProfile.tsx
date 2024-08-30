import { t } from "i18next";
import Avatar from "./Avatar";
import { Text } from "@radix-ui/themes";
import styles from "./accountProfile.module.css";
import { FollowButton } from "./FollowButton";

type AccountProfileProps = {
  /** account following status.
   * - notFollowing: not following this account
   * - following: following this account
   * - self: account is self
   * - blocking: blocking this account
   */
  accountFollowStatus: "notFollowing" | "following" | "self" | "blocking";
  /** is followed by this account */
  isFollowed: boolean;
  avatarUrl: string;
  headerUrl: string;
  nickname: string;
  accountName: string;
  bio: string;
  followersCount: number;
  followingCount: number;
};

export const AccountProfile = ({
  accountFollowStatus,
  isFollowed,
  avatarUrl,
  headerUrl,
  nickname,
  accountName,
  bio,
  followersCount,
  followingCount
}: AccountProfileProps) => {
  return (
    <>
      <img
        className={styles.accountProfileHeader}
        src={headerUrl}
        alt={`${nickname} header image`}
      />

      <div className={styles.accountProfileInfo}>
        <Avatar
          {...{ name: accountName, nickname: nickname, iconUrl: avatarUrl }}
        />
        <FollowButton {...{ accountFollowStatus, isFollowed }} />
      </div>

      <div className={styles.accountProfileStatus}>
        <Text size={"3"}>{bio}</Text>

        <div className={styles.accountFollowCount}>
          <Text as={"div"} size={"4"}>
            <Text as={"span"} weight={"medium"}>
              {followingCount}
            </Text>{" "}
            <Text as={"span"} color={"gray"}>
              {t("following")}
            </Text>
          </Text>
          <Text as={"div"} size={"4"}>
            <Text as={"span"} weight={"medium"}>
              {followersCount}
            </Text>{" "}
            <Text as={"span"} color={"gray"}>
              {t("followers")}
            </Text>
          </Text>
        </div>
      </div>
    </>
  );
};
