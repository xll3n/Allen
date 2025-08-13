from playwright.sync_api import sync_playwright
import re

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the watch page
        page.goto("http://localhost:3000/watch/123/1")

        # Expect the heading to be visible
        expect(page.get_by_role("heading", name=re.compile(r"Watching Anime ID: 123, Episode: 1"))).to_be_visible()

        # Expect the video player wrapper to be visible
        player_wrapper = page.locator(".player-wrapper")
        expect(player_wrapper).to_be_visible()

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/video_player.png")

        browser.close()

if __name__ == "__main__":
    run()
