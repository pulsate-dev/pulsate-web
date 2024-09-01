import { IconButton, Text, ThickCheckIcon, Tooltip } from "@radix-ui/themes";
import styles from "./announce.module.css";
import { t } from "i18next";
import { Time } from "~/components/Time";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon
} from "@radix-ui/react-icons";

interface AnnounceProps {
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
    <>
      <div className={styles.announceTitleContainer}>
        <div className={styles.announceTitle}>
          <Tooltip
            content={t(
              announceType === "warn" ? "announce.warn" : "announce.info"
            )}
          >
            <Text as="span">
              ️
              {announceType === "warn" ? (
                <ExclamationTriangleIcon />
              ) : (
                <InfoCircledIcon />
              )}
            </Text>
          </Tooltip>
          <Text as="p" size="5" weight="medium">
            {title}
          </Text>
        </div>
        <Tooltip content={t("notification.read")}>
          <IconButton className={styles.readButton} variant="outline">
            <ThickCheckIcon />
          </IconButton>
        </Tooltip>
      </div>

      <p>{body}</p>

      <Text size="2" color="gray">
        <Time date={updatedAt} />
      </Text>
    </>
  );
};
