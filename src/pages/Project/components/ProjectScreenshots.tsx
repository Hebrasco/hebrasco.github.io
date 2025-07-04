import { Container } from 'components/layout'
import { Section } from 'components/ui'
import { HorizontalList } from 'components/ui/HorizontalList'
import horizontalListStyles from 'components/ui/HorizontalList/HorizontalList.module.css'
import { PLATFORM } from 'data/platform'
import { useColorScheme, useScrollSnapAlign, useWindowSize } from 'hooks'
import { SCREENSHOT_CONTAINER_SIZE } from 'pages/Project/constants'
import { useProject } from 'pages/Project/hooks/useProject'
import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { conditionalStyle } from 'utils'

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

  if (!project.screenshots || !Object.values(project.screenshots).filter(Boolean).length) {
    return null
  }

  return (
    <Container fluid>
      <Section
        Action={() =>
          Object.values(project.screenshots ?? {}).filter(Boolean).length > 1 ? (
            <Dropdown>
              <Dropdown.Toggle className="btn-link">
                {PLATFORM[platformScreenshots]}
                <i className="bi bi-chevron-down ms-1"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu align="end" className="shadow">
                <p className="text-muted">Platform</p>
                {(Object.keys(project.screenshots ?? {}) as [keyof typeof PLATFORM])
                  .sort((a) => {
                    if (a === 'iphone') return -1
                    if (a === 'ipad') return 1
                    if (a === 'mac') return 1
                    if (a === 'web') return 1

                    return 0
                  })
                  .map((platform) => (
                    <Dropdown.Item
                      as="button"
                      key={`platform-dropdown-item-${platform}`}
                      onClick={() => setPlatformScreenshots(platform)}
                    >
                      <i
                        className={`bi bi-check-circle-fill me-2 ${conditionalStyle(platformScreenshots === platform, 'visible', 'invisible')}`}
                      ></i>
                      {PLATFORM[platform]}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          ) : null
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
