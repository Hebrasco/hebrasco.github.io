import { Container } from 'components/layout'
import { Section, Select } from 'components/ui'
import { HorizontalList } from 'components/ui/HorizontalList'
import horizontalListStyles from 'components/ui/HorizontalList/HorizontalList.module.css'
import { PLATFORM } from 'data/platform'
import { useColorScheme, useScrollSnapAlign, useWindowSize } from 'hooks'
import { SCREENSHOT_CONTAINER_SIZE } from 'pages/Project/constants'
import { useProject } from 'pages/Project/hooks/useProject'
import { useMemo, useState } from 'react'

function ProjectScreenshots() {
  const [platformScreenshots, setPlatformScreenshots] = useState<keyof typeof PLATFORM>('iphone')
  const { project } = useProject()
  const scrollSnapAlign = useScrollSnapAlign()
  const { colorScheme } = useColorScheme()
  const { isMobile } = useWindowSize()

  const screenshotSizes: {
    [K in keyof typeof PLATFORM]: {
      height: number
      width: number
    }
  } = {
    ipad: isMobile ? SCREENSHOT_CONTAINER_SIZE.ipad.xs : SCREENSHOT_CONTAINER_SIZE.ipad.md,
    iphone: isMobile ? SCREENSHOT_CONTAINER_SIZE.iphone.xs : SCREENSHOT_CONTAINER_SIZE.iphone.md,
    mac: isMobile ? SCREENSHOT_CONTAINER_SIZE.mac.xs : SCREENSHOT_CONTAINER_SIZE.mac.md,
    web: isMobile ? SCREENSHOT_CONTAINER_SIZE.web.xs : SCREENSHOT_CONTAINER_SIZE.web.md,
  }

  const selectItems = useMemo(
    () =>
      (Object.keys(project.screenshots ?? {}) as [keyof typeof PLATFORM]).sort((a) => {
        if (a === 'iphone') return -1
        if (a === 'ipad') return 1
        if (a === 'mac') return 1
        if (a === 'web') return 1

        return 0
      }),
    [project.screenshots]
  )

  if (!project.screenshots || !Object.values(project.screenshots).filter(Boolean).length) {
    return null
  }

  return (
    <Container fluid>
      <Section
        Action={
          Object.values(project.screenshots ?? {}).filter(Boolean).length > 1 ? (
            <Select
              items={selectItems}
              menuTitle="Platforms"
              onChange={setPlatformScreenshots}
              valueMap={PLATFORM}
            />
          ) : undefined
        }
        fluidContainer
        lg
        title="Screenshots"
      >
        <HorizontalList key={`screenshot-container-${platformScreenshots}`}>
          {project.screenshots[platformScreenshots]?.[colorScheme].map((screenshot, index) => (
            <li
              className={`${horizontalListStyles['horizontal-list-content-container']} p-0`}
              // biome-ignore lint/suspicious/noArrayIndexKey: No other key available
              key={`${platformScreenshots}-screenshot-${index}`}
              style={{
                backgroundColor: 'unset',
                height: screenshotSizes[platformScreenshots].height,
                justifyContent: 'flex-start',
                scrollSnapAlign,
                width: screenshotSizes[platformScreenshots].width,
              }}
            >
              <img
                alt={screenshot.altText}
                height={screenshotSizes[platformScreenshots].height}
                src={screenshot.src}
                width={screenshotSizes[platformScreenshots].width}
              />
            </li>
          ))}
        </HorizontalList>
      </Section>
    </Container>
  )
}

export { ProjectScreenshots }
