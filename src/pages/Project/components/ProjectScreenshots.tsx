import { Section } from 'components/ui'
import { MISC } from 'data'
import { PLATFORM } from 'data/platform'
import { useColorScheme, useScrollSnapAlign, useWindowSize } from 'hooks'
import previewStyles from 'pages/Home/components/Projects/components/Preview/index.module.css'
import SCREENSHOT_CONTAINER_SIZE from 'pages/Home/components/Projects/constants/ScreenshotContainerSize'
import projectStyles from 'pages/Home/components/Projects/index.module.css'
import { useProject } from 'pages/Project/hooks/useProject'
import { useMemo, useState } from 'react'
import { Container, Dropdown, Image } from 'react-bootstrap'
import { conditionalStyle } from 'utils'

function ProjectScreenshots() {
  const [platformScreenshots, setPlatformScreenshots] = useState<keyof typeof PLATFORM>('iphone')
  const { project } = useProject()
  const scrollSnapAlign = useScrollSnapAlign()
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light
  const { isXs, isSm } = useWindowSize()
  const isMobile = useMemo(() => isXs || isSm, [isXs, isSm])

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
        <div
          className={projectStyles['preview-scroll-container']}
          key={`screenshot-container-${platformScreenshots}`}
        >
          <div className={projectStyles['preview-container']}>
            <div className={projectStyles['preview-container-card-set']}>
              {project.screenshots[platformScreenshots]?.[isLightScheme ? 'light' : 'dark'].map(
                (screenshot, index) => (
                  <div
                    className={`${previewStyles['preview-content-container']} p-0`}
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
                    <Image alt={screenshot.altText} src={screenshot.src} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}

export { ProjectScreenshots }
