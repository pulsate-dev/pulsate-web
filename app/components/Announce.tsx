import { IconButton, Text, ThickCheckIcon, Tooltip } from "@radix-ui/themes";
import styles from "./announce.module.css";
import { t } from "i18next";
import { Time } from "~/components/Time";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon
} from "@radix-ui/react-icons";

export interface AnnounceProps {
  announceType: "warn" | "info";
  title: string;
  body: string;
  updatedAt: Date;
}

export const Announce = ({
  announceType,
  title,
  body,
  updatedAt
}: AnnounceProps) => {
  return (
    <div>
      <div className={styles.announceTitleContainer}>
        <div className={styles.announceTitle}>
          <Tooltip
            content={t(
              announceType === "warn" ? "announce.warn" : "announce.info"
            )}
          >
            {announceType === "warn" ? (
              <ExclamationTriangleIcon className={styles.announceIcon} />
            ) : (
              <InfoCircledIcon className={styles.announceIcon} />
            )}
          </Tooltip>
          <Text as="p" size="5" weight="medium">
            {title}
          </Text>
        </div>
        <Tooltip content={t("notification.read")}>
          <IconButton variant="outline">
            <ThickCheckIcon className={styles.readButtonIcon} />
          </IconButton>
        </Tooltip>
      </div>

      <p>{body}</p>

      <Text size="2" color="gray">
        <Time date={updatedAt} />
      </Text>
    </div>
  );
};
